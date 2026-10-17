import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  Filter,
  Flame,
  Globe,
  HelpCircle,
  Info,
  Layers,
  Library,
  Lightbulb,
  MessageSquare,
  RotateCcw,
  Search,
  Sparkles,
  SpellCheck,
  Volume2,
  XCircle,
  Zap,
} from 'lucide-react';
import {
  ALL_ENGLISH_VERBS,
  CEFR_CURRICULUM,
  CEFRLevel,
  countLessonWords,
  EdPronunciation,
  ENGLISH_QUESTIONS_BANK,
  EnglishVerbEntry,
  GRAMMAR_DISTINCTIONS,
  GrammarTopicLesson,
  IRREGULAR_VERBS,
  LanguageQuestion,
  PHONETIC_DISTINCTIONS,
  REGULAR_VERB_RULES,
  REGULAR_VERBS,
  SPELLING_RULES,
  VariantType,
  VerbPattern,
  VOCABULARY_PAIRS,
} from '../data/languages/englishData';
import {
  LANGUAGES_CATALOG,
  getLanguageCurriculum,
  getLanguageQuestionsBank,
  getLanguageVerbs,
  getLanguageComparative,
} from '../data/languages/languagesRegistry';
import { AdBanner } from './AdBanner';
import EnglishBasicsView from './EnglishBasicsView';
import EnglishTop10kView from './EnglishTop10kView';
import LanguageBasicsGenericView from './LanguageBasicsGenericView';
import LanguageVocabularyGenericView from './LanguageVocabularyGenericView';

interface LanguageReferenceSource {
  code: string;
  title: string;
  desc: string;
  bullets: string[];
  color: 'blue' | 'amber' | 'emerald';
}

interface LanguageReferencesConfig {
  source1: LanguageReferenceSource;
  source2: LanguageReferenceSource;
  source3: LanguageReferenceSource;
}

const LANGUAGE_REFERENCES: Record<string, LanguageReferencesConfig> = {
  english: {
    source1: {
      code: 'EH',
      title: 'Englisch-hilfen.de',
      desc: 'Referente mundial en explicaciones gramaticales exhaustivas, reglas de ortografía británica vs. estadounidense, tablas morfológicas y ejercicios clasificados.',
      bullets: ['• Gramática completa por niveles A1 a C2', '• Catálogo exhaustivo de verbos regulares e irregulares', '• Diferencias American vs. British English'],
      color: 'blue',
    },
    source2: {
      code: 'ETS',
      title: 'Englishteststore.net',
      desc: 'Banco de reactivos de opción múltiple estructurados para preparación de exámenes de proficiencia internacional (TOEFL, IELTS, Cambridge, SAT y TOEIC).',
      bullets: ['• Tests estandarizados A1-C2 de 4 opciones (A, B, C, D)', '• Análisis de comprensión lectora y sintaxis', '• Métricas de acierto y justificaciones'],
      color: 'amber',
    },
    source3: {
      code: 'AW',
      title: 'Agendaweb.org',
      desc: 'Índice pedagógico con syllabus de lecciones interactivas clasificadas por competencias del MCER, cubriendo desde verbos elementales hasta inversiones avanzadas.',
      bullets: ['• Ejercicios interactivos por tema gramatical', '• Actividades de vocabulario contextualizado', '• Cláusulas de participio y oraciones hendidas'],
      color: 'emerald',
    },
  },
  nahuat: {
    source1: {
      code: 'NP',
      title: 'Cunas Náhuat Pipil de Cuscatlán',
      desc: 'Tradición oral viva y corpus lingüístico de hablantes nativos de Santo Domingo de Guzmán (Witzapan), Cuisnahuat, Izalco y Sonsonate.',
      bullets: ['• Revitalización lingüística comunitaria salvadoreña', '• Fonología pipil y sistema vigesimal tradicional', '• Narraciones ancestrales y memoria histórica cuscatleca'],
      color: 'emerald',
    },
    source2: {
      code: 'LC',
      title: 'Gramáticas Náhuat (Campbell & Lemus)',
      desc: 'Estudios de referencia lingüística de Lyle Campbell (The Pipil Language of El Salvador, 1985) y el Dr. Jorge Lemus (Timumachtikan Nawat).',
      bullets: ['• Morfología aglutinante y prefijos de sujeto/objeto', '• Clasificación de 4 clases de verbos intransitivos y transitivos', '• 120 lecciones estructuradas bajo el marco MCER'],
      color: 'amber',
    },
    source3: {
      code: 'KS',
      title: 'Patrimonio Kuskat Nativo',
      desc: 'Adaptación metodológica y pedagógica nativa para hispanohablantes salvadoreños con advertencias fonéticas y ejercicios prácticos.',
      bullets: ['• 300 preguntas oficiales de opción múltiple (A, B, C, D)', '• Conversor algorítmico de números vigesimales', '• Vocabulario de flora, fauna y cosmovisión pipil'],
      color: 'blue',
    },
  },
  lenca: {
    source1: {
      code: 'LP',
      title: 'Etnolingüística Lenca Potón',
      desc: 'Documentación etnolingüística de comunidades potones de Chilanga, Guatajiagua y Morazán en el oriente salvadoreño.',
      bullets: ['• Rescate del patrimonio lenca salvadoreño', '• Vocabulario de la alfarería negra tradicional de Guatajiagua', '• 120 lecciones pedagógicas adaptadas al estándar MCER'],
      color: 'emerald',
    },
    source2: {
      code: 'CA',
      title: 'Lingüística Histórica (Campbell & Peccorini)',
      desc: 'Investigaciones de Lyle Campbell y Atilio Peccorini sobre la gramática, léxico y testimonios morazánicos del lenca potón.',
      bullets: ['• Orden SOV (Sujeto - Objeto - Verbo) característico', '• Sistema de conteo decimal ancestral', '• Morfología verbal con sufijos de aspecto y negación'],
      color: 'amber',
    },
    source3: {
      code: 'KS',
      title: 'Plataforma Kuskat Autocontenida',
      desc: 'Metodología pedagógica interactiva que permite a hablantes de español salvadoreño aprender la lengua potón sin requerir recursos externos.',
      bullets: ['• 300 preguntas de selección múltiple con justificación', '• Sintetizador fonético adaptado a dialectos salvadoreños', '• Vocabulario clasificado por frecuencias léxicas'],
      color: 'blue',
    },
  },
  kakawira: {
    source1: {
      code: 'KC',
      title: 'Comunidad Indígena de Cacaopera',
      desc: 'Corpus histórico y memoria oral de la comunidad kakawira de Morazán, preservando la identidad de la familia lingüística Misumalpa.',
      bullets: ['• Danza de los Emplumados y Danza del Ayaka', '• Toponimia ancestral de Morazán y del río Torola', '• Vocabulario cotidiano y tradicional de Cacaopera'],
      color: 'emerald',
    },
    source2: {
      code: 'MI',
      title: 'Archivo Misumalpa (Campbell 1975)',
      desc: 'Documentación científica de la familia de lenguas Misumalpa (Cacaopera, Matagalpa, Sumo, Miskitu) en Centroamérica.',
      bullets: ['• Estructura morfosintáctica y posposiciones', '• Marcadores verbales y flexión aspectual', '• 120 lecciones desde nivel inicial hasta maestría C2'],
      color: 'amber',
    },
    source3: {
      code: 'KS',
      title: 'Módulo Nativo Kuskat',
      desc: 'Recurso educativo 100% integrado para salvadoreños con ejercicios de opción múltiple, diccionario de verbos y conversor de números.',
      bullets: ['• 300 reactivos oficiales de evaluación sin audio ni texto libre', '• Diccionario de raíces verbales y formas conjugadas', '• Módulo de objetos clasificados con pronunciación fonética'],
      color: 'blue',
    },
  },
  german: {
    source1: {
      code: 'GI',
      title: 'Goethe-Institut & MCER',
      desc: 'Directrices del Marco Común Europeo de Referencia para las Lenguas (MCER) y el Goethe-Institut para los niveles A1 hasta C2.',
      bullets: ['• Start Deutsch 1 (A1) hasta Großes Deutsches Sprachdiplom (C2)', '• Reglas sintácticas V2 y posiciones en oraciones subordinadas', '• 120 lecciones con más de 1,200 palabras cada una'],
      color: 'blue',
    },
    source2: {
      code: 'DU',
      title: 'Duden & Variantes DACH',
      desc: 'Norma académica de la editorial Duden para ortografía (Rechtschreibung) y contraste de variantes entre Alemania, Austria y Suiza.',
      bullets: ['• Uso de Eszett (ß) frente a doble s (ss) en Suiza', '• Variantes léxicas austríacas (Paradeiser vs. Tomate)', '• Catálogo exhaustivo de verbos regulares e irregulares'],
      color: 'amber',
    },
    source3: {
      code: 'TD',
      title: 'TestDaF & ÖSD Standard',
      desc: 'Estándares internacionales de evaluación universitaria y profesional para Alemania, Austria y Suiza con simulador de reactivos.',
      bullets: ['• 300 preguntas de selección múltiple (50 por nivel)', '• Justificación gramatical con análisis de distractores', '• Vocabulario de alta frecuencia organizado por niveles'],
      color: 'emerald',
    },
  },
  arabic: {
    source1: {
      code: 'AK',
      title: 'Al-Kitaab & Fus\'ha Pedagogy',
      desc: 'Estándar internacional para la enseñanza de Árabe Estándar Moderno (Fus\'ha) reconocido por universidades e instituciones académicas.',
      bullets: ['• Sistema de raíz triconsonántica (Al-Jidhr) y formas derivadas', '• 120 clases desde el abecedario árabe hasta retórica Balāghah C2', '• Declinación de casos I\'rāb y morfología exhaustiva'],
      color: 'blue',
    },
    source2: {
      code: 'SV',
      title: 'Herencia Palestina en El Salvador',
      desc: 'Contraste sociolingüístico con el dialecto levantino-palestino, el cual posee una profunda conexión histórica con la sociedad salvadoreña.',
      bullets: ['• Pares léxicos entre Árabe Estándar y dialecto Levantino', '• Fonología contrastada con el español de El Salvador', '• Advertencias sobre sonidos faríngeos y uvulares (ʻayn, qāf)'],
      color: 'amber',
    },
    source3: {
      code: 'AL',
      title: 'ALECSO & Evaluaciones Kuskat',
      desc: 'Criterios de la Organización de la Liga Árabe para la Educación, Cultura y Ciencia adaptados al simulador de 300 preguntas de Kuskat.',
      bullets: ['• 300 preguntas oficiales de opción múltiple estrictas', '• Catálogo de 200 verbos árabes en pasado, presente y maṣdar', '• Alfabeto con las 4 posiciones caligráficas de cada letra'],
      color: 'emerald',
    },
  },
  mandarin: {
    source1: {
      code: 'HSK',
      title: 'Estándar Oficial HSK 3.0',
      desc: 'Hanyu Shuiping Kaoshi (Examen de Competencia de Chino) del Ministerio de Educación de China y el Center for Language Education.',
      bullets: ['• Cobertura completa de niveles HSK 1 a HSK 6 (A1 a C2)', '• Clasificadores de medida (量词 liàngcí) contextualizados', '• 120 clases con Pinyin, Hanzi y explicaciones pedagógicas'],
      color: 'blue',
    },
    source2: {
      code: 'BL',
      title: 'Beijing Language and Culture Univ.',
      desc: 'Metodología pedagógica de referencia para la enseñanza de Pǔtōnghuà a hispanohablantes.',
      bullets: ['• Sistema de los 4 tonos y tono neutro con alertas para salvadoreños', '• Caracteres simplificados frente a variantes tradicionales', '• Catálogo de 200 verbos chinos con colocaciones habituales'],
      color: 'amber',
    },
    source3: {
      code: 'KS',
      title: 'Simulador Estandarizado Kuskat',
      desc: 'Módulo de evaluación nativo con preguntas de opción múltiple, conversor de números y buscador de vocabulario por categorías.',
      bullets: ['• 300 preguntas de selección múltiple (A, B, C, D) con justificación', '• Conversor numérico a Pinyin y Hanzi en tiempo real', '• Objetos clasificados con pronunciación en mandarín estándar'],
      color: 'emerald',
    },
  },
};

interface LanguagesViewProps {
  onEnterSimulatorWithCategory?: (category: 'INGLES') => void;
}

export default function LanguagesView({ onEnterSimulatorWithCategory }: LanguagesViewProps) {
  // Estado del idioma activo (por defecto 'english')
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('english');

  // Pestaña principal dentro de Idiomas
  const [activeMainTab, setActiveMainTab] = useState<'theory' | 'basics' | 'vocabulary10k' | 'verbs' | 'comparative' | 'exam' | 'references'>('theory');

  // Variante lingüística (US, UK, ALL)
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('ALL');

  // Nivel del MCER / CEFR activo
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');

  // Filtro de búsqueda en vocabulario comparativo
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Búsqueda rápida de lecciones en la pestaña de teoría
  const [lessonSearch, setLessonSearch] = useState<string>('');

  // Lección de gramática expandida en el acordeón
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>('a1_lesson_01');

  // Estados del Diccionario de Verbos
  const [verbSearch, setVerbSearch] = useState<string>('');
  const [verbTypeFilter, setVerbTypeFilter] = useState<'all' | 'irregular' | 'regular'>('all');
  const [verbPatternFilter, setVerbPatternFilter] = useState<string>('all');
  const [verbPronunciationFilter, setVerbPronunciationFilter] = useState<string>('all');
  const [showVerbRules, setShowVerbRules] = useState<boolean>(false);

  // Estados del Modo Examen (Selección Múltiple: 50 preguntas por nivel)
  const [examCurrentIndex, setExamCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, { chosen: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>>({});
  const [examScore, setExamScore] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [isExamCompleted, setIsExamCompleted] = useState<boolean>(false);

  // Manejador para cambiar de idioma activo
  const handleSelectLanguage = (langId: string) => {
    setSelectedLanguageId(langId);
    setExamCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setExamAnswers({});
    setExamScore({ correct: 0, incorrect: 0 });
    setIsExamCompleted(false);
    setExpandedLessonId(null);
    setLessonSearch('');
    setVerbSearch('');
    setSelectedLevel('A1');
  };

  const currentLanguage = useMemo(() => {
    return LANGUAGES_CATALOG.find((l) => l.id === selectedLanguageId) || LANGUAGES_CATALOG[0];
  }, [selectedLanguageId]);

  const currentCurriculum = useMemo(() => {
    return getLanguageCurriculum(selectedLanguageId);
  }, [selectedLanguageId]);

  const currentLevelInfo = useMemo(() => {
    return currentCurriculum[selectedLevel] || currentCurriculum['A1'];
  }, [currentCurriculum, selectedLevel]);

  // Lecciones filtradas por término de búsqueda en Teoría
  const filteredLessons = useMemo(() => {
    if (!currentLevelInfo?.grammarLessons) return [];
    if (!lessonSearch.trim()) return currentLevelInfo.grammarLessons;
    const q = lessonSearch.toLowerCase().trim();
    return currentLevelInfo.grammarLessons.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q)
    );
  }, [currentLevelInfo, lessonSearch]);

  const currentQuestions = useMemo(() => {
    return getLanguageQuestionsBank(selectedLanguageId);
  }, [selectedLanguageId]);

  // Preguntas del examen: EXACTAMENTE las 50 preguntas del nivel seleccionado
  const examQuestions = useMemo(() => {
    return currentQuestions.filter((q) => q.level === selectedLevel);
  }, [currentQuestions, selectedLevel]);

  const currentQuestion: LanguageQuestion | undefined = examQuestions[examCurrentIndex];

  const currentComparative = useMemo(() => {
    return getLanguageComparative(selectedLanguageId);
  }, [selectedLanguageId]);

  const currentVerbs = useMemo(() => {
    return getLanguageVerbs(selectedLanguageId);
  }, [selectedLanguageId]);

  // Vocabulario filtrado por búsqueda
  const filteredVocabulary = useMemo(() => {
    const list = currentComparative.vocabularyPairs || [];
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (v: any) =>
        (v.us && v.us.toLowerCase().includes(q)) ||
        (v.uk && v.uk.toLowerCase().includes(q)) ||
        (v.spanish && v.spanish.toLowerCase().includes(q)) ||
        (v.category && v.category.toLowerCase().includes(q))
    );
  }, [currentComparative, searchQuery]);

  // Verbos filtrados en el catálogo de Verbos
  const filteredVerbs = useMemo(() => {
    return currentVerbs.filter((verb: any) => {
      // Filtro por tipo
      if (verbTypeFilter !== 'all' && verb.type && verb.type !== verbTypeFilter) return false;

      // Filtro por patrón morfológico
      if (verbPatternFilter !== 'all' && verb.pattern && verb.pattern !== verbPatternFilter) return false;

      // Filtro por pronunciación fonética de -ed
      if (verbPronunciationFilter !== 'all' && verb.phoneticEd && verb.phoneticEd !== verbPronunciationFilter) return false;

      // Filtro de búsqueda
      if (verbSearch.trim()) {
        const q = verbSearch.toLowerCase().trim();
        const mInfinitive = verb.infinitive?.toLowerCase().includes(q);
        const mPast = verb.pastSimple?.toLowerCase().includes(q);
        const mPart = verb.pastParticiple?.toLowerCase().includes(q);
        const mThird = verb.thirdPersonSingular?.toLowerCase().includes(q);
        const mGer = verb.gerund?.toLowerCase().includes(q);
        const mSpa = verb.spanish?.toLowerCase().includes(q);
        return mInfinitive || mPast || mPart || mThird || mGer || mSpa;
      }

      return true;
    });
  }, [currentVerbs, verbTypeFilter, verbPatternFilter, verbPronunciationFilter, verbSearch]);

  // Manejador de respuesta en el simulador
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswerSubmitted) return;
    setSelectedOption(key);
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion || !selectedOption || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswerSubmitted(true);

    setExamAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { chosen: selectedOption, isCorrect },
    }));

    setExamScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (!isCorrect ? 1 : 0),
    }));
  };

  const handleNextQuestion = () => {
    if (examCurrentIndex < examQuestions.length - 1) {
      const nextIdx = examCurrentIndex + 1;
      setExamCurrentIndex(nextIdx);
      const nextQ = examQuestions[nextIdx];
      const existingAnswer = examAnswers[nextQ?.id || ''];
      if (existingAnswer) {
        setSelectedOption(existingAnswer.chosen);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    } else {
      setIsExamCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (examCurrentIndex > 0) {
      const prevIdx = examCurrentIndex - 1;
      setExamCurrentIndex(prevIdx);
      const prevQ = examQuestions[prevIdx];
      const existingAnswer = examAnswers[prevQ?.id || ''];
      if (existingAnswer) {
        setSelectedOption(existingAnswer.chosen);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < examQuestions.length) {
      setExamCurrentIndex(index);
      const targetQ = examQuestions[index];
      const existingAnswer = examAnswers[targetQ?.id || ''];
      if (existingAnswer) {
        setSelectedOption(existingAnswer.chosen);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    }
  };

  const handleResetExam = () => {
    setExamCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setExamAnswers({});
    setExamScore({ correct: 0, incorrect: 0 });
    setIsExamCompleted(false);
  };

  // Cálculo de puntaje oficial Kuskat (+1 acierto, -2 error, mínimo 0)
  const kuskatPoints = Math.max(0, examScore.correct * 1 - examScore.incorrect * 2);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* ==================================================================== */}
      {/* ANUNCIO PATROCINADO 1 / 1 (Superior en Idiomas) */}
      {/* ==================================================================== */}
      <AdBanner positionLabel="Idiomas - Superior" />

      {/* ==================================================================== */}
      {/* ENCABEZADO PRINCIPAL DE IDIOMAS */}
      {/* ==================================================================== */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl sm:text-3xl">🌐</span>
              <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight font-caslon">
                Módulo Maestro de Idiomas
              </h1>
              <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200 font-mono">
                MCER • CEFR A1 a C2
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Currículo pedagógico completo de <strong>{currentLanguage.name}</strong> ({currentLanguage.nativeName}):{' '}
              <strong>120 clases nativas</strong> (20 por nivel, mínimo 500 palabras), <strong>300 preguntas de examen</strong> de selección múltiple (50 por nivel), catálogo exhaustivo de verbos, fundamentos lingüísticos y módulo de vocabulario estructurado para hispanohablantes salvadoreños. Todo 100% nativo dentro de Kuskat sin enlaces ni dependencias externas.
            </p>
          </div>

          {/* Selector de Idiomas Extensible */}
          <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 self-start lg:self-auto flex-wrap">
            {LANGUAGES_CATALOG.map((lang) => {
              const isSelected = selectedLanguageId === lang.id;
              const isAvailable = lang.status === 'active';

              return (
                <button
                  key={lang.id}
                  disabled={!isAvailable}
                  onClick={() => handleSelectLanguage(lang.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : isAvailable
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      : 'text-slate-400 opacity-50 cursor-not-allowed'
                  }`}
                  title={isAvailable ? `Aprender ${lang.name}` : `${lang.name} (Próximamente)`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {!isAvailable && (
                    <span className="text-[9px] font-semibold bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded-md">
                      Pronto
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* BARRA DE NAVEGACIÓN SECUNDARIA DENTRO DE IDIOMAS */}
        {/* ==================================================================== */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl text-xs font-bold text-slate-600 flex-wrap gap-1">
            <button
              onClick={() => setActiveMainTab('theory')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'theory'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Teoría y 20 Clases</span>
              <span className="text-[9px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-md font-mono">
                120 Clases
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('basics')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'basics'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Fundamentos</span>
              <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md font-mono hidden sm:inline">
                {selectedLanguageId === 'mandarin' ? 'Tonos, Números, Colores' : 'Abecedario, Números, Colores, Objetos'}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('vocabulary10k')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'vocabulary10k'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <BookMarked className="w-4 h-4 text-indigo-600" />
              <span>{selectedLanguageId === 'english' ? 'Top 10,000 Palabras' : 'Vocabulario y Corpus'}</span>
              <span className="text-[9px] bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded-md font-mono">
                {selectedLanguageId === 'english' ? 'Corpus 10K' : 'Léxico'}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('verbs')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'verbs'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <SpellCheck className="w-4 h-4 text-emerald-600" />
              <span>Diccionario de Verbos</span>
              <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-md font-mono">
                {currentVerbs.length}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('comparative')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'comparative'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-600" />
              <span>
                {selectedLanguageId === 'english'
                  ? 'Guía US vs. UK'
                  : selectedLanguageId === 'nahuat'
                  ? 'Guía Pipil'
                  : selectedLanguageId === 'lenca'
                  ? 'Guía Potón'
                  : selectedLanguageId === 'kakawira'
                  ? 'Guía Misumalpa'
                  : selectedLanguageId === 'german'
                  ? 'Guía DACH'
                  : selectedLanguageId === 'arabic'
                  ? 'Guía Fus\'ha vs. Levantino'
                  : 'Guía Pǔtōnghuà'}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('exam')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'exam'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Simulador de Examen</span>
              <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md font-mono">
                50 Preguntas
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('references')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'references'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Library className="w-4 h-4 text-slate-600" />
              <span>Fuentes Metodológicas</span>
            </button>
          </div>

          {/* Selector de Variante: US vs UK */}
          <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-2xl border border-slate-200 text-xs font-bold self-start md:self-auto">
            <span className="text-[11px] text-slate-400 px-2 font-mono">Variante:</span>
            <button
              onClick={() => setSelectedVariant('ALL')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'ALL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌐 Ambas
            </button>
            <button
              onClick={() => setSelectedVariant('US')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'US'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇺🇸 American (US)
            </button>
            <button
              onClick={() => setSelectedVariant('UK')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'UK'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇬🇧 British (UK)
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SELECTOR DE NIVELES MCER / CEFR (A1 A C2) */}
        {/* ==================================================================== */}
        <div className="pt-4 border-t border-slate-100 mt-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Marco Común Europeo de Referencia (MCER / CEFR):
            </span>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              Nivel activo: <strong className="text-slate-900">{selectedLevel} • {currentLevelInfo.nameSpanish}</strong> (20 Clases & 50 Reactivos)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map((lvl) => {
              const info = currentCurriculum[lvl] || CEFR_CURRICULUM[lvl];
              const isSelected = selectedLevel === lvl;

              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setExamCurrentIndex(0);
                    setSelectedOption(null);
                    setIsAnswerSubmitted(false);
                    setExpandedLessonId(`${lvl.toLowerCase()}_lesson_01`);
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-blue-500/30'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm">{lvl}</span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md ${
                        isSelected ? 'bg-white/20 text-white' : `${info.badgeBg} ${info.badgeText}`
                      }`}
                    >
                      {lvl === 'A1' || lvl === 'A2' ? 'Básico' : lvl === 'B1' || lvl === 'B2' ? 'Medio' : 'Experto'}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <span className="font-bold text-[11px] block truncate">{info.nameSpanish}</span>
                    <span className="text-[9.5px] opacity-70 block truncate">20 Clases • 50 Q</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: TEORÍA COMPLETA (20 CLASES POR NIVEL) */}
      {/* ==================================================================== */}
      {activeMainTab === 'theory' && (
        <div className="space-y-6">
          {/* Banner descriptivo del nivel actual */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentLevelInfo.color} text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0`}>
                  {currentLevelInfo.level}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Nivel {currentLevelInfo.level}: {currentLevelInfo.nameSpanish}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 font-medium">({currentLevelInfo.name})</span>
                    <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-mono">
                      20 Clases Oficiales
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                    {currentLevelInfo.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
                <button
                  onClick={() => setActiveMainTab('verbs')}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <SpellCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verbos</span>
                </button>

                <button
                  onClick={() => setActiveMainTab('exam')}
                  className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Simulador (50 Preguntas {currentLevelInfo.level})</span>
                </button>
              </div>
            </div>

            {/* Competencias Can-Do del MCER */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Objetivos y Competencias Can-Do (CEFR):</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {currentLevelInfo.canDoStatements.map((statement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{statement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Ejes Temáticos Clave de {currentLevelInfo.level}:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {currentLevelInfo.coreTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selector de Clases (1 a 20) y Barra de Búsqueda de Clases */}
          <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-blue-600" />
                  <span>Índice Rápido de las 20 Clases Oficiales de {selectedLevel}:</span>
                </h4>
                <span className="text-xs text-slate-500">
                  Selecciona cualquier clase para expandir instantáneamente su desarrollo teórico:
                </span>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={lessonSearch}
                  onChange={(e) => setLessonSearch(e.target.value)}
                  placeholder="Buscar en las 20 clases..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Píldoras numeradas de las 20 clases */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              {currentLevelInfo.grammarLessons.map((lesson, idx) => {
                const classNum = idx + 1;
                const isSelected = expandedLessonId === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setExpandedLessonId(lesson.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    title={lesson.title}
                  >
                    C{classNum < 10 ? `0${classNum}` : classNum}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Acordeón de las 20 Lecciones Teóricas Detalladas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Lecciones Desarrolladas ({filteredLessons.length} disponibles):</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {currentLevelInfo.grammarLessons.length} clases totales en {currentLevelInfo.level}
              </span>
            </div>

            {filteredLessons.map((lesson, idx) => {
              const isExpanded = expandedLessonId === lesson.id;
              const words = countLessonWords(lesson);

              return (
                <div
                  key={lesson.id}
                  className={`bg-white rounded-3xl border transition-all overflow-hidden shadow-xs ${
                    isExpanded ? 'border-blue-300 ring-2 ring-blue-500/10' : 'border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0 font-mono">
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-sm sm:text-base text-slate-900">{lesson.title}</h4>
                          <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                            {lesson.category}
                          </span>
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200 font-mono flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            {words.toLocaleString()} palabras (≥500 ✓)
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{lesson.summary}</p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                      {/* Teoría Lingüística Detallada */}
                      {lesson.detailedExplanation && (
                        <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2">
                          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span>Teoría Gramatical Profunda y Análisis Lingüístico:</span>
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5 text-justify">
                            {lesson.detailedExplanation.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Fórmula Sintáctica */}
                      {lesson.formula && (
                        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-3 sm:p-4 text-blue-950 font-mono">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-700 mb-1 font-sans">
                            Estructura Sintáctica / Fórmula:
                          </span>
                          <strong>{lesson.formula}</strong>
                        </div>
                      )}

                      {/* Reglas Gramaticales */}
                      <div className="space-y-2">
                        <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                          Reglas Gramaticales Oficiales:
                        </h5>
                        <ul className="space-y-1.5 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                          {lesson.rules.map((rule, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-blue-600 font-black">•</span>
                              <span className="leading-relaxed">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ejemplos Contrastados US vs. UK */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-emerald-900 flex items-center gap-1.5 mb-2">
                            <span>
                              {selectedLanguageId === 'english'
                                ? '🇺🇸 Ejemplos en American English:'
                                : `📖 Ejemplos Clave en ${currentLanguage.name}:`}
                            </span>
                          </h6>
                          <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                            {lesson.examplesUS.map((ex, exIdx) => (
                              <li key={exIdx} className="leading-snug">“{ex}”</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-rose-900 flex items-center gap-1.5 mb-2">
                            <span>
                              {selectedLanguageId === 'english'
                                ? '🇬🇧 Ejemplos en British English:'
                                : '🇸🇻 Traducción y Explicación en Español Salvadoreño:'}
                            </span>
                          </h6>
                          <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                            {lesson.examplesUK.map((ex, exIdx) => (
                              <li key={exIdx} className="leading-snug">“{ex}”</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Diálogo Práctico Contextualizado */}
                      {lesson.practicalDialogue && lesson.practicalDialogue.length > 0 && (
                        <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-2xl p-4 space-y-3">
                          <h6 className="font-bold text-xs text-indigo-950 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-indigo-600" />
                            <span>Diálogo Práctico Contextualizado:</span>
                          </h6>
                          <div className="space-y-2">
                            {lesson.practicalDialogue.map((turn, dIdx) => (
                              <div key={dIdx} className="bg-white/80 border border-indigo-100 rounded-xl p-2.5 sm:p-3 text-xs">
                                <div className="flex items-center gap-1.5 font-bold text-indigo-900 mb-1">
                                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                  <span>{turn.speaker}:</span>
                                </div>
                                <p className="text-slate-900 font-medium italic pl-3.5">“{turn.text}”</p>
                                <p className="text-slate-500 text-[11px] mt-0.5 pl-3.5">({turn.translation})</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Errores Frecuentes y Cómo Evitarlos */}
                      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                        <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-amber-900 flex items-center gap-1.5 mb-2">
                            <XCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Errores Frecuentes y Cómo Evitarlos:</span>
                          </h6>
                          <ul className="space-y-1.5 text-xs text-amber-950">
                            {lesson.commonMistakes.map((mistake, mIdx) => (
                              <li key={mIdx} className="flex items-start gap-1.5">
                                <span className="text-amber-600 font-bold">⚠</span>
                                <span>{mistake}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Consejos de Estudio y Mnemotecnias */}
                      {lesson.studyTips && lesson.studyTips.length > 0 && (
                        <div className="bg-purple-50/60 border border-purple-200/80 rounded-2xl p-3.5 space-y-2">
                          <h6 className="font-bold text-xs text-purple-950 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-purple-600" />
                            <span>Estrategias de Aprendizaje y Mnemotecnias:</span>
                          </h6>
                          <ul className="space-y-1.5 text-xs text-purple-950">
                            {lesson.studyTips.map((tip, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold shrink-0">✦</span>
                                <span className="leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Botón de acción interna (Sin enlaces externos hacia afuera) */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
                        <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Contenido completo ({words.toLocaleString()} palabras) • 100% nativo integrado en Kuskat</span>
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLevel(currentLevelInfo.level);
                            setActiveMainTab('exam');
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Zap className="w-3 h-3" />
                          <span>Practicar en Simulador Nivel {currentLevelInfo.level}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: DICCIONARIO MAESTRO DE VERBOS (REGULARES E IRREGULARES) */}
      {/* ==================================================================== */}
      {activeMainTab === 'verbs' && (
        <div className="space-y-6">
          {/* Header de Verbos */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <SpellCheck className="w-5 h-5 text-emerald-600" />
                    <span>Diccionario de Verbos ({currentLanguage.name})</span>
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  Catálogo exhaustivo de <strong>{currentVerbs.length} verbos</strong> con sus formas gramaticales, tiempos/aspectos y traducción fiel al español orientada a hispanohablantes salvadoreños.
                </p>
              </div>

              {selectedLanguageId === 'english' && (
                <button
                  type="button"
                  onClick={() => setShowVerbRules(!showVerbRules)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  <span>{showVerbRules ? 'Ocultar Reglas Oficiales' : 'Ver Reglas Ortográficas y Fonéticas'}</span>
                </button>
              )}
            </div>

            {/* Reglas de Verbos (Acordeón desplegable) */}
            {showVerbRules && (
              <div className="pt-4 space-y-4 border-b border-slate-100 pb-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">
                    Reglas Morfológicas y Fonéticas de los Verbos Regulares:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {REGULAR_VERB_RULES.map((rule, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">{rule.title}</span>
                          <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {rule.category}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px]">{rule.explanation}</p>
                        <div className="bg-slate-50 p-2 rounded-lg font-mono text-[10px] space-y-0.5 text-slate-700">
                          {rule.examples.map((ex, eIdx) => (
                            <div key={eIdx} className="flex items-center justify-between">
                              <span><strong>{ex.base}</strong> → {ex.past} {ex.phonetic && <span className="text-emerald-700">[{ex.phonetic}]</span>}</span>
                              <span className="text-slate-400 font-sans">({ex.translation})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Barra de Búsqueda y Filtros de Verbos */}
            <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 flex-wrap">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={verbSearch}
                  onChange={(e) => setVerbSearch(e.target.value)}
                  placeholder="Buscar por verbo (inglés o español)..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Filtro por Tipo */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl text-xs font-bold text-slate-600 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setVerbTypeFilter('all');
                    setVerbPatternFilter('all');
                    setVerbPronunciationFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    verbTypeFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs font-black'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Todos ({currentVerbs.length})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setVerbTypeFilter('irregular');
                    setVerbPronunciationFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    verbTypeFilter === 'irregular'
                      ? 'bg-purple-600 text-white shadow-xs font-black'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Irregulares ({currentVerbs.filter((v: any) => v.type === 'irregular').length})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setVerbTypeFilter('regular');
                    setVerbPatternFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    verbTypeFilter === 'regular'
                      ? 'bg-emerald-600 text-white shadow-xs font-black'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Regulares ({currentVerbs.filter((v: any) => v.type === 'regular').length})
                </button>
              </div>
            </div>

            {/* Sub-filtros dinámicos según tipo (solo para inglés) */}
            {selectedLanguageId === 'english' && verbTypeFilter === 'irregular' && (
              <div className="pt-3 flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
                <span className="font-mono text-[11px] text-slate-400">Patrón:</span>
                {['all', 'A-A-A', 'A-B-B', 'A-B-C', 'A-B-A'].map((pat) => (
                  <button
                    key={pat}
                    type="button"
                    onClick={() => setVerbPatternFilter(pat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      verbPatternFilter === pat
                        ? 'bg-purple-100 text-purple-900 font-bold border border-purple-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {pat === 'all' ? 'Todos' : pat}
                  </button>
                ))}
              </div>
            )}

            {selectedLanguageId === 'english' && verbTypeFilter === 'regular' && (
              <div className="pt-3 flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
                <span className="font-mono text-[11px] text-slate-400">Pronunciación -ed:</span>
                {['all', '/t/', '/d/', '/ɪd/'].map((pron) => (
                  <button
                    key={pron}
                    type="button"
                    onClick={() => setVerbPronunciationFilter(pron)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      verbPronunciationFilter === pron
                        ? 'bg-emerald-100 text-emerald-900 font-bold border border-emerald-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {pron === 'all' ? 'Todas' : `${pron} ${pron === '/t/' ? '(sordo)' : pron === '/d/' ? '(sonoro)' : '(sílaba extra)'}`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tabla de Verbos */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Mostrando <strong>{filteredVerbs.length}</strong> verbos encontrados</span>
              <span>100% de tiempos y formas integrados en Kuskat</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <th className="py-3 px-3.5 sm:px-4">Forma Base (Infinitive)</th>
                    <th className="py-3 px-3.5 sm:px-4">Pasado / Aspecto</th>
                    <th className="py-3 px-3.5 sm:px-4">Participio / Masdar</th>
                    {selectedLanguageId === 'english' && (
                      <>
                        <th className="py-3 px-3.5 sm:px-4">3rd Person (-s/-es)</th>
                        <th className="py-3 px-3.5 sm:px-4">Gerund (-ing)</th>
                      </>
                    )}
                    <th className="py-3 px-3.5 sm:px-4">Español</th>
                    <th className="py-3 px-3.5 sm:px-4">Clasificación / Nivel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredVerbs.map((v: any, vIdx: number) => (
                    <tr key={v.id || v.infinitive || vIdx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3.5 sm:px-4 font-bold text-slate-900 font-mono">
                        {v.infinitive}
                      </td>
                      <td className="py-2.5 px-3.5 sm:px-4 font-mono text-blue-900 font-semibold">
                        {v.pastSimple}
                      </td>
                      <td className="py-2.5 px-3.5 sm:px-4 font-mono text-purple-900 font-semibold">
                        {v.pastParticiple}
                      </td>
                      {selectedLanguageId === 'english' && (
                        <>
                          <td className="py-2.5 px-3.5 sm:px-4 font-mono text-slate-600">
                            {v.thirdPersonSingular || '-'}
                          </td>
                          <td className="py-2.5 px-3.5 sm:px-4 font-mono text-slate-600">
                            {v.gerund || '-'}
                          </td>
                        </>
                      )}
                      <td className="py-2.5 px-3.5 sm:px-4 font-medium text-slate-800">
                        {v.spanish}
                      </td>
                      <td className="py-2.5 px-3.5 sm:px-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {v.level && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono">
                              {v.level}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              v.type === 'irregular'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {v.type === 'irregular' ? (v.pattern ? `Irreg (${v.pattern})` : 'Irregular') : 'Regular'}
                          </span>
                          {v.phoneticEd && v.phoneticEd !== 'irregular' && (
                            <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                              {v.phoneticEd}
                            </span>
                          )}
                          {v.notes && (
                            <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {v.notes}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: GUÍA COMPARATIVA ENTRE AMERICAN Y BRITISH ENGLISH */}
      {/* ==================================================================== */}
      {activeMainTab === 'comparative' && (
        <div className="space-y-6">
          {/* Header Comparativo */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600" />
              <span>{currentComparative.title || `Diferencias Estructurales: ${currentLanguage.name}`}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl leading-relaxed">
              {selectedLanguageId === 'english'
                ? 'El inglés presenta dos estándares de prestigio internacional. A continuación se contrastan sus reglas ortográficas sistemáticas, pares de vocabulario cotidiano, distinciones sintácticas y patrones fonéticos fundamentales.'
                : `Guía contrastiva de ${currentLanguage.name} (${currentLanguage.nativeName}) orientada a hispanohablantes salvadoreños: reglas de ortografía/escritura, vocabulario clave, estructuras sintácticas y fonética con advertencias preventivas.`}
            </p>
          </div>

          {/* Sección 1: Reglas Ortográficas (Spelling) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>1. Reglas Ortográficas y Normas Sistemáticas de Escritura</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">
                {(currentComparative.spellingRules || []).length} Patrones Clave
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentComparative.spellingRules || []).map((rule: any, idx: number) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-bold text-sm text-slate-900">{rule.pattern}</span>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold flex-wrap">
                      <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                        {selectedLanguageId === 'english' ? `US: ${rule.us}` : rule.us}
                      </span>
                      <span className="bg-rose-100 text-rose-900 px-2 py-0.5 rounded">
                        {selectedLanguageId === 'english' ? `UK: ${rule.uk}` : rule.uk}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{rule.explanation}</p>
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Ejemplos:</span>
                    <div className="space-y-1 font-mono text-xs">
                      {rule.examples.map((ex: any, exIdx: number) => (
                        <div key={exIdx} className="flex items-center justify-between bg-white px-2.5 py-1 rounded-lg border border-slate-200/50">
                          <span className="text-blue-700 font-bold">{ex.us}</span>
                          <span className="text-slate-400">vs</span>
                          <span className="text-rose-700 font-bold">{ex.uk}</span>
                          <span className="text-slate-500 text-[11px] font-sans">({ex.translation})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección 2: Vocabulario Cotidiano */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>2. Vocabulario Cotidiano Contrastado</span>
                </h4>
                <p className="text-xs text-slate-500">
                  {selectedLanguageId === 'english'
                    ? 'Mismo significado, términos completamente diferentes en US y UK:'
                    : `Términos contrastados, variantes léxicas y equivalencias para ${currentLanguage.name}:`}
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtrar vocabulario..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredVocabulary.map((pair: any, idx: number) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      {pair.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                      {pair.spanish}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-blue-50/70 p-2 rounded-xl border border-blue-200/70">
                      <span className="text-[9.5px] font-bold text-blue-800 block">
                        {selectedLanguageId === 'english' ? '🇺🇸 US:' : 'Variante A:'}
                      </span>
                      <strong className="text-sm text-blue-950 font-bold block">{pair.us}</strong>
                      <p className="text-[10px] text-slate-600 mt-1 italic leading-tight line-clamp-2">“{pair.sampleSentenceUS}”</p>
                    </div>

                    <div className="bg-rose-50/70 p-2 rounded-xl border border-rose-200/70">
                      <span className="text-[9.5px] font-bold text-rose-800 block">
                        {selectedLanguageId === 'english' ? '🇬🇧 UK:' : 'Variante B:'}
                      </span>
                      <strong className="text-sm text-rose-950 font-bold block">{pair.uk}</strong>
                      <p className="text-[10px] text-slate-600 mt-1 italic leading-tight line-clamp-2">“{pair.sampleSentenceUK}”</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección 3: Distinciones Gramaticales */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>3. Distinciones Gramaticales y Sintácticas Cruciales</span>
              </h4>
            </div>

            <div className="space-y-3">
              {(currentComparative.grammarDistinctions || []).map((gd: any, idx: number) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h5 className="font-bold text-sm text-slate-900">{gd.title}</h5>
                    <span className="text-xs text-slate-500 font-medium">{gd.concept}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">
                        {selectedLanguageId === 'english' ? '🇺🇸 Norma Estadounidense (US):' : 'Estructura Lingüística:'}
                      </span>
                      <p className="text-slate-700 leading-relaxed">{gd.ruleUS}</p>
                      <div className="mt-2 bg-blue-50/60 p-2 rounded-lg font-mono text-[11px] text-blue-900">
                        {gd.exampleUS}
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-rose-700 block mb-1">
                        {selectedLanguageId === 'english' ? '🇬🇧 Norma Británica (UK):' : 'Contraste con Español Salvadoreño:'}
                      </span>
                      <p className="text-slate-700 leading-relaxed">{gd.ruleUK}</p>
                      <div className="mt-2 bg-rose-50/60 p-2 rounded-lg font-mono text-[11px] text-rose-900">
                        {gd.exampleUK}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 text-xs text-amber-900 font-medium">
                    💡 <strong>Nota Pedagógica:</strong> {gd.pedagogicalNote}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección 4: Fonética y Pronunciación */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-600" />
                <span>4. Fonética, Fonología y Patrones de Pronunciación</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentComparative.phoneticDistinctions || []).map((pd: any, idx: number) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                  <div>
                    <span className="font-bold text-sm text-slate-900 block">{pd.topic}</span>
                    <span className="text-xs text-slate-500 font-medium">{pd.feature}</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <strong className="text-blue-700">
                        {selectedLanguageId === 'english' ? '🇺🇸 US: ' : 'Variante / Patrón A: '}
                      </strong>
                      <span className="text-slate-700">{pd.usBehavior}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <strong className="text-rose-700">
                        {selectedLanguageId === 'english' ? '🇬🇧 UK: ' : 'Variante / Patrón B: '}
                      </strong>
                      <span className="text-slate-700">{pd.ukBehavior}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 font-mono text-xs space-y-1">
                    {pd.examples.map((ex: any, eIdx: number) => (
                      <div key={eIdx} className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 flex items-center justify-between flex-wrap gap-1">
                        <span className="font-bold text-slate-900">{ex.word}:</span>
                        <span className="text-blue-700">{selectedLanguageId === 'english' ? 'US ' : ''}{ex.usIpa}</span>
                        <span className="text-rose-700">{selectedLanguageId === 'english' ? 'UK ' : ''}{ex.ukIpa}</span>
                        {ex.audioNote && (
                          <span className="text-[10px] text-slate-500 font-sans italic w-full block">
                            {ex.audioNote}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 4: SIMULADOR DE EXAMEN (50 PREGUNTAS POR NIVEL) */}
      {/* ==================================================================== */}
      {activeMainTab === 'exam' && (
        <div className="space-y-6">
          {/* Tarjeta de Control del Examen */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Simulador Oficial de Selección Múltiple: Nivel {selectedLevel}
                  </h3>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-200 font-mono">
                    50 Preguntas Oficiales (A, B, C, D)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Examen estandarizado sin pruebas de audio ni escritura libre.
                  Regla de puntaje Kuskat: <strong>+1 punto por acierto</strong>, <strong>-2 puntos por error</strong>, tope mínimo en <strong>0</strong>.
                </p>
              </div>

              {/* Marcador de Puntaje en Vivo */}
              <div className="flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-2xl self-start sm:self-auto shadow-xs">
                <div className="text-center px-2 border-r border-slate-700">
                  <span className="block text-[9px] font-mono uppercase text-slate-400">Puntaje</span>
                  <span className="text-base font-black text-amber-400 font-mono">{kuskatPoints} pts</span>
                </div>
                <div className="text-center px-2 border-r border-slate-700">
                  <span className="block text-[9px] font-mono uppercase text-emerald-400">Aciertos</span>
                  <span className="text-base font-bold text-emerald-400 font-mono">+{examScore.correct}</span>
                </div>
                <div className="text-center px-2">
                  <span className="block text-[9px] font-mono uppercase text-rose-400">Errores</span>
                  <span className="text-base font-bold text-rose-400 font-mono">-{examScore.incorrect}</span>
                </div>
              </div>
            </div>

            {/* Barra de progreso de preguntas */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>
                Pregunta <strong>{examCurrentIndex + 1}</strong> de <strong>{examQuestions.length}</strong> (Progreso: {Math.round(((Object.keys(examAnswers).length) / (examQuestions.length || 1)) * 100)}%)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetExam}
                  className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar Test</span>
                </button>
              </div>
            </div>

            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((examCurrentIndex + 1) / (examQuestions.length || 1)) * 100}%` }}
              />
            </div>

            {/* Selector interactivo de las 50 preguntas */}
            <div className="pt-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                Mapa de Reactivos (50 Preguntas):
              </span>
              <div className="grid grid-cols-10 sm:grid-cols-25 gap-1 max-h-24 overflow-y-auto p-1 bg-slate-50 rounded-xl border border-slate-200">
                {examQuestions.map((q, idx) => {
                  const ans = examAnswers[q.id];
                  const isCurrent = idx === examCurrentIndex;
                  let bg = 'bg-white text-slate-600 border-slate-200';
                  if (ans) {
                    bg = ans.isCorrect
                      ? 'bg-emerald-500 text-white border-emerald-600 font-bold'
                      : 'bg-rose-500 text-white border-rose-600 font-bold';
                  } else if (isCurrent) {
                    bg = 'bg-blue-600 text-white border-blue-700 font-bold ring-2 ring-blue-300';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`h-6 rounded text-[10px] font-mono border transition-all flex items-center justify-center cursor-pointer ${bg}`}
                      title={`Pregunta ${idx + 1}: ${q.topic}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tarjeta de la Pregunta Activa */}
          {currentQuestion ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
              {/* Encabezado del Reactivo */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
                    Pregunta #{examCurrentIndex + 1} de {examQuestions.length}
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-xl border border-blue-200">
                    Nivel {currentQuestion.level}
                  </span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-200">
                    Variante: {currentQuestion.variant === 'ALL' ? 'Internacional (US/UK)' : currentQuestion.variant === 'US' ? 'American (US)' : 'British (UK)'}
                  </span>
                </div>

                <span className="text-xs text-slate-500 font-mono">
                  Tema: <strong>{currentQuestion.topic}</strong>
                </span>
              </div>

              {/* Enunciado */}
              <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-caslon bg-slate-50/60 p-4 sm:p-5 rounded-2xl border border-slate-200/70 whitespace-pre-line">
                {currentQuestion.statement}
              </div>

              {/* Opciones de Respuesta A, B, C, D */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOption === opt.key;
                  const isCorrectKey = opt.key === currentQuestion.correctAnswer;

                  let optionStyle = 'bg-white border-slate-200 hover:border-blue-400 text-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrectKey) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                    } else if (isSelected && !isCorrectKey) {
                      optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                    } else {
                      optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-2 ring-blue-500/20';
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="text-sm sm:text-base">{opt.text}</span>
                      </div>

                      {isAnswerSubmitted && isCorrectKey && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrectKey && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Justificación y Retroalimentación Pedagógica al Enviar */}
              {isAnswerSubmitted && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <span className="text-emerald-700 font-bold text-sm flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ¡Respuesta Correcta! (+1 punto oficial Kuskat)
                      </span>
                    ) : (
                      <span className="text-rose-700 font-bold text-sm flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        Respuesta Incorrecta (-2 puntos Kuskat)
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Justificación Gramatical Oficial:</strong>
                    {currentQuestion.explanation}
                  </div>

                  {currentQuestion.distractorAnalysis && currentQuestion.distractorAnalysis.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                        Análisis de Distractores:
                      </span>
                      {currentQuestion.distractorAnalysis.map((dist, dIdx) => (
                        <div key={dIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="font-mono font-bold text-slate-500">[{dist.option}]:</span>
                          <span>{dist.reason}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span>Fuente pedagógica: {currentQuestion.referenceSite}</span>
                    <span className="text-emerald-600 font-bold">100% Nativo en APP-KUSKAT</span>
                  </div>
                </div>
              )}

              {/* Barra de Acciones: Anterior / Enviar / Siguiente */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-2">
                <button
                  type="button"
                  disabled={examCurrentIndex === 0}
                  onClick={handlePrevQuestion}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {!isAnswerSubmitted ? (
                  <button
                    type="button"
                    disabled={!selectedOption}
                    onClick={handleSubmitAnswer}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <span>Confirmar Respuesta</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>{examCurrentIndex < examQuestions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados del Examen'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-4">
              <Award className="w-12 h-12 text-amber-500 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">¡Examen de 50 Preguntas Completado!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Has completado la evaluación del Nivel {selectedLevel}. Obtuviste {examScore.correct} aciertos y {examScore.incorrect} errores para un puntaje final de <strong>{kuskatPoints} puntos Kuskat</strong>.
              </p>
              <button
                type="button"
                onClick={handleResetExam}
                className="px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-xs hover:bg-blue-700 cursor-pointer"
              >
                Volver a Rendir el Simulador
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA: FUNDAMENTOS BÁSICOS (ABECEDARIO, NÚMEROS, COLORES, OBJETOS) */}
      {/* ==================================================================== */}
      {activeMainTab === 'basics' && (
        selectedLanguageId === 'english' ? (
          <EnglishBasicsView variant={selectedVariant} />
        ) : (
          <LanguageBasicsGenericView languageId={selectedLanguageId} />
        )
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA: TOP 10,000 PALABRAS MÁS USADAS */}
      {/* ==================================================================== */}
      {activeMainTab === 'vocabulary10k' && (
        selectedLanguageId === 'english' ? (
          <EnglishTop10kView variant={selectedVariant} />
        ) : (
          <LanguageVocabularyGenericView languageId={selectedLanguageId} />
        )
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 5: FUENTES Y REFERENCIAS METODOLÓGICAS (100% NATIVO EN KUSKAT) */}
      {/* ==================================================================== */}
      {activeMainTab === 'references' && (() => {
        const refs = LANGUAGE_REFERENCES[selectedLanguageId] || LANGUAGE_REFERENCES['english'];
        const sources = [refs.source1, refs.source2, refs.source3];

        return (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                <span>Fuentes Bibliográficas y Metodología Pedagógica: {currentLanguage.name}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl leading-relaxed">
                El contenido teórico y las 300 preguntas oficiales de evaluación de la sección de <strong>IDIOMAS ({currentLanguage.name})</strong> de KUSKAT han sido adaptados de manera <strong>100% nativa y autosuficiente dentro del proyecto</strong> a partir de autoridades lingüísticas y portales pedagógicos de referencia internacional:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sources.map((src, idx) => {
                const badgeColor =
                  src.color === 'emerald'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    : src.color === 'amber'
                    ? 'bg-amber-50 border-amber-200 text-amber-700'
                    : 'bg-blue-50 border-blue-200 text-blue-700';

                return (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                    <div>
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-bold mb-3 ${badgeColor}`}>
                        {src.code}
                      </div>
                      <h4 className="font-bold text-base text-slate-900">{src.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {src.desc}
                      </p>
                      <div className="mt-3 space-y-1 text-xs text-slate-500 font-medium">
                        {src.bullets.map((bullet, bIdx) => (
                          <p key={bIdx}>{bullet}</p>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      {idx === 0 && (
                        <button
                          type="button"
                          onClick={() => setActiveMainTab('theory')}
                          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Explorar las 120 Clases del MCER</span>
                        </button>
                      )}
                      {idx === 1 && (
                        <button
                          type="button"
                          onClick={() => setActiveMainTab('exam')}
                          className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Tomar Simulador (50 Preguntas por Nivel)</span>
                        </button>
                      )}
                      {idx === 2 && (
                        <button
                          type="button"
                          onClick={() => setActiveMainTab('verbs')}
                          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Abrir Catálogo de Verbos</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* ==================================================================== */}
      {/* 5 ANUNCIOS PATROCINADOS INFERIORES GLOBALES EN IDIOMAS */}
      {/* ==================================================================== */}
      <div className="pt-4 space-y-4">
        <AdBanner positionLabel="Idiomas - Inferior 1" />
        <AdBanner positionLabel="Idiomas - Inferior 2" />
        <AdBanner positionLabel="Idiomas - Inferior 3" />
        <AdBanner positionLabel="Idiomas - Inferior 4" />
        <AdBanner positionLabel="Idiomas - Inferior 5" />
      </div>
    </div>
  );
}
