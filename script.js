function faktorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}

function hitung(tipe) {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
    const display = document.getElementById('hasil-teks');

    if (isNaN(n) || isNaN(r) || r > n) {
        display.innerText = "Input tidak valid!";
        return;
    }

    if (tipe === 'P') {
        const hasil = faktorial(n) / faktorial(n - r);
        display.innerHTML = `Hasil Permutasi P(${n},${r}) = <b>${hasil}</b>`;
    } else {
        const hasil = faktorial(n) / (faktorial(r) * faktorial(n - r));
        display.innerHTML = `Hasil Kombinasi C(${n},${r}) = <b>${hasil}</b>`;
    }
}