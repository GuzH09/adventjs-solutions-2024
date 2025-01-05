// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Resultado esperado:
// ********
// * midu *
// ********

// createFrame(['a', 'bb', 'ccc'])

// // Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// createFrame(['a', 'bb', 'ccc', 'dddd'])

function createFrame(names: string[]): string {
  if (names.length == 0 ) return '*'

  let maxLength = 0;
  for (const name of names) {
    maxLength = Math.max(name.length, maxLength);
  }

  let resultArr: string[] = [];
  resultArr.push('*'.repeat(maxLength + 4))
  for (const name of names) {
    resultArr.push(`* ${name}${' '.repeat( maxLength - name.length )} *`)
  }
  resultArr.push('*'.repeat(maxLength + 4))

  return resultArr.join("\n");
}