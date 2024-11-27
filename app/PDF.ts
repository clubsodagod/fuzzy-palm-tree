import { pdfjs } from 'react-pdf';
import path from 'node:path';
import fs from 'node:fs';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    '../node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.mjs');

fs.cpSync(pdfWorkerPath, './dist/pdf.worker.mjs', { recursive: true });