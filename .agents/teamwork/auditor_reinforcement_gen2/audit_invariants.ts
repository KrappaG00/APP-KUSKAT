import fs from 'node:fs';
import path from 'node:path';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData';

console.log('=== PLATFORM INVARIANTS FORENSIC AUDIT ===');

const rootDir = process.cwd();

// 1. Base Question Bank in public/data/
const manifestPath = path.join(rootDir, 'public', 'data', 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  throw new Error('public/data/manifest.json does not exist!');
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
console.log(`Manifest declared total questions: ${manifest.totalQuestions}`);
if (manifest.totalQuestions !== 17640) {
  throw new Error(`Manifest total questions is ${manifest.totalQuestions}, expected 17640!`);
}

const institutions = [
  { name: 'UES', dir: path.join(rootDir, 'public', 'data', 'questions'), expected: 7500 },
  { name: 'ESCALAFON', dir: path.join(rootDir, 'public', 'data', 'escalafon', 'questions'), expected: 3300 },
  { name: 'AVANZO', dir: path.join(rootDir, 'public', 'data', 'avanzo', 'questions'), expected: 3000 },
  { name: 'ASD', dir: path.join(rootDir, 'public', 'data', 'asd', 'questions'), expected: 2190 },
  { name: 'ENA', dir: path.join(rootDir, 'public', 'data', 'ena', 'questions'), expected: 1400 },
  { name: 'ANSP', dir: path.join(rootDir, 'public', 'data', 'ansp', 'questions'), expected: 250 },
];

let diskGrandTotal = 0;
for (const inst of institutions) {
  if (!fs.existsSync(inst.dir)) {
    throw new Error(`Directory ${inst.dir} does not exist!`);
  }
  const files = fs.readdirSync(inst.dir).filter((f) => f.endsWith('.json') && f !== 'all.json');
  let instTotal = 0;
  for (const f of files) {
    const raw = fs.readFileSync(path.join(inst.dir, f), 'utf-8');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error(`File ${f} is not an array!`);
    }
    instTotal += parsed.length;
  }
  console.log(`Institution ${inst.name}: found ${instTotal} questions on disk (expected ${inst.expected})`);
  if (instTotal !== inst.expected) {
    throw new Error(`Institution ${inst.name} mismatch: found ${instTotal}, expected ${inst.expected}`);
  }
  diskGrandTotal += instTotal;
}
console.log(`Grand total questions verified on disk: ${diskGrandTotal} (expected 17640)`);
if (diskGrandTotal !== 17640) {
  throw new Error(`Disk grand total mismatch: ${diskGrandTotal}`);
}

// 2. Notary Questions: 200 questions not-01 to not-200
console.log('\n--- Notary Exam Invariant ---');
console.log(`NOTARY_EXAM_QUESTIONS count: ${NOTARY_EXAM_QUESTIONS.length}`);
if (NOTARY_EXAM_QUESTIONS.length !== 200) {
  throw new Error(`Notary questions count is ${NOTARY_EXAM_QUESTIONS.length}, expected 200!`);
}
const seenIds = new Set<string>();
for (let i = 1; i <= 200; i++) {
  const expectedId = i < 100 ? `not-${i.toString().padStart(2, '0')}` : `not-${i}`;
  const found = NOTARY_EXAM_QUESTIONS.find((q) => q.id === expectedId);
  if (!found) {
    throw new Error(`Missing expected Notary question ID: ${expectedId}`);
  }
  if (seenIds.has(expectedId)) {
    throw new Error(`Duplicate Notary question ID: ${expectedId}`);
  }
  seenIds.add(expectedId);
  if (!found.statement || found.statement.trim().length < 10) {
    throw new Error(`Notary question ${expectedId} has empty/short statement!`);
  }
  if (!found.options || found.options.length < 3) {
    throw new Error(`Notary question ${expectedId} has insufficient options!`);
  }
  if (!found.explanation || found.explanation.trim().length < 10) {
    throw new Error(`Notary question ${expectedId} has empty/short explanation!`);
  }
}
console.log('All 200 Notary questions verified authentic with IDs not-01 to not-200');

// 3. Private contact numbers: 0 in src/ and public/
console.log('\n--- Private Phone "7943 9901" Invariant ---');
const textExtensions = new Set(['.ts', '.tsx', '.json', '.js', '.mjs', '.html', '.css', '.md']);
const scanDirs = [path.join(rootDir, 'src'), path.join(rootDir, 'public')];
const leaks: string[] = [];

function walkDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (textExtensions.has(ext)) {
        const text = fs.readFileSync(full, 'utf-8');
        if (text.includes('7943 9901') || text.includes('79439901')) {
          leaks.push(path.relative(rootDir, full));
        }
      }
    }
  }
}
scanDirs.forEach(walkDir);
console.log(`Private phone occurrences found: ${leaks.length}`);
if (leaks.length > 0) {
  throw new Error(`Private phone "7943 9901" found in: ${leaks.join(', ')}`);
}

// 4. Official WhatsApp "+503 7657 4463"
console.log('\n--- Official WhatsApp "+503 7657 4463" Invariant ---');
const appContent = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf-8');
const navbarContent = fs.readFileSync(path.join(rootDir, 'src', 'components', 'HeaderNavbar.tsx'), 'utf-8');

if (!appContent.includes('+503 7657 4463')) {
  throw new Error('Official WhatsApp "+503 7657 4463" missing from src/App.tsx');
}
if (!navbarContent.includes('+503 7657 4463')) {
  throw new Error('Official WhatsApp "+503 7657 4463" missing from src/components/HeaderNavbar.tsx');
}
console.log('Official WhatsApp "+503 7657 4463" preserved in App.tsx and HeaderNavbar.tsx');

console.log('\n=== ALL PLATFORM INVARIANTS CERTIFIED CLEAN ===');
