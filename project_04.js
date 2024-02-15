const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const calbtn = document.querySelector('.cal-btn')
const clrbtn = document.querySelector('.clr-btn')
const container = document.querySelector('.container')
const chartbtn = document.querySelector('.chart-btn');
const charttable = document.querySelector('.table-chart');

let output = 0;
let count = 0;
const data = () => {
    if (count == 0) {
        calbtn.textContent = 'Wait'
        calbtn.style.backgroundColor = 'darkslategray';
        output = ((weight.value) / (height.value * height.value)) * 10000;
        output = parseFloat(output.toFixed(1));
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'output');
        newDiv.textContent = "This is your BMI: " + output;
        container.appendChild(newDiv);
        clrbtn.addEventListener('click', function () {
            location.reload();
            newDiv.remove();
        })

        count++;
    }
    else {
        // calbtn.textContent = 'Calculate'
        // calbtn.style.backgroundColor = ' rgb(66, 75, 244)';
        clrbtn.addEventListener('click', function () {
            newDiv.remove();
            location.reload();
        })
        count--;
    }

}
calbtn.addEventListener('click', data);

let cnt = 0;
const chartdata = () => {
    if (cnt == 0) {
        charttable.style.display = 'block'
        chartbtn.textContent = 'Clear Chart'
        chartbtn.style.backgroundColor = 'red';
        cnt++;
    }
    else {

        charttable.style.display = 'none';
        chartbtn.textContent = ' Chart'
        chartbtn.style.backgroundColor = 'Black';
        cnt--;
    }

    // const newDivimg = document.createElement('div');
    // newDivimg.setAttribute('class', 'newimg');
    // container.appendChild(newDivimg);
}
chartbtn.addEventListener('click', chartdata);