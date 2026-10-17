import { LanguageQuestion, CEFRLevel } from './englishData';

export const MANDARIN_QUESTIONS_BANK: LanguageQuestion[] = [
  {
    "id": "mand_q_a1_01",
    "number": 1,
    "level": "A1",
    "variant": "ALL",
    "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
    "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_02",
    "number": 2,
    "level": "A1",
    "variant": "ALL",
    "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_03",
    "number": 3,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Despedidas y Cortesía Básica",
    "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_04",
    "number": 4,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales y el Plural con 们 (Men)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_05",
    "number": 5,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_06",
    "number": 6,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
    "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_07",
    "number": 7,
    "level": "A1",
    "variant": "ALL",
    "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_08",
    "number": 8,
    "level": "A1",
    "variant": "ALL",
    "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
    "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_09",
    "number": 9,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Familia y Términos de Parentesco",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_10",
    "number": 10,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_11",
    "number": 11,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Partícula Modificadora y Posesiva 的 (De)",
    "statement": "[A1 • La Partícula Modificadora y Posesiva 的 (De)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Modificadora y Posesiva 的 (De)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_12",
    "number": 12,
    "level": "A1",
    "variant": "ALL",
    "topic": "Demostrativos 这 (Zhè) y 那 (Nà) con Clasificadores",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_13",
    "number": 13,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos Fundamentales de la Vida Cotidiana: 吃, 喝, 看, 去, 买",
    "statement": "[A1 • Morfología Verbal A1] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_14",
    "number": 14,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Interrogativos: 什么 (Shénme), 谁 (Shéi), 哪儿 (Nǎr)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_15",
    "number": 15,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Tiempo: La Hora (点 Diǎn, 分 Fēn) y Momentos del Día",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_16",
    "number": 16,
    "level": "A1",
    "variant": "ALL",
    "topic": "Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)",
    "statement": "[A1 • Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_17",
    "number": 17,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos Modales de Deseo y Necesidad: 想 (Xiǎng) vs 要 (Yào)",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_18",
    "number": 18,
    "level": "A1",
    "variant": "ALL",
    "topic": "Expresar Ubicación y Existencia con 在 (Zài) y 有 (Yǒu)",
    "statement": "[A1 • Sintaxis Locativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_19",
    "number": 19,
    "level": "A1",
    "variant": "ALL",
    "topic": "Compras, Precios y la Moneda: 多少钱, 块 (Kuài) / 元 (Yuán)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_20",
    "number": 20,
    "level": "A1",
    "variant": "ALL",
    "topic": "Conversación Práctica Integrada de Nivel A1",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_21",
    "number": 21,
    "level": "A1",
    "variant": "ALL",
    "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
    "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_22",
    "number": 22,
    "level": "A1",
    "variant": "ALL",
    "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_23",
    "number": 23,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Despedidas y Cortesía Básica",
    "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_24",
    "number": 24,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales y el Plural con 们 (Men)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_25",
    "number": 25,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_26",
    "number": 26,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
    "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_27",
    "number": 27,
    "level": "A1",
    "variant": "ALL",
    "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_28",
    "number": 28,
    "level": "A1",
    "variant": "ALL",
    "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
    "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_29",
    "number": 29,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Familia y Términos de Parentesco",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_30",
    "number": 30,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_31",
    "number": 31,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Partícula Modificadora y Posesiva 的 (De)",
    "statement": "[A1 • La Partícula Modificadora y Posesiva 的 (De)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Modificadora y Posesiva 的 (De)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_32",
    "number": 32,
    "level": "A1",
    "variant": "ALL",
    "topic": "Demostrativos 这 (Zhè) y 那 (Nà) con Clasificadores",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_33",
    "number": 33,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos Fundamentales de la Vida Cotidiana: 吃, 喝, 看, 去, 买",
    "statement": "[A1 • Morfología Verbal A1] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_34",
    "number": 34,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Interrogativos: 什么 (Shénme), 谁 (Shéi), 哪儿 (Nǎr)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_35",
    "number": 35,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Tiempo: La Hora (点 Diǎn, 分 Fēn) y Momentos del Día",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_36",
    "number": 36,
    "level": "A1",
    "variant": "ALL",
    "topic": "Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)",
    "statement": "[A1 • Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_37",
    "number": 37,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verbos Modales de Deseo y Necesidad: 想 (Xiǎng) vs 要 (Yào)",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_38",
    "number": 38,
    "level": "A1",
    "variant": "ALL",
    "topic": "Expresar Ubicación y Existencia con 在 (Zài) y 有 (Yǒu)",
    "statement": "[A1 • Sintaxis Locativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_39",
    "number": 39,
    "level": "A1",
    "variant": "ALL",
    "topic": "Compras, Precios y la Moneda: 多少钱, 块 (Kuài) / 元 (Yuán)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_40",
    "number": 40,
    "level": "A1",
    "variant": "ALL",
    "topic": "Conversación Práctica Integrada de Nivel A1",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_41",
    "number": 41,
    "level": "A1",
    "variant": "ALL",
    "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
    "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_42",
    "number": 42,
    "level": "A1",
    "variant": "ALL",
    "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_43",
    "number": 43,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saludos, Despedidas y Cortesía Básica",
    "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_44",
    "number": 44,
    "level": "A1",
    "variant": "ALL",
    "topic": "Pronombres Personales y el Plural con 们 (Men)",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_45",
    "number": 45,
    "level": "A1",
    "variant": "ALL",
    "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_46",
    "number": 46,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
    "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_47",
    "number": 47,
    "level": "A1",
    "variant": "ALL",
    "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
    "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_48",
    "number": 48,
    "level": "A1",
    "variant": "ALL",
    "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
    "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_49",
    "number": 49,
    "level": "A1",
    "variant": "ALL",
    "topic": "La Familia y Términos de Parentesco",
    "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a1_50",
    "number": 50,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
    "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_01",
    "number": 1,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
    "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_02",
    "number": 2,
    "level": "A2",
    "variant": "ALL",
    "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_03",
    "number": 3,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
    "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_04",
    "number": 4,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_05",
    "number": 5,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_06",
    "number": 6,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
    "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_07",
    "number": 7,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_08",
    "number": 8,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
    "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_09",
    "number": 9,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_10",
    "number": 10,
    "level": "A2",
    "variant": "ALL",
    "topic": "Estructuras Comparativas con 比 (Bǐ)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_11",
    "number": 11,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)",
    "statement": "[A2 • Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_12",
    "number": 12,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verbos Modales de Habilidad y Permiso: 会, 能, 可以",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_13",
    "number": 13,
    "level": "A2",
    "variant": "ALL",
    "topic": "Preposiciones de Compañía y Destinatario: 跟 (Gēn) y 给 (Gěi)",
    "statement": "[A2 • Sintaxis Preposicional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_14",
    "number": 14,
    "level": "A2",
    "variant": "ALL",
    "topic": "Oraciones Causales con 因为...所以... (Yīnwèi... Suǒyǐ...)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_15",
    "number": 15,
    "level": "A2",
    "variant": "ALL",
    "topic": "Expresión de Futuro Próximo con 要...了 (Yào... Le) y 快要...了",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_16",
    "number": 16,
    "level": "A2",
    "variant": "ALL",
    "topic": "Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas",
    "statement": "[A2 • Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_17",
    "number": 17,
    "level": "A2",
    "variant": "ALL",
    "topic": "Prohibiciones e Imperativo Negativo con 别 (Bié) y 不要 (Bùyào)",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_18",
    "number": 18,
    "level": "A2",
    "variant": "ALL",
    "topic": "Transporte Urbano y Preguntar Direcciones",
    "statement": "[A2 • Movilidad y Ciudad] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_19",
    "number": 19,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Clima, la Salud y Citas con el Médico",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_20",
    "number": 20,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conversación Fluida A2: Una Cena en un Restaurante Chino",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_21",
    "number": 21,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
    "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_22",
    "number": 22,
    "level": "A2",
    "variant": "ALL",
    "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_23",
    "number": 23,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
    "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_24",
    "number": 24,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_25",
    "number": 25,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_26",
    "number": 26,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
    "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_27",
    "number": 27,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_28",
    "number": 28,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
    "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_29",
    "number": 29,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_30",
    "number": 30,
    "level": "A2",
    "variant": "ALL",
    "topic": "Estructuras Comparativas con 比 (Bǐ)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_31",
    "number": 31,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)",
    "statement": "[A2 • Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_32",
    "number": 32,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verbos Modales de Habilidad y Permiso: 会, 能, 可以",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_33",
    "number": 33,
    "level": "A2",
    "variant": "ALL",
    "topic": "Preposiciones de Compañía y Destinatario: 跟 (Gēn) y 给 (Gěi)",
    "statement": "[A2 • Sintaxis Preposicional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_34",
    "number": 34,
    "level": "A2",
    "variant": "ALL",
    "topic": "Oraciones Causales con 因为...所以... (Yīnwèi... Suǒyǐ...)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_35",
    "number": 35,
    "level": "A2",
    "variant": "ALL",
    "topic": "Expresión de Futuro Próximo con 要...了 (Yào... Le) y 快要...了",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_36",
    "number": 36,
    "level": "A2",
    "variant": "ALL",
    "topic": "Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas",
    "statement": "[A2 • Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_37",
    "number": 37,
    "level": "A2",
    "variant": "ALL",
    "topic": "Prohibiciones e Imperativo Negativo con 别 (Bié) y 不要 (Bùyào)",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_38",
    "number": 38,
    "level": "A2",
    "variant": "ALL",
    "topic": "Transporte Urbano y Preguntar Direcciones",
    "statement": "[A2 • Movilidad y Ciudad] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_39",
    "number": 39,
    "level": "A2",
    "variant": "ALL",
    "topic": "El Clima, la Salud y Citas con el Médico",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_40",
    "number": 40,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conversación Fluida A2: Una Cena en un Restaurante Chino",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_41",
    "number": 41,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
    "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_42",
    "number": 42,
    "level": "A2",
    "variant": "ALL",
    "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_43",
    "number": 43,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
    "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_44",
    "number": 44,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_45",
    "number": 45,
    "level": "A2",
    "variant": "ALL",
    "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_46",
    "number": 46,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
    "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_47",
    "number": 47,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
    "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_48",
    "number": 48,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
    "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_49",
    "number": 49,
    "level": "A2",
    "variant": "ALL",
    "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
    "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_a2_50",
    "number": 50,
    "level": "A2",
    "variant": "ALL",
    "topic": "Estructuras Comparativas con 比 (Bǐ)",
    "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_01",
    "number": 1,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Disposición con 把 (Bǎ)",
    "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_02",
    "number": 2,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_03",
    "number": 3,
    "level": "B1",
    "variant": "ALL",
    "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
    "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_04",
    "number": 4,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Construcción Enfática 是...的 (Shì... De)",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_05",
    "number": 5,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_06",
    "number": 6,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
    "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_07",
    "number": 7,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_08",
    "number": 8,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
    "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_09",
    "number": 9,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_10",
    "number": 10,
    "level": "B1",
    "variant": "ALL",
    "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_11",
    "number": 11,
    "level": "B1",
    "variant": "ALL",
    "topic": "Chengyu (Proverbios de Cuatro Caracteres) Fundamentales",
    "statement": "[B1 • Chengyu (Proverbios de Cuatro Caracteres) Fundamentales] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Chengyu (Proverbios de Cuatro Caracteres) Fundamentales' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_12",
    "number": 12,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Cultura del Té (茶文化) y Etiqueta de la Mesa en China",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_13",
    "number": 13,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Revolución Digital: WeChat (微信) y Pagos Móviles (Alipay)",
    "statement": "[B1 • Vida Contemporánea] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_14",
    "number": 14,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Sistema Educativo, el Examen Gaokao y el Espíritu Chīkǔ",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_15",
    "number": 15,
    "level": "B1",
    "variant": "ALL",
    "topic": "Preposiciones de Punto de Vista: 对...来说 (Duì... Láishuō)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_16",
    "number": 16,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...",
    "statement": "[B1 • Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_17",
    "number": 17,
    "level": "B1",
    "variant": "ALL",
    "topic": "Modismos Urbanos y Expresiones Coloquiales de Hoy",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_18",
    "number": 18,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Comunidad China en El Salvador: Raíces e Historia Compartida",
    "statement": "[B1 • Historia y Diáspora] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_19",
    "number": 19,
    "level": "B1",
    "variant": "ALL",
    "topic": "Redacción Formal: Correos Electrónicos Profesionales y Cartas",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_20",
    "number": 20,
    "level": "B1",
    "variant": "ALL",
    "topic": "Examen Simulador B1 (HSK 3/4): Comprensión y Expresión",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_21",
    "number": 21,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Disposición con 把 (Bǎ)",
    "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_22",
    "number": 22,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_23",
    "number": 23,
    "level": "B1",
    "variant": "ALL",
    "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
    "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_24",
    "number": 24,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Construcción Enfática 是...的 (Shì... De)",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_25",
    "number": 25,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_26",
    "number": 26,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
    "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_27",
    "number": 27,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_28",
    "number": 28,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
    "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_29",
    "number": 29,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_30",
    "number": 30,
    "level": "B1",
    "variant": "ALL",
    "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_31",
    "number": 31,
    "level": "B1",
    "variant": "ALL",
    "topic": "Chengyu (Proverbios de Cuatro Caracteres) Fundamentales",
    "statement": "[B1 • Chengyu (Proverbios de Cuatro Caracteres) Fundamentales] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Chengyu (Proverbios de Cuatro Caracteres) Fundamentales' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_32",
    "number": 32,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Cultura del Té (茶文化) y Etiqueta de la Mesa en China",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_33",
    "number": 33,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Revolución Digital: WeChat (微信) y Pagos Móviles (Alipay)",
    "statement": "[B1 • Vida Contemporánea] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_34",
    "number": 34,
    "level": "B1",
    "variant": "ALL",
    "topic": "El Sistema Educativo, el Examen Gaokao y el Espíritu Chīkǔ",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_35",
    "number": 35,
    "level": "B1",
    "variant": "ALL",
    "topic": "Preposiciones de Punto de Vista: 对...来说 (Duì... Láishuō)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_36",
    "number": 36,
    "level": "B1",
    "variant": "ALL",
    "topic": "Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...",
    "statement": "[B1 • Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_37",
    "number": 37,
    "level": "B1",
    "variant": "ALL",
    "topic": "Modismos Urbanos y Expresiones Coloquiales de Hoy",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_38",
    "number": 38,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Comunidad China en El Salvador: Raíces e Historia Compartida",
    "statement": "[B1 • Historia y Diáspora] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_39",
    "number": 39,
    "level": "B1",
    "variant": "ALL",
    "topic": "Redacción Formal: Correos Electrónicos Profesionales y Cartas",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_40",
    "number": 40,
    "level": "B1",
    "variant": "ALL",
    "topic": "Examen Simulador B1 (HSK 3/4): Comprensión y Expresión",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_41",
    "number": 41,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Disposición con 把 (Bǎ)",
    "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_42",
    "number": 42,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_43",
    "number": 43,
    "level": "B1",
    "variant": "ALL",
    "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
    "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_44",
    "number": 44,
    "level": "B1",
    "variant": "ALL",
    "topic": "La Construcción Enfática 是...的 (Shì... De)",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_45",
    "number": 45,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_46",
    "number": 46,
    "level": "B1",
    "variant": "ALL",
    "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
    "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_47",
    "number": 47,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
    "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_48",
    "number": 48,
    "level": "B1",
    "variant": "ALL",
    "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
    "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_49",
    "number": 49,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
    "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b1_50",
    "number": 50,
    "level": "B1",
    "variant": "ALL",
    "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
    "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_01",
    "number": 1,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
    "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_02",
    "number": 2,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_03",
    "number": 3,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
    "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_04",
    "number": 4,
    "level": "B2",
    "variant": "ALL",
    "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_05",
    "number": 5,
    "level": "B2",
    "variant": "ALL",
    "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_06",
    "number": 6,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
    "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_07",
    "number": 7,
    "level": "B2",
    "variant": "ALL",
    "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_08",
    "number": 8,
    "level": "B2",
    "variant": "ALL",
    "topic": "Chengyu Avanzados en Textos Argumentativos",
    "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_09",
    "number": 9,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_10",
    "number": 10,
    "level": "B2",
    "variant": "ALL",
    "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_11",
    "number": 11,
    "level": "B2",
    "variant": "ALL",
    "topic": "Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)",
    "statement": "[B2 • Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_12",
    "number": 12,
    "level": "B2",
    "variant": "ALL",
    "topic": "Partículas Discursivas de Matiz Lógico: 究竟, 反而, 既然",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_13",
    "number": 13,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Doble Negación como Herramienta Retórica de Énfasis",
    "statement": "[B2 • Retórica de Énfasis] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_14",
    "number": 14,
    "level": "B2",
    "variant": "ALL",
    "topic": "Expresión del Objeto Preposicional Escrito con 自, 由, 向",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_15",
    "number": 15,
    "level": "B2",
    "variant": "ALL",
    "topic": "Caracteres Tradicionales (繁体字) frente a Simplificados (简体字)",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_16",
    "number": 16,
    "level": "B2",
    "variant": "ALL",
    "topic": "Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)",
    "statement": "[B2 • Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_17",
    "number": 17,
    "level": "B2",
    "variant": "ALL",
    "topic": "Negociación Comercial y Relaciones Interpersonales (Guānxi 关系)",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_18",
    "number": 18,
    "level": "B2",
    "variant": "ALL",
    "topic": "Técnicas de Traducción Comercial Bilingüe Español - Chino",
    "statement": "[B2 • Traducción Especializada] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_19",
    "number": 19,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis Crítico de Medios Digitales Chinos y Titulares",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_20",
    "number": 20,
    "level": "B2",
    "variant": "ALL",
    "topic": "Examen Simulador B2 (HSK 4/5): Ensayo y Argumentación",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_21",
    "number": 21,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
    "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_22",
    "number": 22,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_23",
    "number": 23,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
    "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_24",
    "number": 24,
    "level": "B2",
    "variant": "ALL",
    "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_25",
    "number": 25,
    "level": "B2",
    "variant": "ALL",
    "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_26",
    "number": 26,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
    "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_27",
    "number": 27,
    "level": "B2",
    "variant": "ALL",
    "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_28",
    "number": 28,
    "level": "B2",
    "variant": "ALL",
    "topic": "Chengyu Avanzados en Textos Argumentativos",
    "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_29",
    "number": 29,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_30",
    "number": 30,
    "level": "B2",
    "variant": "ALL",
    "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_31",
    "number": 31,
    "level": "B2",
    "variant": "ALL",
    "topic": "Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)",
    "statement": "[B2 • Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_32",
    "number": 32,
    "level": "B2",
    "variant": "ALL",
    "topic": "Partículas Discursivas de Matiz Lógico: 究竟, 反而, 既然",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_33",
    "number": 33,
    "level": "B2",
    "variant": "ALL",
    "topic": "La Doble Negación como Herramienta Retórica de Énfasis",
    "statement": "[B2 • Retórica de Énfasis] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_34",
    "number": 34,
    "level": "B2",
    "variant": "ALL",
    "topic": "Expresión del Objeto Preposicional Escrito con 自, 由, 向",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_35",
    "number": 35,
    "level": "B2",
    "variant": "ALL",
    "topic": "Caracteres Tradicionales (繁体字) frente a Simplificados (简体字)",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_36",
    "number": 36,
    "level": "B2",
    "variant": "ALL",
    "topic": "Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)",
    "statement": "[B2 • Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_37",
    "number": 37,
    "level": "B2",
    "variant": "ALL",
    "topic": "Negociación Comercial y Relaciones Interpersonales (Guānxi 关系)",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_38",
    "number": 38,
    "level": "B2",
    "variant": "ALL",
    "topic": "Técnicas de Traducción Comercial Bilingüe Español - Chino",
    "statement": "[B2 • Traducción Especializada] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_39",
    "number": 39,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis Crítico de Medios Digitales Chinos y Titulares",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_40",
    "number": 40,
    "level": "B2",
    "variant": "ALL",
    "topic": "Examen Simulador B2 (HSK 4/5): Ensayo y Argumentación",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_41",
    "number": 41,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
    "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_42",
    "number": 42,
    "level": "B2",
    "variant": "ALL",
    "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_43",
    "number": 43,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
    "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_44",
    "number": 44,
    "level": "B2",
    "variant": "ALL",
    "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_45",
    "number": 45,
    "level": "B2",
    "variant": "ALL",
    "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_46",
    "number": 46,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
    "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_47",
    "number": 47,
    "level": "B2",
    "variant": "ALL",
    "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
    "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_48",
    "number": 48,
    "level": "B2",
    "variant": "ALL",
    "topic": "Chengyu Avanzados en Textos Argumentativos",
    "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_49",
    "number": 49,
    "level": "B2",
    "variant": "ALL",
    "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
    "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_b2_50",
    "number": 50,
    "level": "B2",
    "variant": "ALL",
    "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
    "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_01",
    "number": 1,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
    "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_02",
    "number": 2,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_03",
    "number": 3,
    "level": "C1",
    "variant": "ALL",
    "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
    "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_04",
    "number": 4,
    "level": "C1",
    "variant": "ALL",
    "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_05",
    "number": 5,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_06",
    "number": 6,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
    "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_07",
    "number": 7,
    "level": "C1",
    "variant": "ALL",
    "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_08",
    "number": 8,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
    "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_09",
    "number": 9,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_10",
    "number": 10,
    "level": "C1",
    "variant": "ALL",
    "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_11",
    "number": 11,
    "level": "C1",
    "variant": "ALL",
    "topic": "Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching",
    "statement": "[C1 • Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_12",
    "number": 12,
    "level": "C1",
    "variant": "ALL",
    "topic": "Técnicas Avanzadas de Interpretación Consecutiva Español - Chino",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_13",
    "number": 13,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sociolingüística: Política Lingüística del Putonghua y Dialectos",
    "statement": "[C1 • Sociolingüística] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_14",
    "number": 14,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Huella Histórica de la Inmigración China en El Salvador",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_15",
    "number": 15,
    "level": "C1",
    "variant": "ALL",
    "topic": "Retórica Superior: Paralelismos (Duìduì 对对) y Antítesis",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_16",
    "number": 16,
    "level": "C1",
    "variant": "ALL",
    "topic": "Crítica de Arte y Cine Chino Contemporáneo",
    "statement": "[C1 • Crítica de Arte y Cine Chino Contemporáneo] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Crítica de Arte y Cine Chino Contemporáneo' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_17",
    "number": 17,
    "level": "C1",
    "variant": "ALL",
    "topic": "Tratados Bilaterales de Inversión y Cooperación El Salvador - China",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_18",
    "number": 18,
    "level": "C1",
    "variant": "ALL",
    "topic": "Metodología de Redacción Académica para Revistas Científicas",
    "statement": "[C1 • Prosa Científica] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_19",
    "number": 19,
    "level": "C1",
    "variant": "ALL",
    "topic": "Modismos Metafóricos y Referencias Mitológicas en la Diplomacia",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_20",
    "number": 20,
    "level": "C1",
    "variant": "ALL",
    "topic": "Examen Simulador C1 (HSK 5/6): Análisis Crítico y Traducción Inversa",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_21",
    "number": 21,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
    "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_22",
    "number": 22,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_23",
    "number": 23,
    "level": "C1",
    "variant": "ALL",
    "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
    "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_24",
    "number": 24,
    "level": "C1",
    "variant": "ALL",
    "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_25",
    "number": 25,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_26",
    "number": 26,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
    "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_27",
    "number": 27,
    "level": "C1",
    "variant": "ALL",
    "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_28",
    "number": 28,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
    "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_29",
    "number": 29,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_30",
    "number": 30,
    "level": "C1",
    "variant": "ALL",
    "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_31",
    "number": 31,
    "level": "C1",
    "variant": "ALL",
    "topic": "Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching",
    "statement": "[C1 • Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_32",
    "number": 32,
    "level": "C1",
    "variant": "ALL",
    "topic": "Técnicas Avanzadas de Interpretación Consecutiva Español - Chino",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_33",
    "number": 33,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sociolingüística: Política Lingüística del Putonghua y Dialectos",
    "statement": "[C1 • Sociolingüística] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_34",
    "number": 34,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Huella Histórica de la Inmigración China en El Salvador",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_35",
    "number": 35,
    "level": "C1",
    "variant": "ALL",
    "topic": "Retórica Superior: Paralelismos (Duìduì 对对) y Antítesis",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_36",
    "number": 36,
    "level": "C1",
    "variant": "ALL",
    "topic": "Crítica de Arte y Cine Chino Contemporáneo",
    "statement": "[C1 • Crítica de Arte y Cine Chino Contemporáneo] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Crítica de Arte y Cine Chino Contemporáneo' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_37",
    "number": 37,
    "level": "C1",
    "variant": "ALL",
    "topic": "Tratados Bilaterales de Inversión y Cooperación El Salvador - China",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_38",
    "number": 38,
    "level": "C1",
    "variant": "ALL",
    "topic": "Metodología de Redacción Académica para Revistas Científicas",
    "statement": "[C1 • Prosa Científica] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_39",
    "number": 39,
    "level": "C1",
    "variant": "ALL",
    "topic": "Modismos Metafóricos y Referencias Mitológicas en la Diplomacia",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_40",
    "number": 40,
    "level": "C1",
    "variant": "ALL",
    "topic": "Examen Simulador C1 (HSK 5/6): Análisis Crítico y Traducción Inversa",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_41",
    "number": 41,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
    "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_42",
    "number": 42,
    "level": "C1",
    "variant": "ALL",
    "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_43",
    "number": 43,
    "level": "C1",
    "variant": "ALL",
    "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
    "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_44",
    "number": 44,
    "level": "C1",
    "variant": "ALL",
    "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_45",
    "number": 45,
    "level": "C1",
    "variant": "ALL",
    "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_46",
    "number": 46,
    "level": "C1",
    "variant": "ALL",
    "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
    "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_47",
    "number": 47,
    "level": "C1",
    "variant": "ALL",
    "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
    "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_48",
    "number": 48,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
    "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_49",
    "number": 49,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
    "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c1_50",
    "number": 50,
    "level": "C1",
    "variant": "ALL",
    "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
    "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_01",
    "number": 1,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
    "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_02",
    "number": 2,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_03",
    "number": 3,
    "level": "C2",
    "variant": "ALL",
    "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
    "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_04",
    "number": 4,
    "level": "C2",
    "variant": "ALL",
    "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_05",
    "number": 5,
    "level": "C2",
    "variant": "ALL",
    "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_06",
    "number": 6,
    "level": "C2",
    "variant": "ALL",
    "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
    "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_07",
    "number": 7,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_08",
    "number": 8,
    "level": "C2",
    "variant": "ALL",
    "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
    "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_09",
    "number": 9,
    "level": "C2",
    "variant": "ALL",
    "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_10",
    "number": 10,
    "level": "C2",
    "variant": "ALL",
    "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_11",
    "number": 11,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño",
    "statement": "[C2 • Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_12",
    "number": 12,
    "level": "C2",
    "variant": "ALL",
    "topic": "Negociación Diplomática Estratégica al Máximo Nivel en Pekín",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_13",
    "number": 13,
    "level": "C2",
    "variant": "ALL",
    "topic": "Lingüística de Corpus y Procesamiento de Lenguaje Natural (NLP)",
    "statement": "[C2 • Lingüística Computacional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_14",
    "number": 14,
    "level": "C2",
    "variant": "ALL",
    "topic": "Dialectología Sínica Profunda: Putonghua, Cantonés, Hakka y Minnan",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_15",
    "number": 15,
    "level": "C2",
    "variant": "ALL",
    "topic": "El Pensamiento Estratégico de 'El Arte de la Guerra' (Sūnzǐ Bǐngfǎ)",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_16",
    "number": 16,
    "level": "C2",
    "variant": "ALL",
    "topic": "Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)",
    "statement": "[C2 • Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_17",
    "number": 17,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Voz China en el Orden Multipolar: Análisis de Comunicados",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_18",
    "number": 18,
    "level": "C2",
    "variant": "ALL",
    "topic": "Memoria e Identidad: Testimonios Orales de la Inmigración China",
    "statement": "[C2 • Historia Oral] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_19",
    "number": 19,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Fusión Cultural Sino-Salvadoreña: Síntesis de Tradiciones",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_20",
    "number": 20,
    "level": "C2",
    "variant": "ALL",
    "topic": "Disertación Magistral C2: Presentación Académica y Defensa Final",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_21",
    "number": 21,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
    "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_22",
    "number": 22,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_23",
    "number": 23,
    "level": "C2",
    "variant": "ALL",
    "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
    "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_24",
    "number": 24,
    "level": "C2",
    "variant": "ALL",
    "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_25",
    "number": 25,
    "level": "C2",
    "variant": "ALL",
    "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_26",
    "number": 26,
    "level": "C2",
    "variant": "ALL",
    "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
    "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_27",
    "number": 27,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_28",
    "number": 28,
    "level": "C2",
    "variant": "ALL",
    "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
    "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_29",
    "number": 29,
    "level": "C2",
    "variant": "ALL",
    "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_30",
    "number": 30,
    "level": "C2",
    "variant": "ALL",
    "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_31",
    "number": 31,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño",
    "statement": "[C2 • Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_32",
    "number": 32,
    "level": "C2",
    "variant": "ALL",
    "topic": "Negociación Diplomática Estratégica al Máximo Nivel en Pekín",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_33",
    "number": 33,
    "level": "C2",
    "variant": "ALL",
    "topic": "Lingüística de Corpus y Procesamiento de Lenguaje Natural (NLP)",
    "statement": "[C2 • Lingüística Computacional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_34",
    "number": 34,
    "level": "C2",
    "variant": "ALL",
    "topic": "Dialectología Sínica Profunda: Putonghua, Cantonés, Hakka y Minnan",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_35",
    "number": 35,
    "level": "C2",
    "variant": "ALL",
    "topic": "El Pensamiento Estratégico de 'El Arte de la Guerra' (Sūnzǐ Bǐngfǎ)",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_36",
    "number": 36,
    "level": "C2",
    "variant": "ALL",
    "topic": "Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)",
    "statement": "[C2 • Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_37",
    "number": 37,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Voz China en el Orden Multipolar: Análisis de Comunicados",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_38",
    "number": 38,
    "level": "C2",
    "variant": "ALL",
    "topic": "Memoria e Identidad: Testimonios Orales de la Inmigración China",
    "statement": "[C2 • Historia Oral] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_39",
    "number": 39,
    "level": "C2",
    "variant": "ALL",
    "topic": "La Fusión Cultural Sino-Salvadoreña: Síntesis de Tradiciones",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_40",
    "number": 40,
    "level": "C2",
    "variant": "ALL",
    "topic": "Disertación Magistral C2: Presentación Académica y Defensa Final",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_41",
    "number": 41,
    "level": "C2",
    "variant": "ALL",
    "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
    "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_42",
    "number": 42,
    "level": "C2",
    "variant": "ALL",
    "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_43",
    "number": 43,
    "level": "C2",
    "variant": "ALL",
    "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
    "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_44",
    "number": 44,
    "level": "C2",
    "variant": "ALL",
    "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_45",
    "number": 45,
    "level": "C2",
    "variant": "ALL",
    "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_46",
    "number": 46,
    "level": "C2",
    "variant": "ALL",
    "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
    "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
    "options": [
      {
        "key": "A",
        "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
      },
      {
        "key": "B",
        "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
      },
      {
        "key": "C",
        "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
      },
      {
        "key": "D",
        "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_47",
    "number": 47,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
    "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
    "options": [
      {
        "key": "A",
        "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
      },
      {
        "key": "B",
        "text": "Porque el número dos nunca puede usarse con objetos inanimados."
      },
      {
        "key": "C",
        "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
      },
      {
        "key": "D",
        "text": "Porque los libros se cuentan únicamente de diez en diez."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_48",
    "number": 48,
    "level": "C2",
    "variant": "ALL",
    "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
    "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
    "options": [
      {
        "key": "A",
        "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
      },
      {
        "key": "B",
        "text": "Ambos caracteres se convierten en primer tono plano."
      },
      {
        "key": "C",
        "text": "El segundo carácter se vuelve silencioso."
      },
      {
        "key": "D",
        "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_49",
    "number": 49,
    "level": "C2",
    "variant": "ALL",
    "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
    "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
    "options": [
      {
        "key": "A",
        "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
      },
      {
        "key": "B",
        "text": "Wǒ shì hěn gāoxìng."
      },
      {
        "key": "C",
        "text": "Wǒ zài gāoxìng shì."
      },
      {
        "key": "D",
        "text": "Wǒ gāoxìng shì le."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  },
  {
    "id": "mand_q_c2_50",
    "number": 50,
    "level": "C2",
    "variant": "ALL",
    "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
    "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
      },
      {
        "key": "B",
        "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
      },
      {
        "key": "C",
        "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
      },
      {
        "key": "D",
        "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
    "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
  }
];

export const MANDARIN_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = {
  "A1": [
    {
      "id": "mand_q_a1_01",
      "number": 1,
      "level": "A1",
      "variant": "ALL",
      "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
      "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_02",
      "number": 2,
      "level": "A1",
      "variant": "ALL",
      "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_03",
      "number": 3,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Despedidas y Cortesía Básica",
      "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_04",
      "number": 4,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales y el Plural con 们 (Men)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_05",
      "number": 5,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_06",
      "number": 6,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
      "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_07",
      "number": 7,
      "level": "A1",
      "variant": "ALL",
      "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_08",
      "number": 8,
      "level": "A1",
      "variant": "ALL",
      "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
      "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_09",
      "number": 9,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Familia y Términos de Parentesco",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_10",
      "number": 10,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_11",
      "number": 11,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Partícula Modificadora y Posesiva 的 (De)",
      "statement": "[A1 • La Partícula Modificadora y Posesiva 的 (De)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Modificadora y Posesiva 的 (De)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_12",
      "number": 12,
      "level": "A1",
      "variant": "ALL",
      "topic": "Demostrativos 这 (Zhè) y 那 (Nà) con Clasificadores",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_13",
      "number": 13,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos Fundamentales de la Vida Cotidiana: 吃, 喝, 看, 去, 买",
      "statement": "[A1 • Morfología Verbal A1] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_14",
      "number": 14,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Interrogativos: 什么 (Shénme), 谁 (Shéi), 哪儿 (Nǎr)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_15",
      "number": 15,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Tiempo: La Hora (点 Diǎn, 分 Fēn) y Momentos del Día",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_16",
      "number": 16,
      "level": "A1",
      "variant": "ALL",
      "topic": "Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)",
      "statement": "[A1 • Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_17",
      "number": 17,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos Modales de Deseo y Necesidad: 想 (Xiǎng) vs 要 (Yào)",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_18",
      "number": 18,
      "level": "A1",
      "variant": "ALL",
      "topic": "Expresar Ubicación y Existencia con 在 (Zài) y 有 (Yǒu)",
      "statement": "[A1 • Sintaxis Locativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_19",
      "number": 19,
      "level": "A1",
      "variant": "ALL",
      "topic": "Compras, Precios y la Moneda: 多少钱, 块 (Kuài) / 元 (Yuán)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_20",
      "number": 20,
      "level": "A1",
      "variant": "ALL",
      "topic": "Conversación Práctica Integrada de Nivel A1",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_21",
      "number": 21,
      "level": "A1",
      "variant": "ALL",
      "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
      "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_22",
      "number": 22,
      "level": "A1",
      "variant": "ALL",
      "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_23",
      "number": 23,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Despedidas y Cortesía Básica",
      "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_24",
      "number": 24,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales y el Plural con 们 (Men)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_25",
      "number": 25,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_26",
      "number": 26,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
      "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_27",
      "number": 27,
      "level": "A1",
      "variant": "ALL",
      "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_28",
      "number": 28,
      "level": "A1",
      "variant": "ALL",
      "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
      "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_29",
      "number": 29,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Familia y Términos de Parentesco",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_30",
      "number": 30,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_31",
      "number": 31,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Partícula Modificadora y Posesiva 的 (De)",
      "statement": "[A1 • La Partícula Modificadora y Posesiva 的 (De)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Modificadora y Posesiva 的 (De)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_32",
      "number": 32,
      "level": "A1",
      "variant": "ALL",
      "topic": "Demostrativos 这 (Zhè) y 那 (Nà) con Clasificadores",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_33",
      "number": 33,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos Fundamentales de la Vida Cotidiana: 吃, 喝, 看, 去, 买",
      "statement": "[A1 • Morfología Verbal A1] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_34",
      "number": 34,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Interrogativos: 什么 (Shénme), 谁 (Shéi), 哪儿 (Nǎr)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_35",
      "number": 35,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Tiempo: La Hora (点 Diǎn, 分 Fēn) y Momentos del Día",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_36",
      "number": 36,
      "level": "A1",
      "variant": "ALL",
      "topic": "Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)",
      "statement": "[A1 • Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_37",
      "number": 37,
      "level": "A1",
      "variant": "ALL",
      "topic": "Verbos Modales de Deseo y Necesidad: 想 (Xiǎng) vs 要 (Yào)",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_38",
      "number": 38,
      "level": "A1",
      "variant": "ALL",
      "topic": "Expresar Ubicación y Existencia con 在 (Zài) y 有 (Yǒu)",
      "statement": "[A1 • Sintaxis Locativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_39",
      "number": 39,
      "level": "A1",
      "variant": "ALL",
      "topic": "Compras, Precios y la Moneda: 多少钱, 块 (Kuài) / 元 (Yuán)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_40",
      "number": 40,
      "level": "A1",
      "variant": "ALL",
      "topic": "Conversación Práctica Integrada de Nivel A1",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_41",
      "number": 41,
      "level": "A1",
      "variant": "ALL",
      "topic": "Fonética del Pinyin y los 4 Tonos (más Tono Neutro)",
      "statement": "[A1 • Fonética del Pinyin y los 4 Tonos (más Tono Neutro)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Fonética del Pinyin y los 4 Tonos (más Tono Neutro)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_42",
      "number": 42,
      "level": "A1",
      "variant": "ALL",
      "topic": "Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_43",
      "number": 43,
      "level": "A1",
      "variant": "ALL",
      "topic": "Saludos, Despedidas y Cortesía Básica",
      "statement": "[A1 • Pragmática y Saludos] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_44",
      "number": 44,
      "level": "A1",
      "variant": "ALL",
      "topic": "Pronombres Personales y el Plural con 们 (Men)",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_45",
      "number": 45,
      "level": "A1",
      "variant": "ALL",
      "topic": "El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_46",
      "number": 46,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)",
      "statement": "[A1 • La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_47",
      "number": 47,
      "level": "A1",
      "variant": "ALL",
      "topic": "Los Números del 0 al 100 y Caracteres Numéricos Básicos",
      "statement": "[A1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_48",
      "number": 48,
      "level": "A1",
      "variant": "ALL",
      "topic": "Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)",
      "statement": "[A1 • Morfosintaxis Nominal] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_49",
      "number": 49,
      "level": "A1",
      "variant": "ALL",
      "topic": "La Familia y Términos de Parentesco",
      "statement": "[A1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a1_50",
      "number": 50,
      "level": "A1",
      "variant": "ALL",
      "topic": "Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是",
      "statement": "[A1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ],
  "A2": [
    {
      "id": "mand_q_a2_01",
      "number": 1,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
      "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_02",
      "number": 2,
      "level": "A2",
      "variant": "ALL",
      "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_03",
      "number": 3,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
      "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_04",
      "number": 4,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_05",
      "number": 5,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_06",
      "number": 6,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
      "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_07",
      "number": 7,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_08",
      "number": 8,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
      "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_09",
      "number": 9,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_10",
      "number": 10,
      "level": "A2",
      "variant": "ALL",
      "topic": "Estructuras Comparativas con 比 (Bǐ)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_11",
      "number": 11,
      "level": "A2",
      "variant": "ALL",
      "topic": "Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)",
      "statement": "[A2 • Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_12",
      "number": 12,
      "level": "A2",
      "variant": "ALL",
      "topic": "Verbos Modales de Habilidad y Permiso: 会, 能, 可以",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_13",
      "number": 13,
      "level": "A2",
      "variant": "ALL",
      "topic": "Preposiciones de Compañía y Destinatario: 跟 (Gēn) y 给 (Gěi)",
      "statement": "[A2 • Sintaxis Preposicional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_14",
      "number": 14,
      "level": "A2",
      "variant": "ALL",
      "topic": "Oraciones Causales con 因为...所以... (Yīnwèi... Suǒyǐ...)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_15",
      "number": 15,
      "level": "A2",
      "variant": "ALL",
      "topic": "Expresión de Futuro Próximo con 要...了 (Yào... Le) y 快要...了",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_16",
      "number": 16,
      "level": "A2",
      "variant": "ALL",
      "topic": "Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas",
      "statement": "[A2 • Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_17",
      "number": 17,
      "level": "A2",
      "variant": "ALL",
      "topic": "Prohibiciones e Imperativo Negativo con 别 (Bié) y 不要 (Bùyào)",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_18",
      "number": 18,
      "level": "A2",
      "variant": "ALL",
      "topic": "Transporte Urbano y Preguntar Direcciones",
      "statement": "[A2 • Movilidad y Ciudad] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_19",
      "number": 19,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Clima, la Salud y Citas con el Médico",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_20",
      "number": 20,
      "level": "A2",
      "variant": "ALL",
      "topic": "Conversación Fluida A2: Una Cena en un Restaurante Chino",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_21",
      "number": 21,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
      "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_22",
      "number": 22,
      "level": "A2",
      "variant": "ALL",
      "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_23",
      "number": 23,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
      "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_24",
      "number": 24,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_25",
      "number": 25,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_26",
      "number": 26,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
      "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_27",
      "number": 27,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_28",
      "number": 28,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
      "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_29",
      "number": 29,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_30",
      "number": 30,
      "level": "A2",
      "variant": "ALL",
      "topic": "Estructuras Comparativas con 比 (Bǐ)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_31",
      "number": 31,
      "level": "A2",
      "variant": "ALL",
      "topic": "Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)",
      "statement": "[A2 • Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_32",
      "number": 32,
      "level": "A2",
      "variant": "ALL",
      "topic": "Verbos Modales de Habilidad y Permiso: 会, 能, 可以",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_33",
      "number": 33,
      "level": "A2",
      "variant": "ALL",
      "topic": "Preposiciones de Compañía y Destinatario: 跟 (Gēn) y 给 (Gěi)",
      "statement": "[A2 • Sintaxis Preposicional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_34",
      "number": 34,
      "level": "A2",
      "variant": "ALL",
      "topic": "Oraciones Causales con 因为...所以... (Yīnwèi... Suǒyǐ...)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_35",
      "number": 35,
      "level": "A2",
      "variant": "ALL",
      "topic": "Expresión de Futuro Próximo con 要...了 (Yào... Le) y 快要...了",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_36",
      "number": 36,
      "level": "A2",
      "variant": "ALL",
      "topic": "Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas",
      "statement": "[A2 • Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_37",
      "number": 37,
      "level": "A2",
      "variant": "ALL",
      "topic": "Prohibiciones e Imperativo Negativo con 别 (Bié) y 不要 (Bùyào)",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_38",
      "number": 38,
      "level": "A2",
      "variant": "ALL",
      "topic": "Transporte Urbano y Preguntar Direcciones",
      "statement": "[A2 • Movilidad y Ciudad] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_39",
      "number": 39,
      "level": "A2",
      "variant": "ALL",
      "topic": "El Clima, la Salud y Citas con el Médico",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_40",
      "number": 40,
      "level": "A2",
      "variant": "ALL",
      "topic": "Conversación Fluida A2: Una Cena en un Restaurante Chino",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_41",
      "number": 41,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto de Acción Completada 了 (Le Verbal)",
      "statement": "[A2 • La Partícula de Aspecto de Acción Completada 了 (Le Verbal)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Partícula de Aspecto de Acción Completada 了 (Le Verbal)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_42",
      "number": 42,
      "level": "A2",
      "variant": "ALL",
      "topic": "El 了 Modal / de Cambio de Situación al Final de Oración",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_43",
      "number": 43,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Aspecto Experiencial 过 (Guò)",
      "statement": "[A2 • Aspecto Verbal A2] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_44",
      "number": 44,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_45",
      "number": 45,
      "level": "A2",
      "variant": "ALL",
      "topic": "La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_46",
      "number": 46,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)",
      "statement": "[A2 • Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_47",
      "number": 47,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)",
      "statement": "[A2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_48",
      "number": 48,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Resultativos Básicos: 完, 好, 懂, 见",
      "statement": "[A2 • Sintaxis Resultativa] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_49",
      "number": 49,
      "level": "A2",
      "variant": "ALL",
      "topic": "Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)",
      "statement": "[A2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_a2_50",
      "number": 50,
      "level": "A2",
      "variant": "ALL",
      "topic": "Estructuras Comparativas con 比 (Bǐ)",
      "statement": "[A2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ],
  "B1": [
    {
      "id": "mand_q_b1_01",
      "number": 1,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Disposición con 把 (Bǎ)",
      "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_02",
      "number": 2,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_03",
      "number": 3,
      "level": "B1",
      "variant": "ALL",
      "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
      "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_04",
      "number": 4,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Construcción Enfática 是...的 (Shì... De)",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_05",
      "number": 5,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_06",
      "number": 6,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
      "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_07",
      "number": 7,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_08",
      "number": 8,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
      "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_09",
      "number": 9,
      "level": "B1",
      "variant": "ALL",
      "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_10",
      "number": 10,
      "level": "B1",
      "variant": "ALL",
      "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_11",
      "number": 11,
      "level": "B1",
      "variant": "ALL",
      "topic": "Chengyu (Proverbios de Cuatro Caracteres) Fundamentales",
      "statement": "[B1 • Chengyu (Proverbios de Cuatro Caracteres) Fundamentales] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Chengyu (Proverbios de Cuatro Caracteres) Fundamentales' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_12",
      "number": 12,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Cultura del Té (茶文化) y Etiqueta de la Mesa en China",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_13",
      "number": 13,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Revolución Digital: WeChat (微信) y Pagos Móviles (Alipay)",
      "statement": "[B1 • Vida Contemporánea] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_14",
      "number": 14,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Sistema Educativo, el Examen Gaokao y el Espíritu Chīkǔ",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_15",
      "number": 15,
      "level": "B1",
      "variant": "ALL",
      "topic": "Preposiciones de Punto de Vista: 对...来说 (Duì... Láishuō)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_16",
      "number": 16,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...",
      "statement": "[B1 • Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_17",
      "number": 17,
      "level": "B1",
      "variant": "ALL",
      "topic": "Modismos Urbanos y Expresiones Coloquiales de Hoy",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_18",
      "number": 18,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Comunidad China en El Salvador: Raíces e Historia Compartida",
      "statement": "[B1 • Historia y Diáspora] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_19",
      "number": 19,
      "level": "B1",
      "variant": "ALL",
      "topic": "Redacción Formal: Correos Electrónicos Profesionales y Cartas",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_20",
      "number": 20,
      "level": "B1",
      "variant": "ALL",
      "topic": "Examen Simulador B1 (HSK 3/4): Comprensión y Expresión",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_21",
      "number": 21,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Disposición con 把 (Bǎ)",
      "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_22",
      "number": 22,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_23",
      "number": 23,
      "level": "B1",
      "variant": "ALL",
      "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
      "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_24",
      "number": 24,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Construcción Enfática 是...的 (Shì... De)",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_25",
      "number": 25,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_26",
      "number": 26,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
      "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_27",
      "number": 27,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_28",
      "number": 28,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
      "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_29",
      "number": 29,
      "level": "B1",
      "variant": "ALL",
      "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_30",
      "number": 30,
      "level": "B1",
      "variant": "ALL",
      "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_31",
      "number": 31,
      "level": "B1",
      "variant": "ALL",
      "topic": "Chengyu (Proverbios de Cuatro Caracteres) Fundamentales",
      "statement": "[B1 • Chengyu (Proverbios de Cuatro Caracteres) Fundamentales] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Chengyu (Proverbios de Cuatro Caracteres) Fundamentales' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_32",
      "number": 32,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Cultura del Té (茶文化) y Etiqueta de la Mesa en China",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_33",
      "number": 33,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Revolución Digital: WeChat (微信) y Pagos Móviles (Alipay)",
      "statement": "[B1 • Vida Contemporánea] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_34",
      "number": 34,
      "level": "B1",
      "variant": "ALL",
      "topic": "El Sistema Educativo, el Examen Gaokao y el Espíritu Chīkǔ",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_35",
      "number": 35,
      "level": "B1",
      "variant": "ALL",
      "topic": "Preposiciones de Punto de Vista: 对...来说 (Duì... Láishuō)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_36",
      "number": 36,
      "level": "B1",
      "variant": "ALL",
      "topic": "Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...",
      "statement": "[B1 • Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_37",
      "number": 37,
      "level": "B1",
      "variant": "ALL",
      "topic": "Modismos Urbanos y Expresiones Coloquiales de Hoy",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_38",
      "number": 38,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Comunidad China en El Salvador: Raíces e Historia Compartida",
      "statement": "[B1 • Historia y Diáspora] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_39",
      "number": 39,
      "level": "B1",
      "variant": "ALL",
      "topic": "Redacción Formal: Correos Electrónicos Profesionales y Cartas",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_40",
      "number": 40,
      "level": "B1",
      "variant": "ALL",
      "topic": "Examen Simulador B1 (HSK 3/4): Comprensión y Expresión",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_41",
      "number": 41,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Disposición con 把 (Bǎ)",
      "statement": "[B1 • La Estructura de Disposición con 把 (Bǎ)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'La Estructura de Disposición con 把 (Bǎ)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_42",
      "number": 42,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Estructura de Voz Pasiva con 被 (Bèi)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_43",
      "number": 43,
      "level": "B1",
      "variant": "ALL",
      "topic": "Las Tres Partículas 'De' Estructurales: 的, 得, 地",
      "statement": "[B1 • Morfosintaxis Fina] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_44",
      "number": 44,
      "level": "B1",
      "variant": "ALL",
      "topic": "La Construcción Enfática 是...的 (Shì... De)",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_45",
      "number": 45,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_46",
      "number": 46,
      "level": "B1",
      "variant": "ALL",
      "topic": "Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)",
      "statement": "[B1 • Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_47",
      "number": 47,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)",
      "statement": "[B1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_48",
      "number": 48,
      "level": "B1",
      "variant": "ALL",
      "topic": "Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)",
      "statement": "[B1 • Oraciones Condicionales] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_49",
      "number": 49,
      "level": "B1",
      "variant": "ALL",
      "topic": "Reduplicación de Verbos y Adjetivos para Matiz Afectivo",
      "statement": "[B1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b1_50",
      "number": 50,
      "level": "B1",
      "variant": "ALL",
      "topic": "Preguntas Retóricas y Énfasis con 难道 (Nándào)",
      "statement": "[B1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ],
  "B2": [
    {
      "id": "mand_q_b2_01",
      "number": 1,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
      "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_02",
      "number": 2,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_03",
      "number": 3,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
      "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_04",
      "number": 4,
      "level": "B2",
      "variant": "ALL",
      "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_05",
      "number": 5,
      "level": "B2",
      "variant": "ALL",
      "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_06",
      "number": 6,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
      "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_07",
      "number": 7,
      "level": "B2",
      "variant": "ALL",
      "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_08",
      "number": 8,
      "level": "B2",
      "variant": "ALL",
      "topic": "Chengyu Avanzados en Textos Argumentativos",
      "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_09",
      "number": 9,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_10",
      "number": 10,
      "level": "B2",
      "variant": "ALL",
      "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_11",
      "number": 11,
      "level": "B2",
      "variant": "ALL",
      "topic": "Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)",
      "statement": "[B2 • Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_12",
      "number": 12,
      "level": "B2",
      "variant": "ALL",
      "topic": "Partículas Discursivas de Matiz Lógico: 究竟, 反而, 既然",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_13",
      "number": 13,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Doble Negación como Herramienta Retórica de Énfasis",
      "statement": "[B2 • Retórica de Énfasis] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_14",
      "number": 14,
      "level": "B2",
      "variant": "ALL",
      "topic": "Expresión del Objeto Preposicional Escrito con 自, 由, 向",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_15",
      "number": 15,
      "level": "B2",
      "variant": "ALL",
      "topic": "Caracteres Tradicionales (繁体字) frente a Simplificados (简体字)",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_16",
      "number": 16,
      "level": "B2",
      "variant": "ALL",
      "topic": "Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)",
      "statement": "[B2 • Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_17",
      "number": 17,
      "level": "B2",
      "variant": "ALL",
      "topic": "Negociación Comercial y Relaciones Interpersonales (Guānxi 关系)",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_18",
      "number": 18,
      "level": "B2",
      "variant": "ALL",
      "topic": "Técnicas de Traducción Comercial Bilingüe Español - Chino",
      "statement": "[B2 • Traducción Especializada] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_19",
      "number": 19,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis Crítico de Medios Digitales Chinos y Titulares",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_20",
      "number": 20,
      "level": "B2",
      "variant": "ALL",
      "topic": "Examen Simulador B2 (HSK 4/5): Ensayo y Argumentación",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_21",
      "number": 21,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
      "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_22",
      "number": 22,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_23",
      "number": 23,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
      "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_24",
      "number": 24,
      "level": "B2",
      "variant": "ALL",
      "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_25",
      "number": 25,
      "level": "B2",
      "variant": "ALL",
      "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_26",
      "number": 26,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
      "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_27",
      "number": 27,
      "level": "B2",
      "variant": "ALL",
      "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_28",
      "number": 28,
      "level": "B2",
      "variant": "ALL",
      "topic": "Chengyu Avanzados en Textos Argumentativos",
      "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_29",
      "number": 29,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_30",
      "number": 30,
      "level": "B2",
      "variant": "ALL",
      "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_31",
      "number": 31,
      "level": "B2",
      "variant": "ALL",
      "topic": "Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)",
      "statement": "[B2 • Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_32",
      "number": 32,
      "level": "B2",
      "variant": "ALL",
      "topic": "Partículas Discursivas de Matiz Lógico: 究竟, 反而, 既然",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_33",
      "number": 33,
      "level": "B2",
      "variant": "ALL",
      "topic": "La Doble Negación como Herramienta Retórica de Énfasis",
      "statement": "[B2 • Retórica de Énfasis] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_34",
      "number": 34,
      "level": "B2",
      "variant": "ALL",
      "topic": "Expresión del Objeto Preposicional Escrito con 自, 由, 向",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_35",
      "number": 35,
      "level": "B2",
      "variant": "ALL",
      "topic": "Caracteres Tradicionales (繁体字) frente a Simplificados (简体字)",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_36",
      "number": 36,
      "level": "B2",
      "variant": "ALL",
      "topic": "Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)",
      "statement": "[B2 • Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_37",
      "number": 37,
      "level": "B2",
      "variant": "ALL",
      "topic": "Negociación Comercial y Relaciones Interpersonales (Guānxi 关系)",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_38",
      "number": 38,
      "level": "B2",
      "variant": "ALL",
      "topic": "Técnicas de Traducción Comercial Bilingüe Español - Chino",
      "statement": "[B2 • Traducción Especializada] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_39",
      "number": 39,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis Crítico de Medios Digitales Chinos y Titulares",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_40",
      "number": 40,
      "level": "B2",
      "variant": "ALL",
      "topic": "Examen Simulador B2 (HSK 4/5): Ensayo y Argumentación",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_41",
      "number": 41,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Avanzados de 把 con Objetos Abstractos y Psicológicos",
      "statement": "[B2 • Usos Avanzados de 把 con Objetos Abstractos y Psicológicos] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Usos Avanzados de 把 con Objetos Abstractos y Psicológicos' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_42",
      "number": 42,
      "level": "B2",
      "variant": "ALL",
      "topic": "Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_43",
      "number": 43,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)",
      "statement": "[B2 • Cohesión Compleja] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_44",
      "number": 44,
      "level": "B2",
      "variant": "ALL",
      "topic": "Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_45",
      "number": 45,
      "level": "B2",
      "variant": "ALL",
      "topic": "Complementos Direccionales con Significado Figurado (出来, 起来, 下去)",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_46",
      "number": 46,
      "level": "B2",
      "variant": "ALL",
      "topic": "Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而",
      "statement": "[B2 • Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_47",
      "number": 47,
      "level": "B2",
      "variant": "ALL",
      "topic": "Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予",
      "statement": "[B2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_48",
      "number": 48,
      "level": "B2",
      "variant": "ALL",
      "topic": "Chengyu Avanzados en Textos Argumentativos",
      "statement": "[B2 • Retórica Superior] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_49",
      "number": 49,
      "level": "B2",
      "variant": "ALL",
      "topic": "Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB",
      "statement": "[B2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_b2_50",
      "number": 50,
      "level": "B2",
      "variant": "ALL",
      "topic": "Medio Ambiente, Transición Ecológica y Energías Limpias",
      "statement": "[B2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ],
  "C1": [
    {
      "id": "mand_q_c1_01",
      "number": 1,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
      "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_02",
      "number": 2,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_03",
      "number": 3,
      "level": "C1",
      "variant": "ALL",
      "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
      "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_04",
      "number": 4,
      "level": "C1",
      "variant": "ALL",
      "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_05",
      "number": 5,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_06",
      "number": 6,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
      "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_07",
      "number": 7,
      "level": "C1",
      "variant": "ALL",
      "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_08",
      "number": 8,
      "level": "C1",
      "variant": "ALL",
      "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
      "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_09",
      "number": 9,
      "level": "C1",
      "variant": "ALL",
      "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_10",
      "number": 10,
      "level": "C1",
      "variant": "ALL",
      "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_11",
      "number": 11,
      "level": "C1",
      "variant": "ALL",
      "topic": "Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching",
      "statement": "[C1 • Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_12",
      "number": 12,
      "level": "C1",
      "variant": "ALL",
      "topic": "Técnicas Avanzadas de Interpretación Consecutiva Español - Chino",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_13",
      "number": 13,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sociolingüística: Política Lingüística del Putonghua y Dialectos",
      "statement": "[C1 • Sociolingüística] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_14",
      "number": 14,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Huella Histórica de la Inmigración China en El Salvador",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_15",
      "number": 15,
      "level": "C1",
      "variant": "ALL",
      "topic": "Retórica Superior: Paralelismos (Duìduì 对对) y Antítesis",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_16",
      "number": 16,
      "level": "C1",
      "variant": "ALL",
      "topic": "Crítica de Arte y Cine Chino Contemporáneo",
      "statement": "[C1 • Crítica de Arte y Cine Chino Contemporáneo] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Crítica de Arte y Cine Chino Contemporáneo' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_17",
      "number": 17,
      "level": "C1",
      "variant": "ALL",
      "topic": "Tratados Bilaterales de Inversión y Cooperación El Salvador - China",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_18",
      "number": 18,
      "level": "C1",
      "variant": "ALL",
      "topic": "Metodología de Redacción Académica para Revistas Científicas",
      "statement": "[C1 • Prosa Científica] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_19",
      "number": 19,
      "level": "C1",
      "variant": "ALL",
      "topic": "Modismos Metafóricos y Referencias Mitológicas en la Diplomacia",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_20",
      "number": 20,
      "level": "C1",
      "variant": "ALL",
      "topic": "Examen Simulador C1 (HSK 5/6): Análisis Crítico y Traducción Inversa",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_21",
      "number": 21,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
      "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_22",
      "number": 22,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_23",
      "number": 23,
      "level": "C1",
      "variant": "ALL",
      "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
      "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_24",
      "number": 24,
      "level": "C1",
      "variant": "ALL",
      "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_25",
      "number": 25,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_26",
      "number": 26,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
      "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_27",
      "number": 27,
      "level": "C1",
      "variant": "ALL",
      "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_28",
      "number": 28,
      "level": "C1",
      "variant": "ALL",
      "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
      "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_29",
      "number": 29,
      "level": "C1",
      "variant": "ALL",
      "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_30",
      "number": 30,
      "level": "C1",
      "variant": "ALL",
      "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_31",
      "number": 31,
      "level": "C1",
      "variant": "ALL",
      "topic": "Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching",
      "statement": "[C1 • Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_32",
      "number": 32,
      "level": "C1",
      "variant": "ALL",
      "topic": "Técnicas Avanzadas de Interpretación Consecutiva Español - Chino",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_33",
      "number": 33,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sociolingüística: Política Lingüística del Putonghua y Dialectos",
      "statement": "[C1 • Sociolingüística] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_34",
      "number": 34,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Huella Histórica de la Inmigración China en El Salvador",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_35",
      "number": 35,
      "level": "C1",
      "variant": "ALL",
      "topic": "Retórica Superior: Paralelismos (Duìduì 对对) y Antítesis",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_36",
      "number": 36,
      "level": "C1",
      "variant": "ALL",
      "topic": "Crítica de Arte y Cine Chino Contemporáneo",
      "statement": "[C1 • Crítica de Arte y Cine Chino Contemporáneo] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Crítica de Arte y Cine Chino Contemporáneo' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_37",
      "number": 37,
      "level": "C1",
      "variant": "ALL",
      "topic": "Tratados Bilaterales de Inversión y Cooperación El Salvador - China",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_38",
      "number": 38,
      "level": "C1",
      "variant": "ALL",
      "topic": "Metodología de Redacción Académica para Revistas Científicas",
      "statement": "[C1 • Prosa Científica] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_39",
      "number": 39,
      "level": "C1",
      "variant": "ALL",
      "topic": "Modismos Metafóricos y Referencias Mitológicas en la Diplomacia",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_40",
      "number": 40,
      "level": "C1",
      "variant": "ALL",
      "topic": "Examen Simulador C1 (HSK 5/6): Análisis Crítico y Traducción Inversa",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_41",
      "number": 41,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna",
      "statement": "[C1 • Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_42",
      "number": 42,
      "level": "C1",
      "variant": "ALL",
      "topic": "La Partícula Multifuncional 之 (Zhī) en la Prosa Formal",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_43",
      "number": 43,
      "level": "C1",
      "variant": "ALL",
      "topic": "Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)",
      "statement": "[C1 • Morfosintaxis Arcaica Viva] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_44",
      "number": 44,
      "level": "C1",
      "variant": "ALL",
      "topic": "Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_45",
      "number": 45,
      "level": "C1",
      "variant": "ALL",
      "topic": "Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_46",
      "number": 46,
      "level": "C1",
      "variant": "ALL",
      "topic": "Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel",
      "statement": "[C1 • Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_47",
      "number": 47,
      "level": "C1",
      "variant": "ALL",
      "topic": "Análisis de Discursos Diplomáticos en la Asamblea General de la ONU",
      "statement": "[C1 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_48",
      "number": 48,
      "level": "C1",
      "variant": "ALL",
      "topic": "Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales",
      "statement": "[C1 • Registro Jurídico] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_49",
      "number": 49,
      "level": "C1",
      "variant": "ALL",
      "topic": "Mercados Financieros y Terminología de las Bolsas de Valores",
      "statement": "[C1 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c1_50",
      "number": 50,
      "level": "C1",
      "variant": "ALL",
      "topic": "Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)",
      "statement": "[C1 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ],
  "C2": [
    {
      "id": "mand_q_c2_01",
      "number": 1,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
      "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_02",
      "number": 2,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_03",
      "number": 3,
      "level": "C2",
      "variant": "ALL",
      "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
      "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_04",
      "number": 4,
      "level": "C2",
      "variant": "ALL",
      "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_05",
      "number": 5,
      "level": "C2",
      "variant": "ALL",
      "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_06",
      "number": 6,
      "level": "C2",
      "variant": "ALL",
      "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
      "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_07",
      "number": 7,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_08",
      "number": 8,
      "level": "C2",
      "variant": "ALL",
      "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
      "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_09",
      "number": 9,
      "level": "C2",
      "variant": "ALL",
      "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_10",
      "number": 10,
      "level": "C2",
      "variant": "ALL",
      "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_11",
      "number": 11,
      "level": "C2",
      "variant": "ALL",
      "topic": "Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño",
      "statement": "[C2 • Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_12",
      "number": 12,
      "level": "C2",
      "variant": "ALL",
      "topic": "Negociación Diplomática Estratégica al Máximo Nivel en Pekín",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_13",
      "number": 13,
      "level": "C2",
      "variant": "ALL",
      "topic": "Lingüística de Corpus y Procesamiento de Lenguaje Natural (NLP)",
      "statement": "[C2 • Lingüística Computacional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_14",
      "number": 14,
      "level": "C2",
      "variant": "ALL",
      "topic": "Dialectología Sínica Profunda: Putonghua, Cantonés, Hakka y Minnan",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_15",
      "number": 15,
      "level": "C2",
      "variant": "ALL",
      "topic": "El Pensamiento Estratégico de 'El Arte de la Guerra' (Sūnzǐ Bǐngfǎ)",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_16",
      "number": 16,
      "level": "C2",
      "variant": "ALL",
      "topic": "Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)",
      "statement": "[C2 • Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_17",
      "number": 17,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Voz China en el Orden Multipolar: Análisis de Comunicados",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_18",
      "number": 18,
      "level": "C2",
      "variant": "ALL",
      "topic": "Memoria e Identidad: Testimonios Orales de la Inmigración China",
      "statement": "[C2 • Historia Oral] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_19",
      "number": 19,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Fusión Cultural Sino-Salvadoreña: Síntesis de Tradiciones",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_20",
      "number": 20,
      "level": "C2",
      "variant": "ALL",
      "topic": "Disertación Magistral C2: Presentación Académica y Defensa Final",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_21",
      "number": 21,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
      "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_22",
      "number": 22,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_23",
      "number": 23,
      "level": "C2",
      "variant": "ALL",
      "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
      "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_24",
      "number": 24,
      "level": "C2",
      "variant": "ALL",
      "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_25",
      "number": 25,
      "level": "C2",
      "variant": "ALL",
      "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_26",
      "number": 26,
      "level": "C2",
      "variant": "ALL",
      "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
      "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_27",
      "number": 27,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_28",
      "number": 28,
      "level": "C2",
      "variant": "ALL",
      "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
      "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_29",
      "number": 29,
      "level": "C2",
      "variant": "ALL",
      "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_30",
      "number": 30,
      "level": "C2",
      "variant": "ALL",
      "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_31",
      "number": 31,
      "level": "C2",
      "variant": "ALL",
      "topic": "Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño",
      "statement": "[C2 • Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_32",
      "number": 32,
      "level": "C2",
      "variant": "ALL",
      "topic": "Negociación Diplomática Estratégica al Máximo Nivel en Pekín",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_33",
      "number": 33,
      "level": "C2",
      "variant": "ALL",
      "topic": "Lingüística de Corpus y Procesamiento de Lenguaje Natural (NLP)",
      "statement": "[C2 • Lingüística Computacional] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_34",
      "number": 34,
      "level": "C2",
      "variant": "ALL",
      "topic": "Dialectología Sínica Profunda: Putonghua, Cantonés, Hakka y Minnan",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_35",
      "number": 35,
      "level": "C2",
      "variant": "ALL",
      "topic": "El Pensamiento Estratégico de 'El Arte de la Guerra' (Sūnzǐ Bǐngfǎ)",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_36",
      "number": 36,
      "level": "C2",
      "variant": "ALL",
      "topic": "Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)",
      "statement": "[C2 • Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_37",
      "number": 37,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Voz China en el Orden Multipolar: Análisis de Comunicados",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_38",
      "number": 38,
      "level": "C2",
      "variant": "ALL",
      "topic": "Memoria e Identidad: Testimonios Orales de la Inmigración China",
      "statement": "[C2 • Historia Oral] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_39",
      "number": 39,
      "level": "C2",
      "variant": "ALL",
      "topic": "La Fusión Cultural Sino-Salvadoreña: Síntesis de Tradiciones",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_40",
      "number": 40,
      "level": "C2",
      "variant": "ALL",
      "topic": "Disertación Magistral C2: Presentación Académica y Defensa Final",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_41",
      "number": 41,
      "level": "C2",
      "variant": "ALL",
      "topic": "Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang",
      "statement": "[C2 • Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_42",
      "number": 42,
      "level": "C2",
      "variant": "ALL",
      "topic": "Fonología Histórica del Chino y Evolución de las Rimas Clásicas",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_43",
      "number": 43,
      "level": "C2",
      "variant": "ALL",
      "topic": "Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi",
      "statement": "[C2 • Grafémica Erudita] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_44",
      "number": 44,
      "level": "C2",
      "variant": "ALL",
      "topic": "Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_45",
      "number": 45,
      "level": "C2",
      "variant": "ALL",
      "topic": "Terminología Científica de Frontera: IA, Cuántica y Aeroespacial",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_46",
      "number": 46,
      "level": "C2",
      "variant": "ALL",
      "topic": "Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado",
      "statement": "[C2 • Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de 'Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado' en chino mandarín es la correcta?",
      "options": [
        {
          "key": "A",
          "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."
        },
        {
          "key": "B",
          "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."
        },
        {
          "key": "C",
          "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."
        },
        {
          "key": "D",
          "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."
        }
      ],
      "correctAnswer": "A",
      "explanation": "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_47",
      "number": 47,
      "level": "C2",
      "variant": "ALL",
      "topic": "Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos",
      "statement": "[C2 • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?",
      "options": [
        {
          "key": "A",
          "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."
        },
        {
          "key": "B",
          "text": "Porque el número dos nunca puede usarse con objetos inanimados."
        },
        {
          "key": "C",
          "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."
        },
        {
          "key": "D",
          "text": "Porque los libros se cuentan únicamente de diez en diez."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_48",
      "number": 48,
      "level": "C2",
      "variant": "ALL",
      "topic": "Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces",
      "statement": "[C2 • Paleografía China] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?",
      "options": [
        {
          "key": "A",
          "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."
        },
        {
          "key": "B",
          "text": "Ambos caracteres se convierten en primer tono plano."
        },
        {
          "key": "C",
          "text": "El segundo carácter se vuelve silencioso."
        },
        {
          "key": "D",
          "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."
        }
      ],
      "correctAnswer": "A",
      "explanation": "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_49",
      "number": 49,
      "level": "C2",
      "variant": "ALL",
      "topic": "Crítica Textual y Edición Filológica de Manuscritos Históricos",
      "statement": "[C2 • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?",
      "options": [
        {
          "key": "A",
          "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."
        },
        {
          "key": "B",
          "text": "Wǒ shì hěn gāoxìng."
        },
        {
          "key": "C",
          "text": "Wǒ zài gāoxìng shì."
        },
        {
          "key": "D",
          "text": "Wǒ gāoxìng shì le."
        }
      ],
      "correctAnswer": "A",
      "explanation": "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很).",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    },
    {
      "id": "mand_q_c2_50",
      "number": 50,
      "level": "C2",
      "variant": "ALL",
      "topic": "Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'",
      "statement": "[C2 • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?",
      "options": [
        {
          "key": "A",
          "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."
        },
        {
          "key": "B",
          "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."
        },
        {
          "key": "C",
          "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."
        },
        {
          "key": "D",
          "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."
        }
      ],
      "correctAnswer": "A",
      "explanation": "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín.",
      "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
    }
  ]
};
