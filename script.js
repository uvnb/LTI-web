function calculateConvolution() {
    const input1 = document.getElementById('input1').value.split(',').map(Number);
    const input2 = document.getElementById('input2').value.split(',').map(Number);
    const result = [];

    // Tính số phần tử của hai mảng
    const numElements1 = input1.length;
    const numElements2 = input2.length;

    // Lấy vị trí gốc từ input
    const origin1 = parseInt(document.getElementById('origin1').value, 10);
    const origin2 = parseInt(document.getElementById('origin2').value, 10);

    // Tính tích chập
    for (let i = 0; i < input1.length + input2.length - 1; i++) {
        let sum = 0;
        for (let j = 0; j < input2.length; j++) {
            if (i - j >= 0 && i - j < input1.length) {
                sum += input1[i - j] * input2[j];
            }
        }
        result.push(sum);
    }

    // Hiển thị kết quả
    document.getElementById('result').textContent = result.join(', ');

    // Tính số phần tử của kết quả và hiển thị
    const numElements = result.length;
    document.getElementById('numElements').textContent = `Số phần tử của y[n]: ${numElements}`;

    // Hiển thị số phần tử của hai mảng
    document.getElementById('numElements1').textContent = `Số phần tử trong h[n]: ${numElements1}`;
    document.getElementById('numElements2').textContent = `Số phần tử trong x[n]: ${numElements2}`;

    // Tính gốc của y[n]
    let yOrigin;
    if (origin1 === 0 && origin2 === 0) {
        // Nếu cả hai gốc đều là 0
        yOrigin = 0;
    } else {
        // Nếu ít nhất một gốc khác 0
        yOrigin = origin1 + origin2;
    }

    // Hiển thị gốc
    document.getElementById('mean').textContent = `Gốc của y[n] (vị trí thứ): ${yOrigin}`;
}
