import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Brain,
  RotateCw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  Calendar,
  Layers,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Award,
  Stethoscope,
  Scale,
  Car,
  Atom,
} from 'lucide-react';
import {
  FSRSCard,
  FSRSRating,
  createNewFSRSCard,
  reviewFSRSCard,
  getFSRSIntervalEstimates,
  getStoredFlashcards,
  saveStoredFlashcards,
} from '../utils/fsrsScheduler';

interface FlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

// Pre-seeded high-yield flashcards
const DEFAULT_PRESEEDED_CARDS: FSRSCard[] = [
  // Medicina / Residentado ENAR
  createNewFSRSCard(
    'enar-card-01',
    '¿Cuál es el tratamiento de primera línea para el choque anafiláctico según la Guía Clínica de Emergencias del MINSAL?',
    'Adrenalina (Epinefrina) intramuscular (IM) en la cara anterolateral del tercio medio del muslo, dosis 0.01 mg/kg (máximo 0.5 mg en adultos, dilución 1:1,000).',
    'Medicina',
    {
      topic: 'Urgencias Médicas / Choque Anafiláctico',
      keyTakeaway: 'La adrenalina IM temprana es el único fármaco que reduce la mortalidad; los corticoides y antihistamínicos son coadyuvantes secundarios.',
      sourceExam: 'ENAR El Salvador',
    }
  ),
  createNewFSRSCard(
    'enar-card-02',
    '¿Cuáles son los componentes de la tríada de Charcot para Colangitis Aguda y qué añade la péntada de Reynolds?',
    'Tríada de Charcot: Fiebre + Ictericia + Dolor en hipocondrio derecho.\nPéntada de Reynolds: Tríada de Charcot + Choque (hipotensión) + Confusión mental (deterioro neurológico).',
    'Medicina',
    {
      topic: 'Cirugía General / Vías Biliares',
      keyTakeaway: 'La péntada de Reynolds indica colangitis supurativa obstructiva grave y requiere descompresión biliar urgente mediante CPRE.',
      sourceExam: 'Cirugía ENAR',
    }
  ),
  createNewFSRSCard(
    'enar-card-03',
    'En el protocolo Código Rojo de El Salvador para Hemorragia Posparto (HPP), ¿cuál es el uterotónico de primera elección?',
    'Oxitocina: 10 a 20 UI en infusión IV rápida en 500 mL de solución salina o lactato Ringer, o 10 UI IM si no hay vía endovenosa.',
    'Medicina',
    {
      topic: 'Ginecología y Obstetricia / Código Rojo',
      keyTakeaway: 'La atonía uterina causa más del 70% de las HPP. Si la oxitocina no revierte la atonía, se escala a metilergonovina o misoprostol rectal/sublingual.',
      sourceExam: 'Obstetricia MINSAL',
    }
  ),
  createNewFSRSCard(
    'enar-card-04',
    '¿Cómo se define el Plan B de rehidratación oral en Pediatría según la norma del MINSAL para deshidratación moderada?',
    'Sales de Rehidratación Oral (SRO) a dosis de 50 a 100 mL/kg durante un período de 4 horas en la unidad de salud, administrado con taza o cuchara de forma continua.',
    'Medicina',
    {
      topic: 'Pediatría / Enfermedad Diarreica Aguda',
      keyTakeaway: 'Si tolera el Plan B y desaparecen signos de deshidratación tras 4 horas, se pasa al Plan A en el hogar; si fracasa (vómitos incoercibles), se pasa a Plan C (IV).',
      sourceExam: 'Pediatría MINSAL',
    }
  ),

  // Derecho Constitucional
  createNewFSRSCard(
    'const-card-01',
    '¿Qué consagra el Art. 1 de la Constitución de la República de El Salvador respecto a la persona humana?',
    'Reconoce a la persona humana como el origen y el fin de la actividad del Estado. Reconoce asimismo como persona humana a todo ser humano desde el instante de la concepción.',
    'Derecho',
    {
      topic: 'Derecho Constitucional / Principio Pro-Persona',
      keyTakeaway: 'Es la norma fundante axiológica del ordenamiento salvadoreño; la dignidad humana prima sobre cualquier fin estatal o económico.',
      sourceExam: 'Constitución 1983',
    }
  ),
  createNewFSRSCard(
    'notary-card-01',
    '¿Cuál es el plazo legal que tiene un Notario salvadoreño para remitir el testimonio de un testamento cerrado a la Sección de Notariado de la CSJ?',
    'Dentro de los 5 días hábiles siguientes al otorgamiento de la escritura pública correspondiente.',
    'Derecho',
    {
      topic: 'Derecho Notarial / Testamentos',
      keyTakeaway: 'El incumplimiento de este plazo acarrea sanción disciplinaria por la Sección de Notariado de la Corte Suprema de Justicia.',
      sourceExam: 'Examen de Notariado CSJ',
    }
  ),

  // Licencias VMT
  createNewFSRSCard(
    'vmt-card-01',
    '¿Cuál es la velocidad máxima permitida en zona escolar durante horarios de entrada o salida de estudiantes según el Reglamento de Tránsito de El Salvador?',
    '20 km/h estricto.',
    'Tránsito',
    {
      topic: 'Reglamento de Tránsito / Zonas Escolares',
      keyTakeaway: 'Superar este límite en presencia de escolares se tipifica como falta muy grave con la máxima sanción económica.',
      sourceExam: 'Prueba Teórica VMT',
    }
  ),

  // Fórmulas Científicas & Biofísica
  createNewFSRSCard(
    'phys-card-01',
    '¿Cómo afecta una reducción del 50% en el radio de un vaso sanguíneo a la resistencia vascular según la Ley de Poiseuille?',
    'La resistencia se multiplica por 16 (aumenta 16 veces), ya que la resistencia es inversamente proporcional a la cuarta potencia del radio: R ∝ 1 / r⁴ ( (1/0.5)⁴ = 2⁴ = 16 ).',
    'Ciencias',
    {
      topic: 'Biofísica / Hemodinámica',
      keyTakeaway: 'Pequeñas variaciones en el diámetro de las arteriolas (vasoconstricción) generan cambios drásticos en la presión arterial y poscarga cardíaca.',
      sourceExam: 'Biofísica Médica',
    }
  ),
];

export const FlashcardModal: React.FC<FlashcardModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
}) => {
  const [cards, setCards] = useState<FSRSCard[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(preselectedCategory || 'ALL');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAddingCustom, setIsAddingCustom] = useState<boolean>(false);

  // Form para nueva flashcard
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');
  const [newCategory, setNewCategory] = useState('Medicina');
  const [newTopic, setNewTopic] = useState('');
  const [newTakeaway, setNewTakeaway] = useState('');

  // Inicializar o cargar flashcards de localStorage
  useEffect(() => {
    if (isOpen) {
      const stored = getStoredFlashcards();
      if (stored.length === 0) {
        saveStoredFlashcards(DEFAULT_PRESEEDED_CARDS);
        setCards(DEFAULT_PRESEEDED_CARDS);
      } else {
        setCards(stored);
      }
      setIsFlipped(false);
      setCurrentCardIndex(0);
    }
  }, [isOpen]);

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'ALL') return cards;
    return cards.filter(c => c.category === selectedCategory);
  }, [cards, selectedCategory]);

  const activeCard: FSRSCard | undefined = filteredCards[currentCardIndex];

  const categories = useMemo(() => {
    const set = new Set(cards.map(c => c.category));
    return ['ALL', ...Array.from(set)];
  }, [cards]);

  const handleRate = (rating: FSRSRating) => {
    if (!activeCard) return;

    const updated = reviewFSRSCard(activeCard, rating, new Date());
    const allUpdated = cards.map(c => (c.id === updated.id ? updated : c));
    setCards(allUpdated);
    saveStoredFlashcards(allUpdated);

    setIsFlipped(false);
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handleSaveCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFront.trim() || !newBack.trim()) return;

    const card = createNewFSRSCard(
      `custom-${Date.now()}`,
      newFront.trim(),
      newBack.trim(),
      newCategory,
      {
        topic: newTopic.trim() || undefined,
        keyTakeaway: newTakeaway.trim() || undefined,
        sourceExam: 'KUSKAT Estudiante',
      }
    );

    const updated = [card, ...cards];
    setCards(updated);
    saveStoredFlashcards(updated);

    setNewFront('');
    setNewBack('');
    setNewTopic('');
    setNewTakeaway('');
    setIsAddingCustom(false);
  };

  const handleDeleteCard = (cardId: string) => {
    const updated = cards.filter(c => c.id !== cardId);
    setCards(updated);
    saveStoredFlashcards(updated);
    if (currentCardIndex >= updated.length) {
      setCurrentCardIndex(Math.max(0, updated.length - 1));
    }
    setIsFlipped(false);
  };

  if (!isOpen) return null;

  const intervals = activeCard ? getFSRSIntervalEstimates(activeCard) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1B3D]/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] rounded-xl border border-[#D5D3C7] shadow-corporate-elevated max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden relative animate-scale-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Cabecera Modal */}
        <div className="bg-[#0B1B3D] border-b border-[#1A2E5A] p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#07132B] border border-[#C59B27]/40 text-[#C59B27] flex items-center justify-center shadow-xs">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#132A5C] text-[#C59B27] text-[10px] font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
                <span>Motor FSRS • Repetición Espaciada</span>
              </div>
              <h3 className="text-base sm:text-lg font-editorial font-bold tracking-tight text-white">
                Tarjetas Nemotécnicas Inteligentes KUSKAT
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
            aria-label="Cerrar modal de tarjetas"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Barra de Filtros & Contador */}
        <div className="bg-[#F2F1EA] px-4 py-2.5 border-b border-[#E5E3D8] flex items-center justify-between gap-2 flex-wrap text-xs font-sans-ui">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer font-mono-exam ${
                  selectedCategory === cat
                    ? 'bg-[#0B1B3D] text-[#FAF9F5]'
                    : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
                }`}
              >
                {cat === 'ALL' ? 'Todas las Áreas' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="font-mono-exam text-[11px] text-[#64748B] font-bold">
              {filteredCards.length > 0 ? `${currentCardIndex + 1} / ${filteredCards.length}` : '0 tarjetas'}
            </span>
            <button
              onClick={() => setIsAddingCustom(!isAddingCustom)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-semibold text-xs transition-colors cursor-pointer font-mono-exam"
            >
              <Plus className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{isAddingCustom ? 'Ver Tarjetas' : 'Nueva'}</span>
            </button>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-sans-ui space-y-4">
          {isAddingCustom ? (
            /* Formulario para añadir tarjeta personalizada */
            <form onSubmit={handleSaveCustomCard} className="space-y-3 bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle">
              <h4 className="font-editorial font-bold text-base text-[#111625] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#0B1B3D]" />
                Crear Nueva Tarjeta Nemotécnica FSRS
              </h4>

              <div>
                <label className="block text-xs font-bold text-[#475569] uppercase font-mono-exam mb-1">
                  Pregunta / Concepto (Anverso):
                </label>
                <textarea
                  required
                  rows={2}
                  value={newFront}
                  onChange={e => setNewFront(e.target.value)}
                  placeholder="Ej: ¿Cuál es la tríada clásica del síndrome meníngeo?"
                  className="w-full p-2.5 text-xs bg-[#FAF9F5] border border-[#E5E3D8] rounded-lg focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#475569] uppercase font-mono-exam mb-1">
                  Respuesta Explicada (Reverso):
                </label>
                <textarea
                  required
                  rows={3}
                  value={newBack}
                  onChange={e => setNewBack(e.target.value)}
                  placeholder="Ej: Cefalea + Fiebre + Rigidez de nuca (signos de Kernig y Brudzinski positivos)..."
                  className="w-full p-2.5 text-xs bg-[#FAF9F5] border border-[#E5E3D8] rounded-lg focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#475569] uppercase font-mono-exam mb-1">
                    Área Académica:
                  </label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                    className="w-full p-2 text-xs bg-[#FAF9F5] border border-[#E5E3D8] rounded-lg focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option value="Medicina">Medicina / Residentado ENAR</option>
                    <option value="Derecho">Derecho / Constitución & Notariado</option>
                    <option value="Tránsito">Tránsito & Licencias VMT</option>
                    <option value="Ciencias">Ciencias / Biofísica & Química</option>
                    <option value="Cursos Técnicos">Cursos Técnicos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#475569] uppercase font-mono-exam mb-1">
                    Tema o Subárea (Opcional):
                  </label>
                  <input
                    type="text"
                    value={newTopic}
                    onChange={e => setNewTopic(e.target.value)}
                    placeholder="Ej: Neurología de Urgencias"
                    className="w-full p-2 text-xs bg-[#FAF9F5] border border-[#E5E3D8] rounded-lg focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#475569] uppercase font-mono-exam mb-1">
                  Punto Clave Educativo (High-Yield Key Takeaway):
                </label>
                <input
                  type="text"
                  value={newTakeaway}
                  onChange={e => setNewTakeaway(e.target.value)}
                  placeholder="Regla de oro para recordar en el examen..."
                  className="w-full p-2 text-xs bg-[#FAF9F5] border border-[#E5E3D8] rounded-lg focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingCustom(false)}
                  className="px-3 py-1.5 text-xs text-[#475569] hover:bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold text-white bg-[#0B1B3D] hover:bg-[#132A5C] rounded-lg border border-[#1A2E5A]"
                >
                  Guardar Tarjeta FSRS
                </button>
              </div>
            </form>
          ) : !activeCard ? (
            <div className="bg-white p-12 text-center rounded-xl border border-[#E5E3D8] space-y-3 shadow-corporate-subtle">
              <CheckCircle2 className="w-10 h-10 text-[#1E7E34] mx-auto" />
              <h4 className="font-editorial text-lg font-bold text-[#111625]">
                ¡No hay tarjetas pendientes en esta sección!
              </h4>
              <p className="text-xs text-[#64748B]">
                Has completado todos los repasos previstos según el algoritmo FSRS.
              </p>
            </div>
          ) : (
            /* Tarjeta Interactiva con Giro / Revelado */
            <div className="space-y-4">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`min-h-[220px] sm:min-h-[250px] p-6 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between shadow-corporate-card relative ${
                  isFlipped
                    ? 'bg-white border-[#C59B27]/60'
                    : 'bg-[#FAF9F5] border-[#E5E3D8] hover:border-[#CBD5E1]'
                }`}
              >
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#EAE8DD]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-exam font-bold text-[10px] uppercase px-2 py-0.5 rounded bg-[#0B1B3D] text-[#FAF9F5]">
                      {activeCard.category}
                    </span>
                    {activeCard.topic && (
                      <span className="text-[11px] text-[#475569] font-medium truncate max-w-[200px]">
                        {activeCard.topic}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-mono-exam text-[#64748B]">
                    <span>Dificultad: {activeCard.difficulty}</span>
                    <span>•</span>
                    <span>Reps: {activeCard.reps}</span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handleDeleteCard(activeCard.id);
                      }}
                      className="p-1 hover:text-rose-600 transition-colors ml-1"
                      title="Eliminar tarjeta"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Contenido Frontal o Posterior */}
                <div className="py-5 flex-1 flex flex-col justify-center">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono-exam font-bold text-[#9E472A] uppercase tracking-wider block">
                        Pregunta / Enunciado (Haz clic para ver respuesta):
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-[#111625] leading-relaxed">
                        {activeCard.front}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono-exam font-bold text-[#1E7E34] uppercase tracking-wider block">
                        Respuesta & Fundamento Técnico:
                      </span>
                      <div className="text-xs sm:text-sm text-[#1E293B] leading-relaxed whitespace-pre-line font-medium">
                        {activeCard.back}
                      </div>

                      {activeCard.keyTakeaway && (
                        <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#C59B27]/40 text-xs text-[#0B1B3D] flex items-start gap-2 mt-2">
                          <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                          <div>
                            <strong className="block text-[11px] font-mono-exam text-[#9E472A] uppercase">
                              Punto Clave Educativo:
                            </strong>
                            <span className="text-xs">{activeCard.keyTakeaway}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Indicador de giro */}
                <div className="text-center pt-2 border-t border-[#EAE8DD] text-[11px] text-[#64748B] flex items-center justify-center gap-1.5 font-mono-exam">
                  <RotateCw className="w-3.5 h-3.5 text-[#0B1B3D]" />
                  <span>{isFlipped ? 'Clic para ocultar respuesta' : 'Clic para voltear tarjeta'}</span>
                </div>
              </div>

              {/* Botones de Calificación FSRS (Aparecen al voltear la tarjeta) */}
              {isFlipped && intervals && (
                <div className="space-y-2 animate-fade-in">
                  <span className="text-[11px] font-bold font-mono-exam text-[#475569] uppercase tracking-wider block text-center">
                    ¿Cómo estuvo tu retención? (El algoritmo FSRS programará el próximo intervalo):
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleRate(1)}
                      className="p-2.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-300 text-rose-900 transition-colors text-center cursor-pointer"
                    >
                      <span className="block font-bold text-xs">Otra vez (1)</span>
                      <span className="block text-[10px] font-mono-exam text-rose-700">+{intervals[1]}</span>
                    </button>

                    <button
                      onClick={() => handleRate(2)}
                      className="p-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 transition-colors text-center cursor-pointer"
                    >
                      <span className="block font-bold text-xs">Difícil (2)</span>
                      <span className="block text-[10px] font-mono-exam text-amber-700">+{intervals[2]}</span>
                    </button>

                    <button
                      onClick={() => handleRate(3)}
                      className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-900 transition-colors text-center cursor-pointer"
                    >
                      <span className="block font-bold text-xs">Bueno (3)</span>
                      <span className="block text-[10px] font-mono-exam text-blue-700">+{intervals[3]}</span>
                    </button>

                    <button
                      onClick={() => handleRate(4)}
                      className="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 transition-colors text-center cursor-pointer"
                    >
                      <span className="block font-bold text-xs">Fácil (4)</span>
                      <span className="block text-[10px] font-mono-exam text-emerald-700">+{intervals[4]}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Controles de Navegación Manual */}
              <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
                <button
                  disabled={currentCardIndex === 0}
                  onClick={() => {
                    setCurrentCardIndex(prev => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  className="inline-flex items-center gap-1 p-1.5 hover:text-[#0B1B3D] disabled:opacity-30 cursor-pointer font-mono-exam"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="font-mono-exam text-[11px]">
                  FSRS v4.5 • Espaciado DSR
                </span>

                <button
                  disabled={currentCardIndex >= filteredCards.length - 1}
                  onClick={() => {
                    setCurrentCardIndex(prev => Math.min(filteredCards.length - 1, prev + 1));
                    setIsFlipped(false);
                  }}
                  className="inline-flex items-center gap-1 p-1.5 hover:text-[#0B1B3D] disabled:opacity-30 cursor-pointer font-mono-exam"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F2F1EA] px-5 py-3 border-t border-[#E5E3D8] text-center text-[11px] text-[#64748B] font-mono-exam">
          <span>KUSKAT Spaced Repetition Engine • Retención Calibrada al 90%</span>
        </div>
      </div>
    </div>
  );
};

export default FlashcardModal;
