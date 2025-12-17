function faktorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    
    let hasil = 1;
    for (let i = 2; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}zz

function hitungPermutasi() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
    
    if (isNaN(n) || isNaN(r)) {
        alert('Masukkan nilai n dan r yang valid!');
        return;
    }
    
    if (n < 0 || r < 0) {
        alert('Nilai tidak boleh negatif!');
        return;
    }
    
    if (r > n) {
        alert('Nilai r tidak boleh lebih besar dari n!');
        return;
    }
    
    const hasil = faktorial(n) / faktorial(n - r);
    const faktN = faktorial(n);
    const faktNR = faktorial(n - r);
    
    document.getElementById('output').innerHTML = 
        `<strong>Permutasi P(${n}, ${r}) = <span style="color: #e74c3c">${hasil.toLocaleString()}</span></strong>`;
    
    document.getElementById('detail').innerHTML = 
        `Rumus: ${n}! / (${n} - ${r})! = ${faktN.toLocaleString()} / ${faktNR.toLocaleString()} = ${hasil.toLocaleString()}`;
}

function hitungKombinasi() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
    
    if (isNaN(n) || isNaN(r)) {
        alert('Masukkan nilai n dan r yang valid!');
        return;
    }
    
    if (n < 0 || r < 0) {
        alert('Nilai tidak boleh negatif!');
        return;
    }
    
    if (r > n) {
        alert('Nilai r tidak boleh lebih besar dari n!');
        return;
    }
    
    const hasil = faktorial(n) / (faktorial(r) * faktorial(n - r));
    const faktN = faktorial(n);
    const faktR = faktorial(r);
    const faktNR = faktorial(n - r);
    
    document.getElementById('output').innerHTML = 
        `<strong>Kombinasi C(${n}, ${r}) = <span style="color: #27ae60">${hasil.toLocaleString()}</span></strong>`;
    
    document.getElementById('detail').innerHTML = 
        `Rumus: ${n}! / (${r}! × (${n} - ${r})!) = ${faktN.toLocaleString()} / (${faktR.toLocaleString()} × ${faktNR.toLocaleString()}) = ${hasil.toLocaleString()}`;
}

function resetKalkulator() {
    document.getElementById('n').value = '';
    document.getElementById('r').value = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('detail').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                hitungPermutasi();
            }
        });
    });
});