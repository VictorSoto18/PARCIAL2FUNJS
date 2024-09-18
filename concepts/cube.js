function createCube(size) {
    const arrayA = [];
    const arrayB = [];

    const frenteA = '/\\';
    const atrasA = '_\\';

    const frenteB = '\\/';
    const atrasB = '_/';

    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(size - i - 1);
        fila += frenteA.repeat(i + 1);
        fila += atrasA.repeat(size);
        arrayA.push(fila);
    }

    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(i);
        fila += frenteB.repeat(size - i);
        fila += atrasB.repeat(size);
        arrayB.push(fila);
    }

    return arrayA.join('\n') + '\n' + arrayB.join('\n');
}

const cube = createCube(3);
console.log(cube);

