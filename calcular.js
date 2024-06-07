// Tema 12: Unidades de concentración
// Este script resuelve ejercicios relacionados con las unidades químicas y físicas mencionadas a continuación:
// - %m/m
// - %m/v
// - %v/v
// - Partes por millón (ppm)
// - Molaridad (M)
// - Normalidad (N)
// - Fracción molar (x)

// Función para calcular porcentaje masa-masa (%m/m)
function porcentajeMasaMasa(solutoMasa, solucionMas) {
  return (solutoMasa / solucionMasa) * 100;
}

// Función para calcular porcentaje masa-volumen (%m/v)
function porcentajeMasaVolumen(solutoMasa, solucionVolumen) {
  return (solutoMasa / solucionVolumen) * 100;
}

// Función para calcular porcentaje volumen-volumen (%v/v)
function porcentajeVolumenVolumen(solutoVolumen, solucionVolumen) {
  return (solutoVolumen / solucionVolumen) * 100;
}

// Función para calcular partes por millón (ppm)
function partesPorMillon(solutoMasa, solucionMasa) {
  return (solutoMasa / solucionMasa) * 1e6;
}

// Función para calcular molaridad (M)
function molaridad(solutoMoles, solucionVolumenLitros) {
  return solutoMoles / solucionVolumenLitros;
}

// Función para calcular normalidad (N)
function normalidad(solutoEquivalentes, solucionVolumenLitros) {
  return solutoEquivalentes / solucionVolumenLitros;
}

// Función para calcular fracción molar (x)
function fraccionMolar(solutoMoles, totalMoles) {
  return solutoMoles / totalMoles;
}

// Ejemplos de cálculo
console.log("Ejemplos de cálculo:");

// Ejemplo 1: %m/m
let solutoMasa = 5;  // gramos
let solucionMasa = 100;  // gramos
console.log(`Porcentaje masa-masa (%m/m): ${porcentajeMasaMasa(solutoMasa, solucionMasa)}%`);

// Ejemplo 2: %m/v
solutoMasa = 5;  // gramos
let solucionVolumen = 100;  // mililitros
console.log(`Porcentaje masa-volumen (%m/v): ${porcentajeMasaVolumen(solutoMasa, solucionVolumen)}%`);

// Ejemplo 3: %v/v
let solutoVolumen = 5;  // mililitros
solucionVolumen = 100;  // mililitros
console.log(`Porcentaje volumen-volumen (%v/v): ${porcentajeVolumenVolumen(solutoVolumen, solucionVolumen)}%`);

// Ejemplo 4: ppm
solutoMasa = 0.002;  // gramos
solucionMasa = 1000;  // gramos
console.log(`Partes por millón (ppm): ${partesPorMillon(solutoMasa, solucionMasa)} ppm`);

// Ejemplo 5: Molaridad
let solutoMoles = 0.5;  // moles
let solucionVolumenLitros = 1;  // litros
console.log(`Molaridad (M): ${molaridad(solutoMoles, solucionVolumenLitros)} M`);

// Ejemplo 6: Normalidad
let solutoEquivalentes = 1;  // equivalentes
solucionVolumenLitros = 1;  // litros
console.log(`Normalidad (N): ${normalidad(solutoEquivalentes, solucionVolumenLitros)} N`);

// Ejemplo 7: Fracción molar
solutoMoles = 2;  // moles
let totalMoles = 10;  // moles
console.log(`Fracción molar (x): ${fraccionMolar(solutoMoles, totalMoles)}`);


