import './style.css'
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';
// confetti();
// import { lodash } from 'lodash-es';
// console.log(lodash.chunk(crypto.getRandomValues(new Uint8Array(10))), 2);

// import { loadPyodide } from 'https://pyodide-cdn2.iodide.io/pyodide/dev/full/pyodide.mjs'; // development
import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.mjs"; // this work
// import { loadPyodide } from 'https://cdn.skypack.dev/pyodide@latest/full/pyodide.mjs';    // production
// import { loadPyodide } from "pyodide/pyodide.ts"; //🐛 Bugs free
// console.log(loadPyodide);

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <h1>Pyodide is loading...</h1>
`;
const pyodide = await loadPyodide();
app.innerHTML = `
  <h1>Pyodide version ${pyodide.version} is loaded!</h1>
`;

app.innerHTML = `
  <h1>Python version ${pyodide.runPython(`import sys; sys.version`)} is ready</h1>
`;

await pyodide.loadPackage(['numpy', 'matplotlib']);
const req = await fetch('./src/utils.py');
const pyScript = await req.text();
console.log(pyScript);
const svg_string = await pyodide.runPython(pyScript);
app.innerHTML = svg_string;


// app.innerHTML = `
//   <h1>Hello Python ${out}!</h1>
//   <a href="https://pyodide.org" target="_blank">Pyodide
//   Pyodide is a Python distribution for the browser and Node.js based on WebAssembly.</a>
// `;