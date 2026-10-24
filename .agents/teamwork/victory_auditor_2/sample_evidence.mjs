import { ADMIN_LAW_QUESTIONS } from '../../../src/data/derechoAdministrativoData.js';
import { SALUD_PRIMARIA_QUESTIONS } from '../../../src/data/saludPrimariaData.js';
import { INGENIERIA_QUESTIONS } from '../../../src/data/ingenieriaCienciasData.js';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData.js';
import { CSSP_QUESTIONS_DATA } from '../../../src/data/csspHealthData.js';
import { ANSP_ASCENSO_QUESTIONS } from '../../../src/data/anspAscensoData.js';
import { COMPLIANCE_QUESTIONS } from '../../../src/data/complianceAmlData.js';

console.log('Sample Admin Law:', ADMIN_LAW_QUESTIONS[0].id, ADMIN_LAW_QUESTIONS[0].statement.slice(0, 100), 'Legal:', ADMIN_LAW_QUESTIONS[0].legalBasis);
console.log('Sample Salud:', SALUD_PRIMARIA_QUESTIONS[0].id, SALUD_PRIMARIA_QUESTIONS[0].statement.slice(0, 100), 'Ref:', SALUD_PRIMARIA_QUESTIONS[0].officialGuidelineRef);
console.log('Sample Ingenieria:', INGENIERIA_QUESTIONS[0].id, INGENIERIA_QUESTIONS[0].problemStatement.slice(0, 100));
console.log('Sample Notary:', NOTARY_EXAM_QUESTIONS[0].id, NOTARY_EXAM_QUESTIONS[0].statement.slice(0, 100), 'Legal:', NOTARY_EXAM_QUESTIONS[0].legalBasis);
console.log('Sample CSSP:', CSSP_QUESTIONS_DATA[0].id, CSSP_QUESTIONS_DATA[0].statement.slice(0, 100), 'Legal:', CSSP_QUESTIONS_DATA[0].legalBasis);
console.log('Sample ANSP:', ANSP_ASCENSO_QUESTIONS[0].id, ANSP_ASCENSO_QUESTIONS[0].statement.slice(0, 100), 'Legal:', ANSP_ASCENSO_QUESTIONS[0].legalBasis);
console.log('Sample Compliance:', COMPLIANCE_QUESTIONS[0].id, COMPLIANCE_QUESTIONS[0].statement.slice(0, 100), 'Legal:', COMPLIANCE_QUESTIONS[0].legalBasis);
