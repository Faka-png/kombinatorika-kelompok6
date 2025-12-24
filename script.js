// Fungsi Faktorial Rekursif
function faktorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}

// Fungsi Utama Hitung
function hitung(tipe) {
    const n = parseInt(document.getElementById('val-n').value);
    const r = parseInt(document.getElementById('val-r').value);
    const display = document.getElementById('display-hasil');
    const detail = document.getElementById('detail-rumus');

    // Validasi Input
    if (isNaN(n) || isNaN(r)) {
        display.innerHTML = "Mohon masukkan angka!";
        display.style.background = "#e74c3c";
        return;
    }

    if (n < 0 || r < 0) {
        display.innerHTML = "Angka tidak boleh negatif!";
        display.style.background = "#e74c3c";
        return;
    }

    if (r > n) {
        display.innerHTML = "Nilai r tidak boleh lebih besar dari n!";
        display.style.background = "#e74c3c";
        return;
    }

    // Reset Style
    display.style.background = "#2d3436";

    // Perhitungan
    const fN = faktorial(n);
    const fR = faktorial(r);
    const fNR = faktorial(n - r);
    let hasil = 0;

    if (tipe === 'P') {
        hasil = fN / fNR;
        display.innerHTML = `Permutasi P(${n},${r}) = <strong>${hasil.toLocaleString()}</strong>`;
        detail.innerHTML = `Rumus: ${n}! / (${n}-${r})!`;
    } else {
        hasil = fN / (fR * fNR);
        display.innerHTML = `Kombinasi C(${n},${r}) = <strong>${hasil.toLocaleString()}</strong>`;
        detail.innerHTML = `Rumus: ${n}! / (${r}! × (${n}-${r})!)`;
    }
}