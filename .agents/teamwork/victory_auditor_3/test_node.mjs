import fs from 'node:fs';
import path from 'node:path';

// Load technicalCoursesData by reading TS file or transpile-free regex/parse
const dataFilePath = path.resolve('src/data/technicalCoursesData.ts');
const content = fs.readFileSync(dataFilePath, 'utf-8');

console.log('=== EMPIRICAL AUDIT OF technicalCoursesData.ts ===');
console.log('File size (bytes):', content.length);

// We can compile it on the fly with esbuild or tsx or dynamic import using tsx if installed,
// or we can test it using node with jiti/tsx or vitest or ts-node, or node script with regex / ast.
// Let's check if tsx is in node_modules or vite/vitest.
