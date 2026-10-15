import fs from 'fs';

const p = 'public/data/questions/1.7.json';
const a = JSON.parse(fs.readFileSync(p, 'utf8'));

a[248].statement = 'Costo \\(C(x)=2x+500\\), venta a \\$5. Ingreso \\(I(x)\\):';
a[260].statement = 'Salario \\(S(x)=300+0.1x\\) con ventas \\$5000:';

fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n');
console.log('Fixed 1.7.json math balance');
