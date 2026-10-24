/**
 * FSRS (Free Spaced Repetition Scheduler) Algorithm Implementation
 * Optimized for KUSKAT: High-retention active recall for academic & medical exams.
 * Based on the DSR (Difficulty, Stability, Retrievability) memory model.
 */

export type FSRSRating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy
export type FSRSState = 'New' | 'Learning' | 'Review' | 'Relearning';

export interface FSRSCard {
  id: string;
  front: string;
  back: string;
  category: string;
  topic?: string;
  keyTakeaway?: string;
  sourceExam?: string;
  difficulty: number;    // D: 1 to 10
  stability: number;     // S: memory stability in days
  retrievability: number;// R: probability of recall (0 to 1)
  reps: number;
  lapses: number;
  state: FSRSState;
  lastReviewDate?: string;
  nextReviewDate: string;
}

// Default FSRS Parameters tuned for high-stakes admission and licensing exams
const REQUESTED_RETENTION = 0.90; // Target 90% recall
const W_PARAMS = [
  0.40255, 1.18385, 3.173, 15.69105, // Initial stability for Again, Hard, Good, Easy
  7.1949, 0.5345, 1.4604,            // Difficulty update weights
  0.0046, 1.5457, 0.1192, 1.0192,    // Stability review weights
  1.9395, 0.11, 0.296, 0.2269        // Relearning & lapse weights
];

export function createNewFSRSCard(
  id: string,
  front: string,
  back: string,
  category: string,
  options?: { topic?: string; keyTakeaway?: string; sourceExam?: string }
): FSRSCard {
  const now = new Date();
  return {
    id,
    front,
    back,
    category,
    topic: options?.topic,
    keyTakeaway: options?.keyTakeaway,
    sourceExam: options?.sourceExam,
    difficulty: 5.0,
    stability: 0.5,
    retrievability: 1.0,
    reps: 0,
    lapses: 0,
    state: 'New',
    nextReviewDate: now.toISOString(),
  };
}

/**
 * Calculates updated card parameters after a student reviews a card with a given rating.
 */
export function reviewFSRSCard(card: FSRSCard, rating: FSRSRating, reviewDate: Date = new Date()): FSRSCard {
  const elapsedDays = card.lastReviewDate
    ? Math.max(0, (reviewDate.getTime() - new Date(card.lastReviewDate).getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  let newDifficulty = card.difficulty;
  let newStability = card.stability;
  let newState: FSRSState = card.state;
  let newLapses = card.lapses;

  if (card.state === 'New' || card.reps === 0) {
    // Initial rating for new cards
    newStability = W_PARAMS[rating - 1] || 1.0;
    newDifficulty = Math.max(1, Math.min(10, 7.0 - (rating - 1) * 1.5));
    newState = rating === 1 ? 'Learning' : 'Review';
    if (rating === 1) newLapses += 1;
  } else {
    // Retrievability at review time: R(t) = (1 + Factor * t / S)^-decay
    const factor = (1 / REQUESTED_RETENTION - 1) / 9;
    const currentRetrievability = Math.pow(1 + factor * (elapsedDays / Math.max(0.1, card.stability)), -0.5);

    if (rating === 1) {
      // Lapse (Again)
      newLapses += 1;
      newState = 'Relearning';
      newDifficulty = Math.min(10, card.difficulty + 1.2);
      newStability = Math.max(0.2, card.stability * 0.25);
    } else {
      // Successful recall
      newState = 'Review';
      const difficultyDelta = (rating === 2 ? 0.8 : rating === 3 ? 0 : -0.8);
      newDifficulty = Math.max(1, Math.min(10, card.difficulty + difficultyDelta));

      // Stability increase multiplier
      const stabilityMultiplier = 1 + (11 - newDifficulty) * Math.pow(card.stability, -0.3) * (Math.exp((1 - currentRetrievability) * 0.8) - 1);
      const ratingBonus = rating === 2 ? 0.85 : rating === 4 ? 1.35 : 1.0;
      newStability = Math.max(1.0, card.stability * stabilityMultiplier * ratingBonus);
    }
  }

  // Calculate next review interval in days
  const intervalDays = Math.max(1, Math.round(newStability * (Math.pow(REQUESTED_RETENTION, -1 / 0.5) - 1) / ((1 / REQUESTED_RETENTION - 1) / 9)));
  const nextDate = new Date(reviewDate.getTime() + intervalDays * 24 * 60 * 60 * 1000);

  return {
    ...card,
    difficulty: Number(newDifficulty.toFixed(2)),
    stability: Number(newStability.toFixed(2)),
    retrievability: Number(REQUESTED_RETENTION.toFixed(2)),
    reps: card.reps + 1,
    lapses: newLapses,
    state: newState,
    lastReviewDate: reviewDate.toISOString(),
    nextReviewDate: nextDate.toISOString(),
  };
}

/**
 * Returns human-readable interval description for each rating option
 */
export function getFSRSIntervalEstimates(card: FSRSCard): Record<FSRSRating, string> {
  const simulated1 = reviewFSRSCard(card, 1);
  const simulated2 = reviewFSRSCard(card, 2);
  const simulated3 = reviewFSRSCard(card, 3);
  const simulated4 = reviewFSRSCard(card, 4);

  const formatDays = (targetDate: string) => {
    const diffHours = (new Date(targetDate).getTime() - Date.now()) / (1000 * 60 * 60);
    if (diffHours < 24) return '10 min';
    const days = Math.round(diffHours / 24);
    if (days === 1) return '1 día';
    if (days < 30) return `${days} días`;
    const months = Math.round(days / 30);
    return `${months} mes${months > 1 ? 'es' : ''}`;
  };

  return {
    1: formatDays(simulated1.nextReviewDate),
    2: formatDays(simulated2.nextReviewDate),
    3: formatDays(simulated3.nextReviewDate),
    4: formatDays(simulated4.nextReviewDate),
  };
}

// Local Storage helpers for Flashcards
const FLASHCARDS_KEY = 'kuskat_fsrs_flashcards_v1';

export function getStoredFlashcards(): FSRSCard[] {
  try {
    const raw = localStorage.getItem(FLASHCARDS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveStoredFlashcards(cards: FSRSCard[]): void {
  try {
    localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(cards));
  } catch (err) {
    console.error('Error saving flashcards to localStorage:', err);
  }
}

export function addOrUpdateFlashcard(newCard: FSRSCard): void {
  const cards = getStoredFlashcards();
  const index = cards.findIndex(c => c.id === newCard.id);
  if (index >= 0) {
    cards[index] = newCard;
  } else {
    cards.push(newCard);
  }
  saveStoredFlashcards(cards);
}
