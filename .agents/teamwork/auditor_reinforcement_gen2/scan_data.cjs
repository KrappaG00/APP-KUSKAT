const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const files = [
  'src/data/jovenesTalentoData.ts',
  'src/data/onePageSheetsData.ts',
  'src/data/oralLitigationData.ts',
  'src/data/constitucionalJurisprudenciaData.ts',
  'src/data/residentadoMedicoData.ts',
  'src/data/sigetSolarData.ts'
];

const patterns = [
  { name: 'Lorem Ipsum', regex: /lorem\s+ipsum/i },
  { name: 'Placeholder token', regex: /\[placeholder\]/i },
  { name: 'TODO/TBD/FIXME/XXX', regex: /\b(TODO|TBD|FIXME|XXX)\b/ },
  { name: 'Texto de relleno', regex: /texto\s+de\s+relleno/i },
  { name: 'Plantilla genérica', regex: /plantilla\s+gen[eé]rica/i },
  { name: 'Dummy token', regex: /\bdummy\b/i },
  { name: 'Fake project string', regex: /en\s+un\s+proyecto\s+acad[eé]mico\s+desarrollado\s+en/i }
];

let totalIssues = 0;
files.forEach((rel) => {
  const fullPath = path.join(rootDir, rel);
  const content = fs.readFileSync(fullPath, 'utf-8');
  let fileIssues = 0;
  patterns.forEach((p) => {
    const match = content.match(p.regex);
    if (match) {
      console.log(`FLAG: ${rel} matches pattern "${p.name}" -> match: "${match[0]}"`);
      fileIssues++;
      totalIssues++;
    }
  });
  const lines = content.split('\n').length;
  console.log(`AUDIT: ${rel} | Lines: ${lines} | Size: ${content.length} bytes | Issues: ${fileIssues}`);
});

console.log('--- SUMMARY ---');
console.log(`Total placeholder/filler issues detected: ${totalIssues}`);
