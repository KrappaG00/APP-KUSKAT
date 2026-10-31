const fs = require('fs');
const path = require('path');

// 1. Verificar curriculum.ts
const currPath = path.resolve('src/data/driverLicense/curriculum.ts');
const currContent = fs.readFileSync(currPath, 'utf8');

const b = String.fromCharCode(96);
const units = currContent.split("id: 'u").slice(1);
console.log('--- CURRICULUM VERIFICATION ---');
console.log('Total Units:', units.length);

let totalCases = 0;
let minWords = 999999;
units.forEach((u, i) => {
  const marker = 'substantiveTheory: ' + b;
  const start = u.indexOf(marker) + marker.length;
  const end = u.indexOf(b + ',', start);
  const text = u.substring(start, end);
  const words = text.trim().split(/[ \n\r\t]+/).filter(w => w.length > 0).length;
  const cases = (u.split("id: 'tc-u").length - 1);
  totalCases += cases;
  if (words < minWords) minWords = words;
  console.log(`Unit ${i + 1}: ${words} substantive words | ${cases} cases`);
  if (words < 550) {
    throw new Error(`Unit ${i + 1} has ${words} words, which is under the 550 requirement!`);
  }
  if (cases < 5) {
    throw new Error(`Unit ${i + 1} has ${cases} cases, which is under the 5 requirement!`);
  }
});
console.log('Total Cases:', totalCases);
console.log('Min substantive words in any unit:', minWords);

// 2. Verificar questions.ts
console.log('\n--- QUESTIONS VERIFICATION ---');
const qPath = path.resolve('src/data/driverLicense/questions.ts');
const qContent = fs.readFileSync(qPath, 'utf8');
const qCount = (qContent.match(/id:\s*'vmt-q\d+'/g) || []).length;
console.log('Total Questions:', qCount);
if (qCount < 50) throw new Error(`Only ${qCount} questions found, need 50+!`);

const aCount = (qContent.match(/correctKey:\s*'A'/g) || []).length;
const bCount = (qContent.match(/correctKey:\s*'B'/g) || []).length;
const cCount = (qContent.match(/correctKey:\s*'C'/g) || []).length;
const dCount = (qContent.match(/correctKey:\s*'D'/g) || []).length;
console.log(`Option Balance: A=${aCount}, B=${bCount}, C=${cCount}, D=${dCount}`);

// 3. Verificar signs.ts
console.log('\n--- SIGNS VERIFICATION ---');
const sPath = path.resolve('src/data/driverLicense/signs.ts');
const sContent = fs.readFileSync(sPath, 'utf8');
const sCount = (sContent.match(/id:\s*'sign-[rpi]\d+'/g) || []).length;
console.log('Total Signs:', sCount);
if (sCount < 24) throw new Error(`Only ${sCount} signs found, need 24+!`);

const regl = (sContent.match(/category:\s*'reglamentaria'/g) || []).length;
const prev = (sContent.match(/category:\s*'preventiva'/g) || []).length;
const info = (sContent.match(/category:\s*'informativa'/g) || []).length;
console.log(`Sign Categories: Reglamentarias=${regl}, Preventivas=${prev}, Informativas=${info}`);

// 4. Verificar DriverLicenseView.tsx
console.log('\n--- VIEW INTEGRATION VERIFICATION ---');
const viewPath = path.resolve('src/components/DriverLicenseView.tsx');
const viewContent = fs.readFileSync(viewPath, 'utf8');

const imports = [
  'DRIVER_CURRICULUM_UNITS',
  'DRIVER_QUESTIONS',
  'OFFICIAL_ROAD_SIGNS',
  'generateOfficialVmtExam',
  'getAllPracticalTrafficCases',
];
imports.forEach(imp => {
  if (!viewContent.includes(imp)) {
    throw new Error(`DriverLicenseView missing import of ${imp}!`);
  }
});

const exportStatements = [
  'export { DRIVER_QUESTIONS, OFFICIAL_ROAD_SIGNS }',
  'export const DriverLicenseView',
  'export default DriverLicenseView',
];
exportStatements.forEach(exp => {
  if (!viewContent.includes(exp)) {
    throw new Error(`DriverLicenseView missing export of ${exp}!`);
  }
});

console.log('DriverLicenseView integrates all data and maintains backward-compatible exports!');
console.log('\n>>> ALL AUDIT & INTEGRITY CHECKS PASSED PERFECTLY! <<<');
