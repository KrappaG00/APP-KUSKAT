import fs from 'node:fs';
import path from 'node:path';

// Let's inspect nahuat_comm_02
import { NAHUAT_COMMUNICATIVE_UNITS } from '../src/data/languages/nahuatCommunicativeData.ts';
import { countSubstantiveWordsStrict } from '../tests/sparseModulesAndAdCompliance.test.ts';

const u2 = NAHUAT_COMMUNICATIVE_UNITS.find(u => u.id === 'nahuat_comm_02');
console.log('Unit 2 Title:', u2.title);
console.log('Plain words (split by whitespace):', u2.substantiveGuide.trim().split(/\s+/).filter(Boolean).length);

const m5Count = countSubstantiveWordsStrict(u2.substantiveGuide, [u2.title]);
console.log('countSubstantiveWordsStrict (M5 suite):', m5Count);

// Now let's see what extractUltraStrictWords did:
// 1. Remove non-alpha
let s = u2.substantiveGuide;
s = s.replace(/<[^>]*>/g, ' ');
s = s.replace(/```[\s\S]*?```/g, ' ');
s = s.replace(/`[^`]*`/g, ' ');
s = s.replace(/\$\$[\s\S]*?\$\$/g, ' ');
s = s.replace(/\$[^$]*\$/g, ' ');
s = s.replace(/\\[a-zA-Z]+/g, ' ');
s = s.replace(/^#{1,6}\s+.*$/gm, ' ');
s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');
s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
s = s.replace(/[*_~`]/g, ' ');

// Deduplicate identical paragraphs
const paragraphs = s.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0);
const seenPara = new Set();
const uniqueParas = [];
for (const p of paragraphs) {
  const norm = p.toLowerCase().replace(/\s+/g, ' ');
  if (!seenPara.has(norm)) {
    seenPara.add(norm);
    uniqueParas.push(p);
  }
}

const cleaned = uniqueParas.join(' ').replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\u0600-\u06FF\u4E00-\u9FFF]/g, ' ');
const rawTokens = cleaned.split(/\s+/).filter(t => t.length > 0);
const tokensGte2 = rawTokens.filter(t => t.length >= 2);
const singleCharTokens = rawTokens.filter(t => t.length === 1);

console.log('rawTokens length:', rawTokens.length);
console.log('tokensGte2 length:', tokensGte2.length);
console.log('singleCharTokens count:', singleCharTokens.length, 'Tokens:', singleCharTokens);
