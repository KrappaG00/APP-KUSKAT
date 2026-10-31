const fs = require('fs');
const path = require('path');

console.log('=== KUSKAT FORENSIC AUDITOR INDEPENDENT SCAN ===');

const results = {
  driverLicense: {},
  patrioticHistory: {},
  languages: {},
  adSense: {},
  platformInvariants: {}
};

// --- HELPER FUNCTIONS ---
function countWords(str) {
  if (!str) return 0;
  const clean = str
    .replace(/^#{1,6}\s+.*$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[*_~[\]()]/g, ' ')
    .replace(/[^\w\sáéíóúüñÁÉÍÓÚÜÑ]/g, ' ')
    .trim();
  return clean.split(/\s+/).filter(w => w.length > 0).length;
}

// 1. PLATFORM INVARIANTS SCAN
console.log('\n--- 1. PLATFORM INVARIANTS SCAN ---');
const forbiddenPhones = ['7943 9901', '79439901'];
const forbiddenPaywall = ['stripe', 'paypal', 'mercadopago', 'paywall', 'subscription-tier'];

function scanDirForPatterns(dir, patterns, fileExts = ['.ts', '.tsx', '.js', '.jsx', '.html', '.json']) {
  const matches = [];
  function recurse(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
          recurse(full);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (fileExts.includes(ext)) {
          const content = fs.readFileSync(full, 'utf8');
          for (const p of patterns) {
            if (content.toLowerCase().includes(p.toLowerCase())) {
              matches.push({ file: full, pattern: p });
            }
          }
        }
      }
    }
  }
  recurse(dir);
  return matches;
}

const phoneMatchesSrc = scanDirForPatterns('src', forbiddenPhones);
const phoneMatchesPublic = scanDirForPatterns('public', forbiddenPhones);
const phoneMatchesHtml = scanDirForPatterns('.', forbiddenPhones, ['.html']);
const allPhoneMatches = [...phoneMatchesSrc, ...phoneMatchesPublic, ...phoneMatchesHtml];

console.log('Private phone number matches in src/, public/, index.html:', allPhoneMatches.length);
results.platformInvariants.phoneViolations = allPhoneMatches.length;

const paywallMatchesSrc = scanDirForPatterns('src', forbiddenPaywall);
console.log('Paywall / payment gateway matches in src/:', paywallMatchesSrc.length);
results.platformInvariants.paywallViolations = paywallMatchesSrc.length;

// Prohibited synthetic tokens
const syntheticTokens = ['lenca_word_', 'kaka_root_', 'piltzin-194', 'at-197', 'lorem ipsum'];
const syntheticMatches = scanDirForPatterns('src/data', syntheticTokens);
console.log('Synthetic placeholder tokens in src/data:', syntheticMatches.length);
results.platformInvariants.syntheticTokens = syntheticMatches.length;

// 2. DRIVER LICENSE SCAN
console.log('\n--- 2. DRIVER LICENSE CURRICULUM & CASES SCAN ---');
const curriculumContent = fs.readFileSync('src/data/driverLicense/curriculum.ts', 'utf8');

// Extract substantiveTheory strings
const unitTheoryMatches = [...curriculumContent.matchAll(/id:\s*['"](u\d-[^'"]+)['"][\s\S]*?substantiveTheory:\s*`([\s\S]*?)`,\s*practicalCases:/g)];
console.log('Driver Units extracted:', unitTheoryMatches.length);
const driverUnitsReport = [];
unitTheoryMatches.forEach(m => {
  const unitId = m[1];
  const words = countWords(m[2]);
  driverUnitsReport.push({ unitId, words, pass: words >= 500 });
  console.log(`  ${unitId}: ${words} words (Pass: ${words >= 500})`);
});
results.driverLicense.units = driverUnitsReport;

// Extract practical cases
const caseMatches = [...curriculumContent.matchAll(/id:\s*['"](tc-u\d-c\d)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?scenario:\s*['"]([^'"]+)['"][\s\S]*?legalReference:\s*['"]([^'"]+)['"][\s\S]*?analysis:\s*['"]([^'"]+)['"][\s\S]*?resolvedOutcome:\s*['"]([^'"]+)['"]/g)];
console.log('Practical Traffic Cases extracted:', caseMatches.length);
const scenariosSet = new Set();
const titlesSet = new Set();
caseMatches.forEach(m => {
  scenariosSet.add(m[3]);
  titlesSet.add(m[2]);
});
console.log('Unique Scenarios:', scenariosSet.size, '/ 40');
console.log('Unique Titles:', titlesSet.size, '/ 40');
results.driverLicense.totalCases = caseMatches.length;
results.driverLicense.uniqueScenarios = scenariosSet.size;

// Questions count
const questionsContent = fs.readFileSync('src/data/driverLicense/questions.ts', 'utf8');
const driverQMatches = [...questionsContent.matchAll(/id:\s*['"](vmt-q\d+)['"]/g)];
console.log('Driver License Questions extracted:', driverQMatches.length);
results.driverLicense.totalQuestions = driverQMatches.length;

// Signs count
const signsContent = fs.readFileSync('src/data/driverLicense/signs.ts', 'utf8');
const signMatches = [...signsContent.matchAll(/id:\s*['"](sign-[^'"]+)['"]/g)];
console.log('Official Road Signs extracted:', signMatches.length);
results.driverLicense.totalSigns = signMatches.length;

// 3. PATRIOTIC HISTORY SCAN
console.log('\n--- 3. PATRIOTIC HISTORY SCAN ---');
const historyFiles = [
  'unit1PrecolombinoData.ts',
  'unit2IndependenciaData.ts',
  'unit3RepublicaModernaData.ts',
  'unit4SimbolosValoresData.ts',
  'unit5PatrimonioLiteraturaData.ts'
];
const historyUnitsReport = [];
let totalHistoryCases = 0;
const historyScenariosSet = new Set();
const historyTitlesSet = new Set();

historyFiles.forEach(f => {
  const content = fs.readFileSync(path.join('src/data/patrioticHistory', f), 'utf8');
  const theoryMatch = content.match(/substantiveAnalysis:\s*`([\s\S]*?)`,\s*keyMilestones:/);
  const words = theoryMatch ? countWords(theoryMatch[1]) : 0;
  historyUnitsReport.push({ file: f, words, pass: words >= 500 });
  console.log(`  ${f}: ${words} substantive words (Pass: ${words >= 500})`);

  const casesInFile = [...content.matchAll(/id:\s*['"](case-[^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?historicalContext:\s*['"]([^'"]+)['"][\s\S]*?dilemmaOrIssue:\s*['"]([^'"]+)['"][\s\S]*?historiographicalAnalysis:\s*['"]([^'"]+)['"][\s\S]*?civicSignificance:\s*['"]([^'"]+)['"]/g)];
  totalHistoryCases += casesInFile.length;
  casesInFile.forEach(c => {
    historyScenariosSet.add(c[3]);
    historyTitlesSet.add(c[2]);
  });
});
console.log('Total Patriotic History Cases:', totalHistoryCases);
console.log('Unique Historical Contexts:', historyScenariosSet.size, '/ 25');
console.log('Unique Case Titles:', historyTitlesSet.size, '/ 25');
results.patrioticHistory.units = historyUnitsReport;
results.patrioticHistory.totalCases = totalHistoryCases;
results.patrioticHistory.uniqueCases = historyScenariosSet.size;

const historyQContent = fs.readFileSync('src/data/patrioticHistory/patrioticQuestionsData.ts', 'utf8');
const historyQMatches = [...historyQContent.matchAll(/id:\s*['"](hpq-\d+)['"]/g)];
console.log('Patriotic History Questions extracted:', historyQMatches.length);
results.patrioticHistory.totalQuestions = historyQMatches.length;

// 4. LANGUAGES SCAN
console.log('\n--- 4. LOW-RESOURCE & INDIGENOUS LANGUAGES SCAN ---');
const vocabFiles = {
  nahuat: 'nahuatVocabularyData.ts',
  lenca: 'lencaVocabularyData.ts',
  kakawira: 'kakawiraVocabularyData.ts',
  mandarin: 'mandarinVocabularyData.ts',
  arabic: 'arabicVocabularyData.ts'
};

const vocabCounts = {};
for (const [lang, file] of Object.entries(vocabFiles)) {
  const content = fs.readFileSync(path.join('src/data/languages', file), 'utf8');
  const wordEntries = [...content.matchAll(/id:\s*['"]([a-z]+_[a-z0-9_]+)['"]/g)];
  vocabCounts[lang] = wordEntries.length;
  console.log(`  ${lang} vocabulary entries: ${wordEntries.length}`);
}
results.languages.vocabCounts = vocabCounts;

const commFiles = {
  nahuat: 'nahuatCommunicativeData.ts',
  lenca: 'lencaCommunicativeData.ts',
  kakawira: 'kakawiraCommunicativeData.ts',
  mandarin: 'mandarinCommunicativeData.ts',
  arabic: 'arabicCommunicativeData.ts'
};

let totalDialogues = 0;
const uniqueDialogueScenarios = new Set();
const commGuidesReport = [];
const dialoguesPerLanguage = {};

for (const [lang, file] of Object.entries(commFiles)) {
  const content = fs.readFileSync(path.join('src/data/languages', file), 'utf8');
  const guideMatches = [...content.matchAll(/substantiveGuide:\s*`([\s\S]*?)`,\s*solvedDialogues:/g)];
  guideMatches.forEach((m, idx) => {
    const words = countWords(m[1]);
    commGuidesReport.push({ lang, unit: idx + 1, words, pass: words >= 500 });
    console.log(`  ${lang} Unit ${idx + 1} Guide: ${words} words (Pass: ${words >= 500})`);
  });

  // Match dialogue objects (handle scenario or context)
  const dialMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?(?:scenario|context):\s*['"]([^'"]+)['"]/g)];
  // Filter only dialogue ids (starting with nah_d, len_d, kaka-dial, zh-dial, ar-dial)
  const validDials = dialMatches.filter(d => /^(nah_d|len_d|kaka-dial|zh-dial|ar-dial)/.test(d[1]));
  dialoguesPerLanguage[lang] = validDials.length;
  totalDialogues += validDials.length;
  validDials.forEach(d => uniqueDialogueScenarios.add(d[2]));
  console.log(`  ${lang} dialogues count: ${validDials.length}`);
}
console.log('Total Solved Dialogues:', totalDialogues, '/ 125');
console.log('Unique Dialogue Scenarios/Contexts:', uniqueDialogueScenarios.size, '/ 125');
results.languages.totalDialogues = totalDialogues;
results.languages.uniqueDialogues = uniqueDialogueScenarios.size;
results.languages.dialoguesPerLanguage = dialoguesPerLanguage;
results.languages.commGuides = commGuidesReport;

// 5. ADSENSE & STATIC HTML SCAN
console.log('\n--- 5. ADSENSE & STATIC HTML SCAN ---');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Word count in <div id="root">
const rootStart = indexHtml.indexOf('<div id="root">') + '<div id="root">'.length;
const rootEnd = indexHtml.lastIndexOf('</div>');
const rootHtml = indexHtml.substring(rootStart, rootEnd);
const rootWords = countWords(rootHtml);
console.log('Words in <div id="root">: ', rootWords, '(Requirement: > 3,500)');
results.adSense.rootWords = rootWords;
results.adSense.rootWordsPass = rootWords > 3500;

// JSON-LD validation
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
let jsonLdParsed = false;
let jsonLdEntities = 0;
if (jsonLdMatch) {
  try {
    const data = JSON.parse(jsonLdMatch[1]);
    jsonLdParsed = true;
    jsonLdEntities = data['@graph'] ? data['@graph'].length : 1;
    console.log('JSON-LD parsed successfully! Entities in @graph:', jsonLdEntities);
  } catch (err) {
    console.error('JSON-LD parse error:', err.message);
  }
}
results.adSense.jsonLdValid = jsonLdParsed;
results.adSense.jsonLdEntities = jsonLdEntities;

// ads.txt check
const adsTxt = fs.readFileSync('public/ads.txt', 'utf8');
const hasPub1 = adsTxt.includes('pub-4241045160320459');
const hasPub2 = adsTxt.includes('pub-5120531548842494');
console.log('ads.txt has pub-4241045160320459:', hasPub1);
console.log('ads.txt has pub-5120531548842494:', hasPub2);
results.adSense.adsTxtValid = hasPub1 && hasPub2;

// Output summary
console.log('\n=== FORENSIC SCAN RESULTS SUMMARY ===');
console.log(JSON.stringify(results, null, 2));
