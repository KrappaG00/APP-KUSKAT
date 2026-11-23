export type MinedTextCoverage = 'full' | 'partial' | 'image' | 'unavailable';

export interface MinedTextSection {
  id: string;
  title: string;
  startPage: number;
  endPage: number;
  level?: number;
}

export interface MinedTextPage {
  pageNumber: number;
  text: string;
  charCount: number;
}

export interface MinedTextIndexEntry {
  id: string;
  title: string;
  filename: string;
  docType: string;
  materiaOriginal: string;
  gradoOriginal: string;
  officialUrl: string;
  status: 'success' | 'error';
  textCoverage: MinedTextCoverage;
  totalPages: number;
  extractedPages: number;
  coverageRatio: number;
  totalChars: number;
  sectionCount: number;
  mediaUrl?: string | null;
}

export interface MinedTextDocument extends MinedTextIndexEntry {
  notice?: string | null;
  sections: MinedTextSection[];
  pages: MinedTextPage[];
}

export interface MinedTextIndex {
  generatedAt: string;
  totalResources: number;
  summary: Record<MinedTextCoverage, number>;
  resources: MinedTextIndexEntry[];
}

export interface MinedTextSearchMatch {
  pageNumber: number;
  matchCount: number;
  snippet: string;
}

const documentCache = new Map<string, MinedTextDocument>();
let indexCache: MinedTextIndex | null = null;

function normalizeForSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function clearMinedTextCache(): void {
  documentCache.clear();
  indexCache = null;
}

export async function getMinedTextIndex(): Promise<MinedTextIndex> {
  if (indexCache) {
    return indexCache;
  }
  const response = await fetch('/mined-texts/index.json');
  if (!response.ok) {
    throw new Error(`No se pudo cargar el índice textual MINED (HTTP ${response.status}).`);
  }
  const data = (await response.json()) as MinedTextIndex;
  indexCache = data;
  return data;
}

export async function loadMinedTextDocument(resourceId: string): Promise<MinedTextDocument> {
  const safeId = resourceId.trim();
  if (!safeId) {
    throw new Error('Identificador de recurso MINED inválido.');
  }

  const cached = documentCache.get(safeId);
  if (cached) {
    return cached;
  }

  const response = await fetch(`/mined-texts/${encodeURIComponent(safeId)}.json`);
  if (!response.ok) {
    throw new Error(`No se pudo cargar el contenido textual de ${safeId} (HTTP ${response.status}).`);
  }

  const doc = (await response.json()) as MinedTextDocument;
  documentCache.set(safeId, doc);
  return doc;
}

export function searchInMinedTextDocument(
  doc: MinedTextDocument,
  query: string
): MinedTextSearchMatch[] {
  const trimmed = query.trim();
  if (trimmed.length < 2 || !doc || !Array.isArray(doc.pages)) {
    return [];
  }

  const normalizedQuery = normalizeForSearch(trimmed);
  if (!normalizedQuery) {
    return [];
  }

  const matches: MinedTextSearchMatch[] = [];

  for (const page of doc.pages) {
    if (!page.text) continue;
    const normalizedText = normalizeForSearch(page.text);
    let idx = normalizedText.indexOf(normalizedQuery);
    if (idx === -1) continue;

    let count = 0;
    const firstIdx = idx;
    while (idx !== -1) {
      count += 1;
      idx = normalizedText.indexOf(normalizedQuery, idx + normalizedQuery.length);
    }

    const start = Math.max(0, firstIdx - 60);
    const end = Math.min(page.text.length, firstIdx + trimmed.length + 90);
    const rawSnippet = page.text.slice(start, end).replace(/\s+/g, ' ').trim();
    const snippet = `${start > 0 ? '…' : ''}${rawSnippet}${end < page.text.length ? '…' : ''}`;

    matches.push({
      pageNumber: page.pageNumber,
      matchCount: count,
      snippet,
    });
  }

  return matches;
}
