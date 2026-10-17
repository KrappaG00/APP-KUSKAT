import { LanguageQuestion, CEFRLevel } from './englishData';

export const NAHUAT_QUESTIONS_BANK: LanguageQuestion[] = [
  {
    "id": "nahuat_q_a1_01",
    "number": 1,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_02",
    "number": 2,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales Absolutos en Náhuat",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_03",
    "number": 3,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prefijos de Sujeto en el Presente Verbal",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_04",
    "number": 4,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Sustantivo Absolutivo y sus Terminaciones",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_05",
    "number": 5,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Posesión Nominal: Prefijos Posesivos",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_06",
    "number": 6,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Descriptivos y Calificativos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_07",
    "number": 7,
    "level": "A1",
    "variant": "ALL",
    "topic": "Oraciones Ecuativas y Copulativas",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_08",
    "number": 8,
    "level": "A1",
    "variant": "ALL",
    "topic": "Interrogativos Fundamentales en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_09",
    "number": 9,
    "level": "A1",
    "variant": "ALL",
    "topic": "Números Vigesimales del 1 al 10",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_10",
    "number": 10,
    "level": "A1",
    "variant": "ALL",
    "topic": "Colores Tradicionales y Cosmovisión Pipil",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_11",
    "number": 11,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Familia y el Parentesco Comunitario",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_12",
    "number": 12,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Casa, el Solar y Espacios Domésticos",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_13",
    "number": 13,
    "level": "A1",
    "variant": "ALL",
    "topic": "Alimentos Sagrados de Cuscatlán: El Maíz y la Milpa",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_14",
    "number": 14,
    "level": "A1",
    "variant": "ALL",
    "topic": "Animales de la Región y Fauna de Sonsonate",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_15",
    "number": 15,
    "level": "A1",
    "variant": "ALL",
    "topic": "Expresiones de Tiempo y Partículas Cotidianas",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_16",
    "number": 16,
    "level": "A1",
    "variant": "ALL",
    "topic": "Posposiciones Espaciales Básicas",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_17",
    "number": 17,
    "level": "A1",
    "variant": "ALL",
    "topic": "Negación Básica en Náhuat: Inte y Tesu",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_18",
    "number": 18,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Plural de los Sustantivos Animados e Inanimados",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_19",
    "number": 19,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos de Movimiento: Yawi (ir) y Witz (venir)",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_20",
    "number": 20,
    "level": "A1",
    "variant": "ALL",
    "topic": "Integración y Conversación Básica en Sonsonate",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_21",
    "number": 21,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_22",
    "number": 22,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales Absolutos en Náhuat",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_23",
    "number": 23,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prefijos de Sujeto en el Presente Verbal",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_24",
    "number": 24,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Sustantivo Absolutivo y sus Terminaciones",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_25",
    "number": 25,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Posesión Nominal: Prefijos Posesivos",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_26",
    "number": 26,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Descriptivos y Calificativos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_27",
    "number": 27,
    "level": "A1",
    "variant": "ALL",
    "topic": "Oraciones Ecuativas y Copulativas",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_28",
    "number": 28,
    "level": "A1",
    "variant": "ALL",
    "topic": "Interrogativos Fundamentales en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_29",
    "number": 29,
    "level": "A1",
    "variant": "ALL",
    "topic": "Números Vigesimales del 1 al 10",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_30",
    "number": 30,
    "level": "A1",
    "variant": "ALL",
    "topic": "Colores Tradicionales y Cosmovisión Pipil",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_31",
    "number": 31,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Familia y el Parentesco Comunitario",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_32",
    "number": 32,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Casa, el Solar y Espacios Domésticos",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_33",
    "number": 33,
    "level": "A1",
    "variant": "ALL",
    "topic": "Alimentos Sagrados de Cuscatlán: El Maíz y la Milpa",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_34",
    "number": 34,
    "level": "A1",
    "variant": "ALL",
    "topic": "Animales de la Región y Fauna de Sonsonate",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_35",
    "number": 35,
    "level": "A1",
    "variant": "ALL",
    "topic": "Expresiones de Tiempo y Partículas Cotidianas",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_36",
    "number": 36,
    "level": "A1",
    "variant": "ALL",
    "topic": "Posposiciones Espaciales Básicas",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_37",
    "number": 37,
    "level": "A1",
    "variant": "ALL",
    "topic": "Negación Básica en Náhuat: Inte y Tesu",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_38",
    "number": 38,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Plural de los Sustantivos Animados e Inanimados",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_39",
    "number": 39,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos de Movimiento: Yawi (ir) y Witz (venir)",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_40",
    "number": 40,
    "level": "A1",
    "variant": "ALL",
    "topic": "Integración y Conversación Básica en Sonsonate",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_41",
    "number": 41,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_42",
    "number": 42,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales Absolutos en Náhuat",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_43",
    "number": 43,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prefijos de Sujeto en el Presente Verbal",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_44",
    "number": 44,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Sustantivo Absolutivo y sus Terminaciones",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_45",
    "number": 45,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Posesión Nominal: Prefijos Posesivos",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_46",
    "number": 46,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Descriptivos y Calificativos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_47",
    "number": 47,
    "level": "A1",
    "variant": "ALL",
    "topic": "Oraciones Ecuativas y Copulativas",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_48",
    "number": 48,
    "level": "A1",
    "variant": "ALL",
    "topic": "Interrogativos Fundamentales en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_49",
    "number": 49,
    "level": "A1",
    "variant": "ALL",
    "topic": "Números Vigesimales del 1 al 10",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a1_50",
    "number": 50,
    "level": "A1",
    "variant": "ALL",
    "topic": "Colores Tradicionales y Cosmovisión Pipil",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_01",
    "number": 1,
    "level": "A2",
    "variant": "ALL",
    "topic": "Clasificación de los Verbos Intransitivos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_02",
    "number": 2,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Pretérito en -ki y -k",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_03",
    "number": 3,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Imperativo y Exhortativo con Shi-",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_04",
    "number": 4,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_05",
    "number": 5,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objeto Plural de Tercera Persona: Kin-",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_06",
    "number": 6,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_07",
    "number": 7,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Futuro Simple en -s",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_08",
    "number": 8,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Imperfecto en -tuya / -katka",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_09",
    "number": 9,
    "level": "A2",
    "variant": "ALL",
    "topic": "Pronombres Demostrativos: Ini e Ino",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_10",
    "number": 10,
    "level": "A2",
    "variant": "ALL",
    "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_11",
    "number": 11,
    "level": "A2",
    "variant": "ALL",
    "topic": "Posposiciones Complejas y Espaciales",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_12",
    "number": 12,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verbos Reflexivos con Mu-",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_13",
    "number": 13,
    "level": "A2",
    "variant": "ALL",
    "topic": "Adverbios de Cantidad e Intensidad",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_14",
    "number": 14,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Comparación: Wey que y Mas que",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_15",
    "number": 15,
    "level": "A2",
    "variant": "ALL",
    "topic": "Números del 11 al 20 y Sistema Vigesimal",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_16",
    "number": 16,
    "level": "A2",
    "variant": "ALL",
    "topic": "Vocabulario de la Salud y el Cuerpo Humano",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_17",
    "number": 17,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Clima, las Estaciones y el Tiempo Atmosférico",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_18",
    "number": 18,
    "level": "A2",
    "variant": "ALL",
    "topic": "Plantas Medicinales y Flora de El Salvador",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_19",
    "number": 19,
    "level": "A2",
    "variant": "ALL",
    "topic": "Oficios Tradicionales y Vida Campesina",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_20",
    "number": 20,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conversación Fluida: Relatando el Día en el Cantón",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_21",
    "number": 21,
    "level": "A2",
    "variant": "ALL",
    "topic": "Clasificación de los Verbos Intransitivos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_22",
    "number": 22,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Pretérito en -ki y -k",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_23",
    "number": 23,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Imperativo y Exhortativo con Shi-",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_24",
    "number": 24,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_25",
    "number": 25,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objeto Plural de Tercera Persona: Kin-",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_26",
    "number": 26,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_27",
    "number": 27,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Futuro Simple en -s",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_28",
    "number": 28,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Imperfecto en -tuya / -katka",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_29",
    "number": 29,
    "level": "A2",
    "variant": "ALL",
    "topic": "Pronombres Demostrativos: Ini e Ino",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_30",
    "number": 30,
    "level": "A2",
    "variant": "ALL",
    "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_31",
    "number": 31,
    "level": "A2",
    "variant": "ALL",
    "topic": "Posposiciones Complejas y Espaciales",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_32",
    "number": 32,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verbos Reflexivos con Mu-",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_33",
    "number": 33,
    "level": "A2",
    "variant": "ALL",
    "topic": "Adverbios de Cantidad e Intensidad",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_34",
    "number": 34,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Comparación: Wey que y Mas que",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_35",
    "number": 35,
    "level": "A2",
    "variant": "ALL",
    "topic": "Números del 11 al 20 y Sistema Vigesimal",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_36",
    "number": 36,
    "level": "A2",
    "variant": "ALL",
    "topic": "Vocabulario de la Salud y el Cuerpo Humano",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_37",
    "number": 37,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Clima, las Estaciones y el Tiempo Atmosférico",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_38",
    "number": 38,
    "level": "A2",
    "variant": "ALL",
    "topic": "Plantas Medicinales y Flora de El Salvador",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_39",
    "number": 39,
    "level": "A2",
    "variant": "ALL",
    "topic": "Oficios Tradicionales y Vida Campesina",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_40",
    "number": 40,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conversación Fluida: Relatando el Día en el Cantón",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_41",
    "number": 41,
    "level": "A2",
    "variant": "ALL",
    "topic": "Clasificación de los Verbos Intransitivos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_42",
    "number": 42,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Pretérito en -ki y -k",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_43",
    "number": 43,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Imperativo y Exhortativo con Shi-",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_44",
    "number": 44,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_45",
    "number": 45,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objeto Plural de Tercera Persona: Kin-",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_46",
    "number": 46,
    "level": "A2",
    "variant": "ALL",
    "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_47",
    "number": 47,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Futuro Simple en -s",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_48",
    "number": 48,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Pasado Imperfecto en -tuya / -katka",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_49",
    "number": 49,
    "level": "A2",
    "variant": "ALL",
    "topic": "Pronombres Demostrativos: Ini e Ino",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_a2_50",
    "number": 50,
    "level": "A2",
    "variant": "ALL",
    "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_01",
    "number": 1,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Causativos en -tia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_02",
    "number": 2,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Aplicativos en -lia",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_03",
    "number": 3,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Pretérito Pluscuamperfecto",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_04",
    "number": 4,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Voz Pasiva en -wa y -kalo",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_05",
    "number": 5,
    "level": "B1",
    "variant": "ALL",
    "topic": "Cláusulas Condicionales Reales con Tla",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_06",
    "number": 6,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Aspecto Durativo y Progresivo",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_07",
    "number": 7,
    "level": "B1",
    "variant": "ALL",
    "topic": "Oraciones Relativas con Katka y Ka",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_08",
    "number": 8,
    "level": "B1",
    "variant": "ALL",
    "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_09",
    "number": 9,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos de Dirección y Trayectoria",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_10",
    "number": 10,
    "level": "B1",
    "variant": "ALL",
    "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_11",
    "number": 11,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresión de Obligación y Necesidad: Muneki",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_12",
    "number": 12,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Lógicos y Discursivos",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_13",
    "number": 13,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Sistema Vigesimal hasta el 100",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_14",
    "number": 14,
    "level": "B1",
    "variant": "ALL",
    "topic": "Léxico de la Biodiversidad y Selva Costera",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_15",
    "number": 15,
    "level": "B1",
    "variant": "ALL",
    "topic": "Mitología y Cosmovisión Pipil: Nanawatzin",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_16",
    "number": 16,
    "level": "B1",
    "variant": "ALL",
    "topic": "Causatividad Doble y Morfología Derivada",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_17",
    "number": 17,
    "level": "B1",
    "variant": "ALL",
    "topic": "Discurso Reportado y Cita Indirecta",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_18",
    "number": 18,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Verbo Mati (Saber/Conocer/Sentir)",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_19",
    "number": 19,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresiones Idiomáticas y Modismos de Sonsonate",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_20",
    "number": 20,
    "level": "B1",
    "variant": "ALL",
    "topic": "Narración y Crónica Comunitaria en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_21",
    "number": 21,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Causativos en -tia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_22",
    "number": 22,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Aplicativos en -lia",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_23",
    "number": 23,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Pretérito Pluscuamperfecto",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_24",
    "number": 24,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Voz Pasiva en -wa y -kalo",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_25",
    "number": 25,
    "level": "B1",
    "variant": "ALL",
    "topic": "Cláusulas Condicionales Reales con Tla",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_26",
    "number": 26,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Aspecto Durativo y Progresivo",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_27",
    "number": 27,
    "level": "B1",
    "variant": "ALL",
    "topic": "Oraciones Relativas con Katka y Ka",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_28",
    "number": 28,
    "level": "B1",
    "variant": "ALL",
    "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_29",
    "number": 29,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos de Dirección y Trayectoria",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_30",
    "number": 30,
    "level": "B1",
    "variant": "ALL",
    "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_31",
    "number": 31,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresión de Obligación y Necesidad: Muneki",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_32",
    "number": 32,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Lógicos y Discursivos",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_33",
    "number": 33,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Sistema Vigesimal hasta el 100",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_34",
    "number": 34,
    "level": "B1",
    "variant": "ALL",
    "topic": "Léxico de la Biodiversidad y Selva Costera",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_35",
    "number": 35,
    "level": "B1",
    "variant": "ALL",
    "topic": "Mitología y Cosmovisión Pipil: Nanawatzin",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_36",
    "number": 36,
    "level": "B1",
    "variant": "ALL",
    "topic": "Causatividad Doble y Morfología Derivada",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_37",
    "number": 37,
    "level": "B1",
    "variant": "ALL",
    "topic": "Discurso Reportado y Cita Indirecta",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_38",
    "number": 38,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Verbo Mati (Saber/Conocer/Sentir)",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_39",
    "number": 39,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresiones Idiomáticas y Modismos de Sonsonate",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_40",
    "number": 40,
    "level": "B1",
    "variant": "ALL",
    "topic": "Narración y Crónica Comunitaria en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_41",
    "number": 41,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Causativos en -tia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_42",
    "number": 42,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos Aplicativos en -lia",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_43",
    "number": 43,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Pretérito Pluscuamperfecto",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_44",
    "number": 44,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Voz Pasiva en -wa y -kalo",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_45",
    "number": 45,
    "level": "B1",
    "variant": "ALL",
    "topic": "Cláusulas Condicionales Reales con Tla",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_46",
    "number": 46,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Aspecto Durativo y Progresivo",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_47",
    "number": 47,
    "level": "B1",
    "variant": "ALL",
    "topic": "Oraciones Relativas con Katka y Ka",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_48",
    "number": 48,
    "level": "B1",
    "variant": "ALL",
    "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_49",
    "number": 49,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verbos de Dirección y Trayectoria",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b1_50",
    "number": 50,
    "level": "B1",
    "variant": "ALL",
    "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_01",
    "number": 1,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Modo Potencial y Condicional Irreal en -skia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_02",
    "number": 2,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_03",
    "number": 3,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sustantivos Incorporados en el Verbo",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_04",
    "number": 4,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Pretérito Habitual y Continuativo en -tia",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_05",
    "number": 5,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Voz Antipasiva en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_06",
    "number": 6,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos Colectivos y Plurales Complejos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_07",
    "number": 7,
    "level": "B2",
    "variant": "ALL",
    "topic": "Estructura de la Cláusula Subordinada Causal y Final",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_08",
    "number": 8,
    "level": "B2",
    "variant": "ALL",
    "topic": "Adverbios de Manera y Derivación Adverbial",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_09",
    "number": 9,
    "level": "B2",
    "variant": "ALL",
    "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_10",
    "number": 10,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_11",
    "number": 11,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Reduplicación Verbal Repetitiva e Intensiva",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_12",
    "number": 12,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Discurso Ritual y Sagrado: La Palabra Florida",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_13",
    "number": 13,
    "level": "B2",
    "variant": "ALL",
    "topic": "Concordancia Pronominal en Oraciones con Clíticos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_14",
    "number": 14,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Ciclo Agrícola del Maíz en la Tradición Pipil",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_15",
    "number": 15,
    "level": "B2",
    "variant": "ALL",
    "topic": "Toponimia y Geografía Histórica de El Salvador",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_16",
    "number": 16,
    "level": "B2",
    "variant": "ALL",
    "topic": "Metáforas Anatómicas y el Centro Emocional: Yulu",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_17",
    "number": 17,
    "level": "B2",
    "variant": "ALL",
    "topic": "Cláusulas Concesivas y Adversativas Avanzadas",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_18",
    "number": 18,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Arte del Tejido y Cerámica en Nahuizalco",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_19",
    "number": 19,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Transmisión Intergeneracional del Náhuat",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_20",
    "number": 20,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis de Textos Testimoniales de Hablantes Nativos",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_21",
    "number": 21,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Modo Potencial y Condicional Irreal en -skia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_22",
    "number": 22,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_23",
    "number": 23,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sustantivos Incorporados en el Verbo",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_24",
    "number": 24,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Pretérito Habitual y Continuativo en -tia",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_25",
    "number": 25,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Voz Antipasiva en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_26",
    "number": 26,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos Colectivos y Plurales Complejos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_27",
    "number": 27,
    "level": "B2",
    "variant": "ALL",
    "topic": "Estructura de la Cláusula Subordinada Causal y Final",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_28",
    "number": 28,
    "level": "B2",
    "variant": "ALL",
    "topic": "Adverbios de Manera y Derivación Adverbial",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_29",
    "number": 29,
    "level": "B2",
    "variant": "ALL",
    "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_30",
    "number": 30,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_31",
    "number": 31,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Reduplicación Verbal Repetitiva e Intensiva",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_32",
    "number": 32,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Discurso Ritual y Sagrado: La Palabra Florida",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_33",
    "number": 33,
    "level": "B2",
    "variant": "ALL",
    "topic": "Concordancia Pronominal en Oraciones con Clíticos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_34",
    "number": 34,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Ciclo Agrícola del Maíz en la Tradición Pipil",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_35",
    "number": 35,
    "level": "B2",
    "variant": "ALL",
    "topic": "Toponimia y Geografía Histórica de El Salvador",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_36",
    "number": 36,
    "level": "B2",
    "variant": "ALL",
    "topic": "Metáforas Anatómicas y el Centro Emocional: Yulu",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_37",
    "number": 37,
    "level": "B2",
    "variant": "ALL",
    "topic": "Cláusulas Concesivas y Adversativas Avanzadas",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_38",
    "number": 38,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Arte del Tejido y Cerámica en Nahuizalco",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_39",
    "number": 39,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Transmisión Intergeneracional del Náhuat",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_40",
    "number": 40,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis de Textos Testimoniales de Hablantes Nativos",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_41",
    "number": 41,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Modo Potencial y Condicional Irreal en -skia",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_42",
    "number": 42,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_43",
    "number": 43,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sustantivos Incorporados en el Verbo",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_44",
    "number": 44,
    "level": "B2",
    "variant": "ALL",
    "topic": "El Pretérito Habitual y Continuativo en -tia",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_45",
    "number": 45,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Voz Antipasiva en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_46",
    "number": 46,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sufijos Colectivos y Plurales Complejos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_47",
    "number": 47,
    "level": "B2",
    "variant": "ALL",
    "topic": "Estructura de la Cláusula Subordinada Causal y Final",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_48",
    "number": 48,
    "level": "B2",
    "variant": "ALL",
    "topic": "Adverbios de Manera y Derivación Adverbial",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_49",
    "number": 49,
    "level": "B2",
    "variant": "ALL",
    "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_b2_50",
    "number": 50,
    "level": "B2",
    "variant": "ALL",
    "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_01",
    "number": 1,
    "level": "C1",
    "variant": "ALL",
    "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_02",
    "number": 2,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_03",
    "number": 3,
    "level": "C1",
    "variant": "ALL",
    "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_04",
    "number": 4,
    "level": "C1",
    "variant": "ALL",
    "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_05",
    "number": 5,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Discurso Reverencial y Fórmulas de Respeto",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_06",
    "number": 6,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_07",
    "number": 7,
    "level": "C1",
    "variant": "ALL",
    "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_08",
    "number": 8,
    "level": "C1",
    "variant": "ALL",
    "topic": "Causatividad Indirecta y Factitiva",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_09",
    "number": 9,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_10",
    "number": 10,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sistemas de Parentesco Extendido Tradicional",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_11",
    "number": 11,
    "level": "C1",
    "variant": "ALL",
    "topic": "Estructuras de Pasiva Impersonal en la Leyenda Oral",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_12",
    "number": 12,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Metáfora Cosmológica en los Textos Rituales",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_13",
    "number": 13,
    "level": "C1",
    "variant": "ALL",
    "topic": "Partículas Discursivas Enclíticas y Modales",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_14",
    "number": 14,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Influencia del Náhuat en el Castellano Salvadoreño",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_15",
    "number": 15,
    "level": "C1",
    "variant": "ALL",
    "topic": "Composición de Discursos Formales en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_16",
    "number": 16,
    "level": "C1",
    "variant": "ALL",
    "topic": "Morfología de los Participios Pasivos y Activos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_17",
    "number": 17,
    "level": "C1",
    "variant": "ALL",
    "topic": "Análisis Morfosintáctico de Documentos Coloniales Pipiles",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_18",
    "number": 18,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Humor, la Ironía y el Doble Sentido en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_19",
    "number": 19,
    "level": "C1",
    "variant": "ALL",
    "topic": "Didáctica y Pedagogía del Náhuat para Salvadoreños",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_20",
    "number": 20,
    "level": "C1",
    "variant": "ALL",
    "topic": "Ensayo Filosófico y Defensa de la Lengua Materna",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_21",
    "number": 21,
    "level": "C1",
    "variant": "ALL",
    "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_22",
    "number": 22,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_23",
    "number": 23,
    "level": "C1",
    "variant": "ALL",
    "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_24",
    "number": 24,
    "level": "C1",
    "variant": "ALL",
    "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_25",
    "number": 25,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Discurso Reverencial y Fórmulas de Respeto",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_26",
    "number": 26,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_27",
    "number": 27,
    "level": "C1",
    "variant": "ALL",
    "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_28",
    "number": 28,
    "level": "C1",
    "variant": "ALL",
    "topic": "Causatividad Indirecta y Factitiva",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_29",
    "number": 29,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_30",
    "number": 30,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sistemas de Parentesco Extendido Tradicional",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_31",
    "number": 31,
    "level": "C1",
    "variant": "ALL",
    "topic": "Estructuras de Pasiva Impersonal en la Leyenda Oral",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_32",
    "number": 32,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Metáfora Cosmológica en los Textos Rituales",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_33",
    "number": 33,
    "level": "C1",
    "variant": "ALL",
    "topic": "Partículas Discursivas Enclíticas y Modales",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_34",
    "number": 34,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Influencia del Náhuat en el Castellano Salvadoreño",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_35",
    "number": 35,
    "level": "C1",
    "variant": "ALL",
    "topic": "Composición de Discursos Formales en Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_36",
    "number": 36,
    "level": "C1",
    "variant": "ALL",
    "topic": "Morfología de los Participios Pasivos y Activos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_37",
    "number": 37,
    "level": "C1",
    "variant": "ALL",
    "topic": "Análisis Morfosintáctico de Documentos Coloniales Pipiles",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_38",
    "number": 38,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Humor, la Ironía y el Doble Sentido en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_39",
    "number": 39,
    "level": "C1",
    "variant": "ALL",
    "topic": "Didáctica y Pedagogía del Náhuat para Salvadoreños",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_40",
    "number": 40,
    "level": "C1",
    "variant": "ALL",
    "topic": "Ensayo Filosófico y Defensa de la Lengua Materna",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_41",
    "number": 41,
    "level": "C1",
    "variant": "ALL",
    "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_42",
    "number": 42,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_43",
    "number": 43,
    "level": "C1",
    "variant": "ALL",
    "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_44",
    "number": 44,
    "level": "C1",
    "variant": "ALL",
    "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_45",
    "number": 45,
    "level": "C1",
    "variant": "ALL",
    "topic": "El Discurso Reverencial y Fórmulas de Respeto",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_46",
    "number": 46,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_47",
    "number": 47,
    "level": "C1",
    "variant": "ALL",
    "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_48",
    "number": 48,
    "level": "C1",
    "variant": "ALL",
    "topic": "Causatividad Indirecta y Factitiva",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_49",
    "number": 49,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c1_50",
    "number": 50,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sistemas de Parentesco Extendido Tradicional",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_01",
    "number": 1,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_02",
    "number": 2,
    "level": "C2",
    "variant": "ALL",
    "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_03",
    "number": 3,
    "level": "C2",
    "variant": "ALL",
    "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_04",
    "number": 4,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_05",
    "number": 5,
    "level": "C2",
    "variant": "ALL",
    "topic": "Metodología de Documentación Lingüística de Campo",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_06",
    "number": 6,
    "level": "C2",
    "variant": "ALL",
    "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_07",
    "number": 7,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_08",
    "number": 8,
    "level": "C2",
    "variant": "ALL",
    "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_09",
    "number": 9,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_10",
    "number": 10,
    "level": "C2",
    "variant": "ALL",
    "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_11",
    "number": 11,
    "level": "C2",
    "variant": "ALL",
    "topic": "Retórica y Estilística de la Negociación Comunitaria",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_12",
    "number": 12,
    "level": "C2",
    "variant": "ALL",
    "topic": "Traducción Especializada: De la Constitución al Náhuat",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_13",
    "number": 13,
    "level": "C2",
    "variant": "ALL",
    "topic": "Toponimia y Geografía Sagrada de Cuscatlán",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_14",
    "number": 14,
    "level": "C2",
    "variant": "ALL",
    "topic": "Gramática Pedagógica Normativa del Náhuat Contemporáneo",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_15",
    "number": 15,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semiótica de los Tejidos, Cerámica y Simbolismo Visual",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_16",
    "number": 16,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Medicina Indígena Tradicional y su Corpus Lingüístico",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_17",
    "number": 17,
    "level": "C2",
    "variant": "ALL",
    "topic": "Filosofía del Buen Vivir Pipil: Yejyek Nemilis",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_18",
    "number": 18,
    "level": "C2",
    "variant": "ALL",
    "topic": "El Teatro Comunitario y la Dramaturgia en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_19",
    "number": 19,
    "level": "C2",
    "variant": "ALL",
    "topic": "Derechos Lingüísticos y Marco Legal de los Pueblos Indígenas",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_20",
    "number": 20,
    "level": "C2",
    "variant": "ALL",
    "topic": "Discurso Magistral: El Porvenir Eterno del Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_21",
    "number": 21,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_22",
    "number": 22,
    "level": "C2",
    "variant": "ALL",
    "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_23",
    "number": 23,
    "level": "C2",
    "variant": "ALL",
    "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_24",
    "number": 24,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_25",
    "number": 25,
    "level": "C2",
    "variant": "ALL",
    "topic": "Metodología de Documentación Lingüística de Campo",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_26",
    "number": 26,
    "level": "C2",
    "variant": "ALL",
    "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_27",
    "number": 27,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_28",
    "number": 28,
    "level": "C2",
    "variant": "ALL",
    "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_29",
    "number": 29,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_30",
    "number": 30,
    "level": "C2",
    "variant": "ALL",
    "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_31",
    "number": 31,
    "level": "C2",
    "variant": "ALL",
    "topic": "Retórica y Estilística de la Negociación Comunitaria",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_32",
    "number": 32,
    "level": "C2",
    "variant": "ALL",
    "topic": "Traducción Especializada: De la Constitución al Náhuat",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_33",
    "number": 33,
    "level": "C2",
    "variant": "ALL",
    "topic": "Toponimia y Geografía Sagrada de Cuscatlán",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_34",
    "number": 34,
    "level": "C2",
    "variant": "ALL",
    "topic": "Gramática Pedagógica Normativa del Náhuat Contemporáneo",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_35",
    "number": 35,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semiótica de los Tejidos, Cerámica y Simbolismo Visual",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_36",
    "number": 36,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Medicina Indígena Tradicional y su Corpus Lingüístico",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_37",
    "number": 37,
    "level": "C2",
    "variant": "ALL",
    "topic": "Filosofía del Buen Vivir Pipil: Yejyek Nemilis",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_38",
    "number": 38,
    "level": "C2",
    "variant": "ALL",
    "topic": "El Teatro Comunitario y la Dramaturgia en Náhuat",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_39",
    "number": 39,
    "level": "C2",
    "variant": "ALL",
    "topic": "Derechos Lingüísticos y Marco Legal de los Pueblos Indígenas",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_40",
    "number": 40,
    "level": "C2",
    "variant": "ALL",
    "topic": "Discurso Magistral: El Porvenir Eterno del Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_41",
    "number": 41,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_42",
    "number": 42,
    "level": "C2",
    "variant": "ALL",
    "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_43",
    "number": 43,
    "level": "C2",
    "variant": "ALL",
    "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_44",
    "number": 44,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_45",
    "number": 45,
    "level": "C2",
    "variant": "ALL",
    "topic": "Metodología de Documentación Lingüística de Campo",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_46",
    "number": 46,
    "level": "C2",
    "variant": "ALL",
    "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
    "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
    "options": [
      {
        "key": "A",
        "text": "ni- (ejemplo: ni-taketza = yo hablo)"
      },
      {
        "key": "B",
        "text": "ti- (segunda persona o primera plural)"
      },
      {
        "key": "C",
        "text": "shi- (modo imperativo)"
      },
      {
        "key": "D",
        "text": "ki- (prefijo de objeto transitivo)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_47",
    "number": 47,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
    "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
    "options": [
      {
        "key": "A",
        "text": "Se duplica al final de la palabra"
      },
      {
        "key": "B",
        "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
      },
      {
        "key": "C",
        "text": "Se transforma obligatoriamente en -ket"
      },
      {
        "key": "D",
        "text": "Permanece intacto sin sufrir modificación"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_48",
    "number": 48,
    "level": "C2",
    "variant": "ALL",
    "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
    "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
    "options": [
      {
        "key": "A",
        "text": "Yejyek tunal, nu-nanan"
      },
      {
        "key": "B",
        "text": "Yejyek tiutak, nu-kniw"
      },
      {
        "key": "C",
        "text": "Yejyek taywa, nu-tatan"
      },
      {
        "key": "D",
        "text": "Ashkan tunal, nu-ichpuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_49",
    "number": 49,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
    "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
    "options": [
      {
        "key": "A",
        "text": "Marca el tiempo pasado de la acción"
      },
      {
        "key": "B",
        "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
      },
      {
        "key": "C",
        "text": "Indica una pregunta interrogativa"
      },
      {
        "key": "D",
        "text": "Convierte la oración en voz pasiva"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  },
  {
    "id": "nahuat_q_c2_50",
    "number": 50,
    "level": "C2",
    "variant": "ALL",
    "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
    "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
    "options": [
      {
        "key": "A",
        "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
      },
      {
        "key": "B",
        "text": "'Persona que canta'"
      },
      {
        "key": "C",
        "text": "'Tiempo pasado'"
      },
      {
        "key": "D",
        "text": "'Color blanco brillante'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
    "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
  }
];

export const NAHUAT_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = {
  "A1": [
    {
      "id": "nahuat_q_a1_01",
      "number": 1,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_02",
      "number": 2,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales Absolutos en Náhuat",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_03",
      "number": 3,
      "level": "A1",
      "variant": "ALL",
      "topic": "Prefijos de Sujeto en el Presente Verbal",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_04",
      "number": 4,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Sustantivo Absolutivo y sus Terminaciones",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_05",
      "number": 5,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Posesión Nominal: Prefijos Posesivos",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_06",
      "number": 6,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Descriptivos y Calificativos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_07",
      "number": 7,
      "level": "A1",
      "variant": "ALL",
      "topic": "Oraciones Ecuativas y Copulativas",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_08",
      "number": 8,
      "level": "A1",
      "variant": "ALL",
      "topic": "Interrogativos Fundamentales en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_09",
      "number": 9,
      "level": "A1",
      "variant": "ALL",
      "topic": "Números Vigesimales del 1 al 10",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_10",
      "number": 10,
      "level": "A1",
      "variant": "ALL",
      "topic": "Colores Tradicionales y Cosmovisión Pipil",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_11",
      "number": 11,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Familia y el Parentesco Comunitario",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_12",
      "number": 12,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Casa, el Solar y Espacios Domésticos",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_13",
      "number": 13,
      "level": "A1",
      "variant": "ALL",
      "topic": "Alimentos Sagrados de Cuscatlán: El Maíz y la Milpa",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_14",
      "number": 14,
      "level": "A1",
      "variant": "ALL",
      "topic": "Animales de la Región y Fauna de Sonsonate",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_15",
      "number": 15,
      "level": "A1",
      "variant": "ALL",
      "topic": "Expresiones de Tiempo y Partículas Cotidianas",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_16",
      "number": 16,
      "level": "A1",
      "variant": "ALL",
      "topic": "Posposiciones Espaciales Básicas",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_17",
      "number": 17,
      "level": "A1",
      "variant": "ALL",
      "topic": "Negación Básica en Náhuat: Inte y Tesu",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_18",
      "number": 18,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Plural de los Sustantivos Animados e Inanimados",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_19",
      "number": 19,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos de Movimiento: Yawi (ir) y Witz (venir)",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_20",
      "number": 20,
      "level": "A1",
      "variant": "ALL",
      "topic": "Integración y Conversación Básica en Sonsonate",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_21",
      "number": 21,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_22",
      "number": 22,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales Absolutos en Náhuat",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_23",
      "number": 23,
      "level": "A1",
      "variant": "ALL",
      "topic": "Prefijos de Sujeto en el Presente Verbal",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_24",
      "number": 24,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Sustantivo Absolutivo y sus Terminaciones",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_25",
      "number": 25,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Posesión Nominal: Prefijos Posesivos",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_26",
      "number": 26,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Descriptivos y Calificativos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_27",
      "number": 27,
      "level": "A1",
      "variant": "ALL",
      "topic": "Oraciones Ecuativas y Copulativas",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_28",
      "number": 28,
      "level": "A1",
      "variant": "ALL",
      "topic": "Interrogativos Fundamentales en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_29",
      "number": 29,
      "level": "A1",
      "variant": "ALL",
      "topic": "Números Vigesimales del 1 al 10",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_30",
      "number": 30,
      "level": "A1",
      "variant": "ALL",
      "topic": "Colores Tradicionales y Cosmovisión Pipil",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_31",
      "number": 31,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Familia y el Parentesco Comunitario",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_32",
      "number": 32,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Casa, el Solar y Espacios Domésticos",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_33",
      "number": 33,
      "level": "A1",
      "variant": "ALL",
      "topic": "Alimentos Sagrados de Cuscatlán: El Maíz y la Milpa",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_34",
      "number": 34,
      "level": "A1",
      "variant": "ALL",
      "topic": "Animales de la Región y Fauna de Sonsonate",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_35",
      "number": 35,
      "level": "A1",
      "variant": "ALL",
      "topic": "Expresiones de Tiempo y Partículas Cotidianas",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_36",
      "number": 36,
      "level": "A1",
      "variant": "ALL",
      "topic": "Posposiciones Espaciales Básicas",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_37",
      "number": 37,
      "level": "A1",
      "variant": "ALL",
      "topic": "Negación Básica en Náhuat: Inte y Tesu",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_38",
      "number": 38,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Plural de los Sustantivos Animados e Inanimados",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_39",
      "number": 39,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos de Movimiento: Yawi (ir) y Witz (venir)",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_40",
      "number": 40,
      "level": "A1",
      "variant": "ALL",
      "topic": "Integración y Conversación Básica en Sonsonate",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_41",
      "number": 41,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Cortesía y Presentaciones en Náhuat",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_42",
      "number": 42,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales Absolutos en Náhuat",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_43",
      "number": 43,
      "level": "A1",
      "variant": "ALL",
      "topic": "Prefijos de Sujeto en el Presente Verbal",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_44",
      "number": 44,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Sustantivo Absolutivo y sus Terminaciones",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_45",
      "number": 45,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Posesión Nominal: Prefijos Posesivos",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_46",
      "number": 46,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Descriptivos y Calificativos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_47",
      "number": 47,
      "level": "A1",
      "variant": "ALL",
      "topic": "Oraciones Ecuativas y Copulativas",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_48",
      "number": 48,
      "level": "A1",
      "variant": "ALL",
      "topic": "Interrogativos Fundamentales en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_49",
      "number": 49,
      "level": "A1",
      "variant": "ALL",
      "topic": "Números Vigesimales del 1 al 10",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a1_50",
      "number": 50,
      "level": "A1",
      "variant": "ALL",
      "topic": "Colores Tradicionales y Cosmovisión Pipil",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ],
  "A2": [
    {
      "id": "nahuat_q_a2_01",
      "number": 1,
      "level": "A2",
      "variant": "ALL",
      "topic": "Clasificación de los Verbos Intransitivos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_02",
      "number": 2,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Pretérito en -ki y -k",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_03",
      "number": 3,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Imperativo y Exhortativo con Shi-",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_04",
      "number": 4,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_05",
      "number": 5,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objeto Plural de Tercera Persona: Kin-",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_06",
      "number": 6,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_07",
      "number": 7,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Futuro Simple en -s",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_08",
      "number": 8,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Imperfecto en -tuya / -katka",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_09",
      "number": 9,
      "level": "A2",
      "variant": "ALL",
      "topic": "Pronombres Demostrativos: Ini e Ino",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_10",
      "number": 10,
      "level": "A2",
      "variant": "ALL",
      "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_11",
      "number": 11,
      "level": "A2",
      "variant": "ALL",
      "topic": "Posposiciones Complejas y Espaciales",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_12",
      "number": 12,
      "level": "A2",
      "variant": "ALL",
      "topic": "Verbos Reflexivos con Mu-",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_13",
      "number": 13,
      "level": "A2",
      "variant": "ALL",
      "topic": "Adverbios de Cantidad e Intensidad",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_14",
      "number": 14,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Comparación: Wey que y Mas que",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_15",
      "number": 15,
      "level": "A2",
      "variant": "ALL",
      "topic": "Números del 11 al 20 y Sistema Vigesimal",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_16",
      "number": 16,
      "level": "A2",
      "variant": "ALL",
      "topic": "Vocabulario de la Salud y el Cuerpo Humano",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_17",
      "number": 17,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Clima, las Estaciones y el Tiempo Atmosférico",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_18",
      "number": 18,
      "level": "A2",
      "variant": "ALL",
      "topic": "Plantas Medicinales y Flora de El Salvador",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_19",
      "number": 19,
      "level": "A2",
      "variant": "ALL",
      "topic": "Oficios Tradicionales y Vida Campesina",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_20",
      "number": 20,
      "level": "A2",
      "variant": "ALL",
      "topic": "Conversación Fluida: Relatando el Día en el Cantón",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_21",
      "number": 21,
      "level": "A2",
      "variant": "ALL",
      "topic": "Clasificación de los Verbos Intransitivos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_22",
      "number": 22,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Pretérito en -ki y -k",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_23",
      "number": 23,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Imperativo y Exhortativo con Shi-",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_24",
      "number": 24,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_25",
      "number": 25,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objeto Plural de Tercera Persona: Kin-",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_26",
      "number": 26,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_27",
      "number": 27,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Futuro Simple en -s",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_28",
      "number": 28,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Imperfecto en -tuya / -katka",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_29",
      "number": 29,
      "level": "A2",
      "variant": "ALL",
      "topic": "Pronombres Demostrativos: Ini e Ino",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_30",
      "number": 30,
      "level": "A2",
      "variant": "ALL",
      "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_31",
      "number": 31,
      "level": "A2",
      "variant": "ALL",
      "topic": "Posposiciones Complejas y Espaciales",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_32",
      "number": 32,
      "level": "A2",
      "variant": "ALL",
      "topic": "Verbos Reflexivos con Mu-",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_33",
      "number": 33,
      "level": "A2",
      "variant": "ALL",
      "topic": "Adverbios de Cantidad e Intensidad",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_34",
      "number": 34,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Comparación: Wey que y Mas que",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_35",
      "number": 35,
      "level": "A2",
      "variant": "ALL",
      "topic": "Números del 11 al 20 y Sistema Vigesimal",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_36",
      "number": 36,
      "level": "A2",
      "variant": "ALL",
      "topic": "Vocabulario de la Salud y el Cuerpo Humano",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_37",
      "number": 37,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Clima, las Estaciones y el Tiempo Atmosférico",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_38",
      "number": 38,
      "level": "A2",
      "variant": "ALL",
      "topic": "Plantas Medicinales y Flora de El Salvador",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_39",
      "number": 39,
      "level": "A2",
      "variant": "ALL",
      "topic": "Oficios Tradicionales y Vida Campesina",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_40",
      "number": 40,
      "level": "A2",
      "variant": "ALL",
      "topic": "Conversación Fluida: Relatando el Día en el Cantón",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_41",
      "number": 41,
      "level": "A2",
      "variant": "ALL",
      "topic": "Clasificación de los Verbos Intransitivos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_42",
      "number": 42,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Pretérito en -ki y -k",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_43",
      "number": 43,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Imperativo y Exhortativo con Shi-",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_44",
      "number": 44,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Objeto Directo Pronominal: Prefijo Ki-",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_45",
      "number": 45,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objeto Plural de Tercera Persona: Kin-",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_46",
      "number": 46,
      "level": "A2",
      "variant": "ALL",
      "topic": "Objetos de Primera y Segunda Persona: Nech- y Metz-",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_47",
      "number": 47,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Futuro Simple en -s",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_48",
      "number": 48,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Pasado Imperfecto en -tuya / -katka",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_49",
      "number": 49,
      "level": "A2",
      "variant": "ALL",
      "topic": "Pronombres Demostrativos: Ini e Ino",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_a2_50",
      "number": 50,
      "level": "A2",
      "variant": "ALL",
      "topic": "Sustantivos Compuestos y Toponimia Salvadoreña",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ],
  "B1": [
    {
      "id": "nahuat_q_b1_01",
      "number": 1,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Causativos en -tia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_02",
      "number": 2,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Aplicativos en -lia",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_03",
      "number": 3,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Pretérito Pluscuamperfecto",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_04",
      "number": 4,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Voz Pasiva en -wa y -kalo",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_05",
      "number": 5,
      "level": "B1",
      "variant": "ALL",
      "topic": "Cláusulas Condicionales Reales con Tla",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_06",
      "number": 6,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Aspecto Durativo y Progresivo",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_07",
      "number": 7,
      "level": "B1",
      "variant": "ALL",
      "topic": "Oraciones Relativas con Katka y Ka",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_08",
      "number": 8,
      "level": "B1",
      "variant": "ALL",
      "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_09",
      "number": 9,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos de Dirección y Trayectoria",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_10",
      "number": 10,
      "level": "B1",
      "variant": "ALL",
      "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_11",
      "number": 11,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresión de Obligación y Necesidad: Muneki",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_12",
      "number": 12,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Lógicos y Discursivos",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_13",
      "number": 13,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Sistema Vigesimal hasta el 100",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_14",
      "number": 14,
      "level": "B1",
      "variant": "ALL",
      "topic": "Léxico de la Biodiversidad y Selva Costera",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_15",
      "number": 15,
      "level": "B1",
      "variant": "ALL",
      "topic": "Mitología y Cosmovisión Pipil: Nanawatzin",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_16",
      "number": 16,
      "level": "B1",
      "variant": "ALL",
      "topic": "Causatividad Doble y Morfología Derivada",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_17",
      "number": 17,
      "level": "B1",
      "variant": "ALL",
      "topic": "Discurso Reportado y Cita Indirecta",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_18",
      "number": 18,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Verbo Mati (Saber/Conocer/Sentir)",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_19",
      "number": 19,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresiones Idiomáticas y Modismos de Sonsonate",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_20",
      "number": 20,
      "level": "B1",
      "variant": "ALL",
      "topic": "Narración y Crónica Comunitaria en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_21",
      "number": 21,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Causativos en -tia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_22",
      "number": 22,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Aplicativos en -lia",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_23",
      "number": 23,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Pretérito Pluscuamperfecto",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_24",
      "number": 24,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Voz Pasiva en -wa y -kalo",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_25",
      "number": 25,
      "level": "B1",
      "variant": "ALL",
      "topic": "Cláusulas Condicionales Reales con Tla",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_26",
      "number": 26,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Aspecto Durativo y Progresivo",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_27",
      "number": 27,
      "level": "B1",
      "variant": "ALL",
      "topic": "Oraciones Relativas con Katka y Ka",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_28",
      "number": 28,
      "level": "B1",
      "variant": "ALL",
      "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_29",
      "number": 29,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos de Dirección y Trayectoria",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_30",
      "number": 30,
      "level": "B1",
      "variant": "ALL",
      "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_31",
      "number": 31,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresión de Obligación y Necesidad: Muneki",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_32",
      "number": 32,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Lógicos y Discursivos",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_33",
      "number": 33,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Sistema Vigesimal hasta el 100",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_34",
      "number": 34,
      "level": "B1",
      "variant": "ALL",
      "topic": "Léxico de la Biodiversidad y Selva Costera",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_35",
      "number": 35,
      "level": "B1",
      "variant": "ALL",
      "topic": "Mitología y Cosmovisión Pipil: Nanawatzin",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_36",
      "number": 36,
      "level": "B1",
      "variant": "ALL",
      "topic": "Causatividad Doble y Morfología Derivada",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_37",
      "number": 37,
      "level": "B1",
      "variant": "ALL",
      "topic": "Discurso Reportado y Cita Indirecta",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_38",
      "number": 38,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Verbo Mati (Saber/Conocer/Sentir)",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_39",
      "number": 39,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresiones Idiomáticas y Modismos de Sonsonate",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_40",
      "number": 40,
      "level": "B1",
      "variant": "ALL",
      "topic": "Narración y Crónica Comunitaria en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_41",
      "number": 41,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Causativos en -tia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_42",
      "number": 42,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos Aplicativos en -lia",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_43",
      "number": 43,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Pretérito Pluscuamperfecto",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_44",
      "number": 44,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Voz Pasiva en -wa y -kalo",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_45",
      "number": 45,
      "level": "B1",
      "variant": "ALL",
      "topic": "Cláusulas Condicionales Reales con Tla",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_46",
      "number": 46,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Aspecto Durativo y Progresivo",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_47",
      "number": 47,
      "level": "B1",
      "variant": "ALL",
      "topic": "Oraciones Relativas con Katka y Ka",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_48",
      "number": 48,
      "level": "B1",
      "variant": "ALL",
      "topic": "Sufijos Diminutivos y Afectivos: -tzin y -chin",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_49",
      "number": 49,
      "level": "B1",
      "variant": "ALL",
      "topic": "Verbos de Dirección y Trayectoria",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b1_50",
      "number": 50,
      "level": "B1",
      "variant": "ALL",
      "topic": "Los Cuatro Puntos Cardinales y Orientación Espacial",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ],
  "B2": [
    {
      "id": "nahuat_q_b2_01",
      "number": 1,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Modo Potencial y Condicional Irreal en -skia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_02",
      "number": 2,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_03",
      "number": 3,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sustantivos Incorporados en el Verbo",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_04",
      "number": 4,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Pretérito Habitual y Continuativo en -tia",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_05",
      "number": 5,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Voz Antipasiva en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_06",
      "number": 6,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos Colectivos y Plurales Complejos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_07",
      "number": 7,
      "level": "B2",
      "variant": "ALL",
      "topic": "Estructura de la Cláusula Subordinada Causal y Final",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_08",
      "number": 8,
      "level": "B2",
      "variant": "ALL",
      "topic": "Adverbios de Manera y Derivación Adverbial",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_09",
      "number": 9,
      "level": "B2",
      "variant": "ALL",
      "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_10",
      "number": 10,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_11",
      "number": 11,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Reduplicación Verbal Repetitiva e Intensiva",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_12",
      "number": 12,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Discurso Ritual y Sagrado: La Palabra Florida",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_13",
      "number": 13,
      "level": "B2",
      "variant": "ALL",
      "topic": "Concordancia Pronominal en Oraciones con Clíticos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_14",
      "number": 14,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Ciclo Agrícola del Maíz en la Tradición Pipil",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_15",
      "number": 15,
      "level": "B2",
      "variant": "ALL",
      "topic": "Toponimia y Geografía Histórica de El Salvador",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_16",
      "number": 16,
      "level": "B2",
      "variant": "ALL",
      "topic": "Metáforas Anatómicas y el Centro Emocional: Yulu",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_17",
      "number": 17,
      "level": "B2",
      "variant": "ALL",
      "topic": "Cláusulas Concesivas y Adversativas Avanzadas",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_18",
      "number": 18,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Arte del Tejido y Cerámica en Nahuizalco",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_19",
      "number": 19,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Transmisión Intergeneracional del Náhuat",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_20",
      "number": 20,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis de Textos Testimoniales de Hablantes Nativos",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_21",
      "number": 21,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Modo Potencial y Condicional Irreal en -skia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_22",
      "number": 22,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_23",
      "number": 23,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sustantivos Incorporados en el Verbo",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_24",
      "number": 24,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Pretérito Habitual y Continuativo en -tia",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_25",
      "number": 25,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Voz Antipasiva en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_26",
      "number": 26,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos Colectivos y Plurales Complejos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_27",
      "number": 27,
      "level": "B2",
      "variant": "ALL",
      "topic": "Estructura de la Cláusula Subordinada Causal y Final",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_28",
      "number": 28,
      "level": "B2",
      "variant": "ALL",
      "topic": "Adverbios de Manera y Derivación Adverbial",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_29",
      "number": 29,
      "level": "B2",
      "variant": "ALL",
      "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_30",
      "number": 30,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_31",
      "number": 31,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Reduplicación Verbal Repetitiva e Intensiva",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_32",
      "number": 32,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Discurso Ritual y Sagrado: La Palabra Florida",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_33",
      "number": 33,
      "level": "B2",
      "variant": "ALL",
      "topic": "Concordancia Pronominal en Oraciones con Clíticos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_34",
      "number": 34,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Ciclo Agrícola del Maíz en la Tradición Pipil",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_35",
      "number": 35,
      "level": "B2",
      "variant": "ALL",
      "topic": "Toponimia y Geografía Histórica de El Salvador",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_36",
      "number": 36,
      "level": "B2",
      "variant": "ALL",
      "topic": "Metáforas Anatómicas y el Centro Emocional: Yulu",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_37",
      "number": 37,
      "level": "B2",
      "variant": "ALL",
      "topic": "Cláusulas Concesivas y Adversativas Avanzadas",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_38",
      "number": 38,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Arte del Tejido y Cerámica en Nahuizalco",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_39",
      "number": 39,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Transmisión Intergeneracional del Náhuat",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_40",
      "number": 40,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis de Textos Testimoniales de Hablantes Nativos",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_41",
      "number": 41,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Modo Potencial y Condicional Irreal en -skia",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_42",
      "number": 42,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos de Lugar y Abundancia: -kan, -tan, -tlan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_43",
      "number": 43,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sustantivos Incorporados en el Verbo",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_44",
      "number": 44,
      "level": "B2",
      "variant": "ALL",
      "topic": "El Pretérito Habitual y Continuativo en -tia",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_45",
      "number": 45,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Voz Antipasiva en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_46",
      "number": 46,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sufijos Colectivos y Plurales Complejos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_47",
      "number": 47,
      "level": "B2",
      "variant": "ALL",
      "topic": "Estructura de la Cláusula Subordinada Causal y Final",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_48",
      "number": 48,
      "level": "B2",
      "variant": "ALL",
      "topic": "Adverbios de Manera y Derivación Adverbial",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_49",
      "number": 49,
      "level": "B2",
      "variant": "ALL",
      "topic": "Los Oficios Sagrados: Ne Tlayehyekani",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_b2_50",
      "number": 50,
      "level": "B2",
      "variant": "ALL",
      "topic": "Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ],
  "C1": [
    {
      "id": "nahuat_q_c1_01",
      "number": 1,
      "level": "C1",
      "variant": "ALL",
      "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_02",
      "number": 2,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_03",
      "number": 3,
      "level": "C1",
      "variant": "ALL",
      "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_04",
      "number": 4,
      "level": "C1",
      "variant": "ALL",
      "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_05",
      "number": 5,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Discurso Reverencial y Fórmulas de Respeto",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_06",
      "number": 6,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_07",
      "number": 7,
      "level": "C1",
      "variant": "ALL",
      "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_08",
      "number": 8,
      "level": "C1",
      "variant": "ALL",
      "topic": "Causatividad Indirecta y Factitiva",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_09",
      "number": 9,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_10",
      "number": 10,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sistemas de Parentesco Extendido Tradicional",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_11",
      "number": 11,
      "level": "C1",
      "variant": "ALL",
      "topic": "Estructuras de Pasiva Impersonal en la Leyenda Oral",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_12",
      "number": 12,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Metáfora Cosmológica en los Textos Rituales",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_13",
      "number": 13,
      "level": "C1",
      "variant": "ALL",
      "topic": "Partículas Discursivas Enclíticas y Modales",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_14",
      "number": 14,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Influencia del Náhuat en el Castellano Salvadoreño",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_15",
      "number": 15,
      "level": "C1",
      "variant": "ALL",
      "topic": "Composición de Discursos Formales en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_16",
      "number": 16,
      "level": "C1",
      "variant": "ALL",
      "topic": "Morfología de los Participios Pasivos y Activos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_17",
      "number": 17,
      "level": "C1",
      "variant": "ALL",
      "topic": "Análisis Morfosintáctico de Documentos Coloniales Pipiles",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_18",
      "number": 18,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Humor, la Ironía y el Doble Sentido en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_19",
      "number": 19,
      "level": "C1",
      "variant": "ALL",
      "topic": "Didáctica y Pedagogía del Náhuat para Salvadoreños",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_20",
      "number": 20,
      "level": "C1",
      "variant": "ALL",
      "topic": "Ensayo Filosófico y Defensa de la Lengua Materna",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_21",
      "number": 21,
      "level": "C1",
      "variant": "ALL",
      "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_22",
      "number": 22,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_23",
      "number": 23,
      "level": "C1",
      "variant": "ALL",
      "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_24",
      "number": 24,
      "level": "C1",
      "variant": "ALL",
      "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_25",
      "number": 25,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Discurso Reverencial y Fórmulas de Respeto",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_26",
      "number": 26,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_27",
      "number": 27,
      "level": "C1",
      "variant": "ALL",
      "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_28",
      "number": 28,
      "level": "C1",
      "variant": "ALL",
      "topic": "Causatividad Indirecta y Factitiva",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_29",
      "number": 29,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_30",
      "number": 30,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sistemas de Parentesco Extendido Tradicional",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_31",
      "number": 31,
      "level": "C1",
      "variant": "ALL",
      "topic": "Estructuras de Pasiva Impersonal en la Leyenda Oral",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_32",
      "number": 32,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Metáfora Cosmológica en los Textos Rituales",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_33",
      "number": 33,
      "level": "C1",
      "variant": "ALL",
      "topic": "Partículas Discursivas Enclíticas y Modales",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_34",
      "number": 34,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Influencia del Náhuat en el Castellano Salvadoreño",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_35",
      "number": 35,
      "level": "C1",
      "variant": "ALL",
      "topic": "Composición de Discursos Formales en Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_36",
      "number": 36,
      "level": "C1",
      "variant": "ALL",
      "topic": "Morfología de los Participios Pasivos y Activos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_37",
      "number": 37,
      "level": "C1",
      "variant": "ALL",
      "topic": "Análisis Morfosintáctico de Documentos Coloniales Pipiles",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_38",
      "number": 38,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Humor, la Ironía y el Doble Sentido en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_39",
      "number": 39,
      "level": "C1",
      "variant": "ALL",
      "topic": "Didáctica y Pedagogía del Náhuat para Salvadoreños",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_40",
      "number": 40,
      "level": "C1",
      "variant": "ALL",
      "topic": "Ensayo Filosófico y Defensa de la Lengua Materna",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_41",
      "number": 41,
      "level": "C1",
      "variant": "ALL",
      "topic": "Polisíntesis y Aglutinación Compleja en Textos Clásicos",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_42",
      "number": 42,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Subjuntivo Volitivo y Desiderativo con Ma",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_43",
      "number": 43,
      "level": "C1",
      "variant": "ALL",
      "topic": "Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_44",
      "number": 44,
      "level": "C1",
      "variant": "ALL",
      "topic": "Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_45",
      "number": 45,
      "level": "C1",
      "variant": "ALL",
      "topic": "El Discurso Reverencial y Fórmulas de Respeto",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_46",
      "number": 46,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de las Oraciones Hendidas y Focalización",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_47",
      "number": 47,
      "level": "C1",
      "variant": "ALL",
      "topic": "Semántica de las Raíces Uto-Aztecas en El Salvador",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_48",
      "number": 48,
      "level": "C1",
      "variant": "ALL",
      "topic": "Causatividad Indirecta y Factitiva",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_49",
      "number": 49,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Tradición Poética Náhuat: Cantos de Cuna y Arrullos",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c1_50",
      "number": 50,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sistemas de Parentesco Extendido Tradicional",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ],
  "C2": [
    {
      "id": "nahuat_q_c2_01",
      "number": 1,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_02",
      "number": 2,
      "level": "C2",
      "variant": "ALL",
      "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_03",
      "number": 3,
      "level": "C2",
      "variant": "ALL",
      "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_04",
      "number": 4,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_05",
      "number": 5,
      "level": "C2",
      "variant": "ALL",
      "topic": "Metodología de Documentación Lingüística de Campo",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_06",
      "number": 6,
      "level": "C2",
      "variant": "ALL",
      "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_07",
      "number": 7,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_08",
      "number": 8,
      "level": "C2",
      "variant": "ALL",
      "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_09",
      "number": 9,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_10",
      "number": 10,
      "level": "C2",
      "variant": "ALL",
      "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_11",
      "number": 11,
      "level": "C2",
      "variant": "ALL",
      "topic": "Retórica y Estilística de la Negociación Comunitaria",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_12",
      "number": 12,
      "level": "C2",
      "variant": "ALL",
      "topic": "Traducción Especializada: De la Constitución al Náhuat",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_13",
      "number": 13,
      "level": "C2",
      "variant": "ALL",
      "topic": "Toponimia y Geografía Sagrada de Cuscatlán",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_14",
      "number": 14,
      "level": "C2",
      "variant": "ALL",
      "topic": "Gramática Pedagógica Normativa del Náhuat Contemporáneo",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_15",
      "number": 15,
      "level": "C2",
      "variant": "ALL",
      "topic": "Semiótica de los Tejidos, Cerámica y Simbolismo Visual",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_16",
      "number": 16,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Medicina Indígena Tradicional y su Corpus Lingüístico",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_17",
      "number": 17,
      "level": "C2",
      "variant": "ALL",
      "topic": "Filosofía del Buen Vivir Pipil: Yejyek Nemilis",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_18",
      "number": 18,
      "level": "C2",
      "variant": "ALL",
      "topic": "El Teatro Comunitario y la Dramaturgia en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_19",
      "number": 19,
      "level": "C2",
      "variant": "ALL",
      "topic": "Derechos Lingüísticos y Marco Legal de los Pueblos Indígenas",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_20",
      "number": 20,
      "level": "C2",
      "variant": "ALL",
      "topic": "Discurso Magistral: El Porvenir Eterno del Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_21",
      "number": 21,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_22",
      "number": 22,
      "level": "C2",
      "variant": "ALL",
      "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_23",
      "number": 23,
      "level": "C2",
      "variant": "ALL",
      "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_24",
      "number": 24,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_25",
      "number": 25,
      "level": "C2",
      "variant": "ALL",
      "topic": "Metodología de Documentación Lingüística de Campo",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_26",
      "number": 26,
      "level": "C2",
      "variant": "ALL",
      "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_27",
      "number": 27,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_28",
      "number": 28,
      "level": "C2",
      "variant": "ALL",
      "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_29",
      "number": 29,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_30",
      "number": 30,
      "level": "C2",
      "variant": "ALL",
      "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_31",
      "number": 31,
      "level": "C2",
      "variant": "ALL",
      "topic": "Retórica y Estilística de la Negociación Comunitaria",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_32",
      "number": 32,
      "level": "C2",
      "variant": "ALL",
      "topic": "Traducción Especializada: De la Constitución al Náhuat",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_33",
      "number": 33,
      "level": "C2",
      "variant": "ALL",
      "topic": "Toponimia y Geografía Sagrada de Cuscatlán",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_34",
      "number": 34,
      "level": "C2",
      "variant": "ALL",
      "topic": "Gramática Pedagógica Normativa del Náhuat Contemporáneo",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_35",
      "number": 35,
      "level": "C2",
      "variant": "ALL",
      "topic": "Semiótica de los Tejidos, Cerámica y Simbolismo Visual",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_36",
      "number": 36,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Medicina Indígena Tradicional y su Corpus Lingüístico",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_37",
      "number": 37,
      "level": "C2",
      "variant": "ALL",
      "topic": "Filosofía del Buen Vivir Pipil: Yejyek Nemilis",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_38",
      "number": 38,
      "level": "C2",
      "variant": "ALL",
      "topic": "El Teatro Comunitario y la Dramaturgia en Náhuat",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_39",
      "number": 39,
      "level": "C2",
      "variant": "ALL",
      "topic": "Derechos Lingüísticos y Marco Legal de los Pueblos Indígenas",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_40",
      "number": 40,
      "level": "C2",
      "variant": "ALL",
      "topic": "Discurso Magistral: El Porvenir Eterno del Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_41",
      "number": 41,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría en Tradición Oral y Narrativa Épica Pipil",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_42",
      "number": 42,
      "level": "C2",
      "variant": "ALL",
      "topic": "Oratoria Sagrada y Plegarias Agrarias en Witzapan",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_43",
      "number": 43,
      "level": "C2",
      "variant": "ALL",
      "topic": "Sintaxis Arcaica y Conservación de Rasgos Precolombinos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_44",
      "number": 44,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermeneútica de los Cantos Nativos de Cuisnahuat",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_45",
      "number": 45,
      "level": "C2",
      "variant": "ALL",
      "topic": "Metodología de Documentación Lingüística de Campo",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_46",
      "number": 46,
      "level": "C2",
      "variant": "ALL",
      "topic": "Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica",
      "statement": "¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?",
      "options": [
        {
          "key": "A",
          "text": "ni- (ejemplo: ni-taketza = yo hablo)"
        },
        {
          "key": "B",
          "text": "ti- (segunda persona o primera plural)"
        },
        {
          "key": "C",
          "text": "shi- (modo imperativo)"
        },
        {
          "key": "D",
          "text": "ki- (prefijo de objeto transitivo)"
        }
      ],
      "correctAnswer": "A",
      "explanation": "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_47",
      "number": 47,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Resistencia Lingüística de 1932 y Memoria Histórica",
      "statement": "¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?",
      "options": [
        {
          "key": "A",
          "text": "Se duplica al final de la palabra"
        },
        {
          "key": "B",
          "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"
        },
        {
          "key": "C",
          "text": "Se transforma obligatoriamente en -ket"
        },
        {
          "key": "D",
          "text": "Permanece intacto sin sufrir modificación"
        }
      ],
      "correctAnswer": "B",
      "explanation": "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_48",
      "number": 48,
      "level": "C2",
      "variant": "ALL",
      "topic": "Reconstrucción Lexicográfica y Neologismos Tecnológicos",
      "statement": "¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?",
      "options": [
        {
          "key": "A",
          "text": "Yejyek tunal, nu-nanan"
        },
        {
          "key": "B",
          "text": "Yejyek tiutak, nu-kniw"
        },
        {
          "key": "C",
          "text": "Yejyek taywa, nu-tatan"
        },
        {
          "key": "D",
          "text": "Ashkan tunal, nu-ichpuk"
        }
      ],
      "correctAnswer": "A",
      "explanation": "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_49",
      "number": 49,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Fina y Pares Mínimos de Longitud Vocálica",
      "statement": "¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?",
      "options": [
        {
          "key": "A",
          "text": "Marca el tiempo pasado de la acción"
        },
        {
          "key": "B",
          "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"
        },
        {
          "key": "C",
          "text": "Indica una pregunta interrogativa"
        },
        {
          "key": "D",
          "text": "Convierte la oración en voz pasiva"
        }
      ],
      "correctAnswer": "B",
      "explanation": "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat.",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    },
    {
      "id": "nahuat_q_c2_50",
      "number": 50,
      "level": "C2",
      "variant": "ALL",
      "topic": "Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat",
      "statement": "En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?",
      "options": [
        {
          "key": "A",
          "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"
        },
        {
          "key": "B",
          "text": "'Persona que canta'"
        },
        {
          "key": "C",
          "text": "'Tiempo pasado'"
        },
        {
          "key": "D",
          "text": "'Color blanco brillante'"
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas).",
      "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
    }
  ]
};
