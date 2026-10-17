#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • MASTER MULTILINGUAL EXPANSION COMPILER
Genera la arquitectura y datos completos para los 6 idiomas solicitados:
1. Náhuat (Pipil de El Salvador)
2. Lenca (Potón de El Salvador)
3. Kakawira (Cacaopera de El Salvador)
4. Alemán (Deutsch)
5. Árabe (العربية)
6. Mandarín (普通话)

Para cada idioma:
- 120 clases (20 por nivel A1 a C2), cada una >= 500 palabras, explicadas desde el español de El Salvador.
- 300 preguntas de examen de selección múltiple (50 por nivel A1 a C2).
- Diccionario de verbos completo con conjugaciones/aspectos y traducción.
- Fundamentos (Abecedario/Escritura, Números y conversor en vivo, Colores e idioms, Objetos cotidianos con fonética).
- Vocabulario y Corpus por bandas de frecuencia.
- Guía de variantes dialectales y fuentes metodológicas salvadoreñas e internacionales.
"""

import os
import json
import re

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

def count_words(text):
    return len(re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ'-]+\b", text))

# =============================================================================
# DEFINICIONES GENERALES POR IDIOMA
# =============================================================================

LANGUAGES_CONFIG = {
    'nahuat': {
        'name': 'Náhuat (Pipil)',
        'nativeName': 'Nawat / Náhuat Pipil',
        'flag': '🇸🇻 🌿',
        'refSite': 'IRIN / MINED Cuna Náhuat de El Salvador',
        'ttsCode': 'es-SV',
        'originDesc': 'la lengua ancestral viva de las comunidades indígenas de Sonsonate y Ahuachapán (Witzapan, Cuisnahuat, Izalco, Nahuizalco)',
        'variants': [
            {'id': 'WITZ', 'name': 'Santo Domingo de Guzmán (Witzapan)', 'code': 'nawat-witz', 'flag': '🇸🇻', 'description': 'Variante viva con la mayor densidad de nawataketzani.'},
            {'id': 'CUIS', 'name': 'Cuisnahuat / Izalco', 'code': 'nawat-cuis', 'flag': '🌋', 'description': 'Variante conservadora de los pueblos de los Izalcos.'},
            {'id': 'ALL', 'name': 'Guía Unificada IRIN / MINED', 'code': 'nawat-all', 'flag': '🌿', 'description': 'Norma ortográfica estandarizada para la enseñanza nacional.'}
        ]
    },
    'lenca': {
        'name': 'Lenca (Potón)',
        'nativeName': 'Potón / Lenca Salvadoreño',
        'flag': '🏺 🌿',
        'refSite': 'Comunidad Indígena de Guatajiagua / UES / Consuelo Roque',
        'ttsCode': 'es-SV',
        'originDesc': 'la lengua ancestral de la zona oriental de El Salvador (Guatajiagua, Chilanga, Morazán, San Miguel)',
        'variants': [
            {'id': 'GUAT', 'name': 'Lenca de Guatajiagua', 'code': 'lenca-guat', 'flag': '🏺', 'description': 'Tradición comunitaria y alfarería negra de Morazán.'},
            {'id': 'CHIL', 'name': 'Lenca de Chilanga y Sensembra', 'code': 'lenca-chil', 'flag': '🌿', 'description': 'Variante histórica del norte de Morazán.'},
            {'id': 'ALL', 'name': 'Guía Integral Lenca Potón', 'code': 'lenca-all', 'flag': '🏺', 'description': 'Reconstrucción lingüística documentada por Walter Lehmann y Lyle Campbell.'}
        ]
    },
    'kakawira': {
        'name': 'Kakawira (Cacaopera)',
        'nativeName': 'Kakawira / Cacaopera',
        'flag': '🏹 🦅',
        'refSite': 'Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera',
        'ttsCode': 'es-SV',
        'originDesc': 'la lengua del pueblo originario de Cacaopera en Morazán (familia Misumalpa salvadoreña)',
        'variants': [
            {'id': 'CACA', 'name': 'Variante Tradicional Cacaopera', 'code': 'kaka-caca', 'flag': '🏹', 'description': 'Patrimonio de la Danza de los Emplumados y de los Negritos.'},
            {'id': 'MISU', 'name': 'Tronco Comparativo Misumalpa', 'code': 'kaka-misu', 'flag': '🦅', 'description': 'Raíces compartidas con el Matagalpa y Sumo.'},
            {'id': 'ALL', 'name': 'Guía General Kakawira', 'code': 'kaka-all', 'flag': '🇸🇻', 'description': 'Documentación lingüística integral de Cacaopera, Morazán.'}
        ]
    },
    'german': {
        'name': 'Alemán',
        'nativeName': 'Deutsch',
        'flag': '🇩🇪',
        'refSite': 'Goethe-Institut / Duden / Grammatik Aktiv',
        'ttsCode': 'de-DE',
        'originDesc': 'el idioma germánico oficial en Alemania, Austria, Suiza y Liechtenstein',
        'variants': [
            {'id': 'DE', 'name': 'Alemán Federal (Hochdeutsch)', 'code': 'de-DE', flag: '🇩🇪', 'description': 'Estándar oficial en Alemania.'},
            {'id': 'AT_CH', 'name': 'Alemán de Austria y Suiza', 'code': 'de-AT', flag: '🇦🇹', 'description': 'Variantes DACH con particularidades léxicas y fonéticas.'},
            {'id': 'ALL', 'name': 'Guía Contrastiva DACH', 'code': 'de-ALL', flag: '🌐', 'description': 'Análisis comparativo de la norma estándar alemana, austriaca y suiza.'}
        ]
    },
    'arabic': {
        'name': 'Árabe',
        'nativeName': 'العربية (Al-\'Arabiyya)',
        'flag': '🇸🇦 / 🇵🇸',
        'refSite': 'Al-Kitaab / Instituto Cervantes / Diáspora Palestina de El Salvador',
        'ttsCode': 'ar-SA',
        'originDesc': 'la lengua semítica del mundo árabe y de la histórica diáspora árabe-palestina de El Salvador',
        'variants': [
            {'id': 'FUSH', 'name': 'Árabe Estándar Moderno (Fus\'ha)', 'code': 'ar-FUSH', flag: '🇸🇦', 'description': 'Lengua formal, literaria, jurídica y de los medios de comunicación.'},
            {'id': 'SHAM', 'name': 'Árabe Levantino / Palestino', 'code': 'ar-SHAM', flag: '🇵🇸', 'description': 'Dialecto de origen de las familias salvadoreñas de Belén y Jerusalén.'},
            {'id': 'ALL', 'name': 'Guía Comparativa Fus\'ha vs Levantino', 'code': 'ar-ALL', flag: '🌐', 'description': 'Contraste entre el árabe formal y el dialecto coloquial.'}
        ]
    },
    'mandarin': {
        'name': 'Mandarín',
        'nativeName': '普通话 (Pǔtōnghuà) / 中文',
        'flag': '🇨🇳',
        'refSite': 'HSK Estándar Oficial / Hanban / Confucio UES',
        'ttsCode': 'zh-CN',
        'originDesc': 'la lengua oficial estándar de China continental, Taiwán y Singapur basada en el dialecto de Pekín',
        'variants': [
            {'id': 'SIMP', 'name': 'Caracteres Simplificados (简体字)', 'code': 'zh-Hans', flag: '🇨🇳', 'description': 'Sistema oficial de China continental y Singapur.'},
            {'id': 'TRAD', 'name': 'Caracteres Tradicionales (繁體字)', 'code': 'zh-Hant', flag: '🇹🇼', 'description': 'Sistema histórico conservado en Taiwán y Hong Kong.'},
            {'id': 'ALL', 'name': 'Guía Integral Pinyin y Caracteres', 'code': 'zh-ALL', flag: '🌐', 'description': 'Dominio completo de tonos, radicales, Pinyin y gramática analítica.'}
        ]
    }
}

print("Iniciando compilador universal de los 6 nuevos idiomas para KUSKAT...")
