let numberInput = document.getElementById('numberInput');
let runButton = document.getElementById('runButton');
let output = document.getElementById('output');

function multiplicationTable() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    if (number ===0) {
        output.innerHTML =' 0 คูณอะไรก็ได้ 0 จ้า'
        return;
    }

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }
    
    output.innerHTML = outputHtml;
}

runButton.addEventListener('click', multiplicationTable);