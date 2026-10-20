let processes = [];

function addProcess(pid, arrival, burst) {
    return {
        pid,
        arrival: Number(arrival),
        burst: Number(burst)
    };
}

let addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {

    let pid = document.querySelector('.pid').value;
    let arrival = document.querySelector('.arivalTime').value;
    let burst = document.querySelector('.burstTime').value;

    if (!pid || arrival == '' || burst == '') {
        alert('please fill all fileds')
    }

    else {
        let process = addProcess(pid, arrival, burst);

        processes.push(process);

        let processTable = document.querySelector('.processTable');

        let row = document.createElement('tr');

        row.innerHTML = `
        <td>${pid}</td>
        <td>${arrival}</td>
        <td>${burst}</td>
    `;

        processTable.appendChild(row);
    }

    document.querySelector('.pid').value = '';
    document.querySelector('.arivalTime').value = '';
    document.querySelector('.burstTime').value = '';
});

let resultTable = document.querySelector('.resultTable');

let calculateBtn = document.querySelector('.calculateBtn');

// calculate button run our FCFS algorithm
calculateBtn.addEventListener('click', () => {
    if (processes.length === 0) {
        alert('no process added yet')
    }
    else {
        processes.sort((a, b) => a.arrival - b.arrival);

        let currentTime = 0;
        let ganttChart = document.querySelector('.ganttChart');
        let timeLine = document.querySelector('.timeLine');

        ganttChart.innerHTML = '';
        timeLine.innerHTML = '';

        for (let i = 0; i < processes.length; i++) {

            let process = processes[i];
            /*
            ♥️Handle CPU Idle Time
            If CPU is waiting for a process to arrive, move clock forward.
            Example:
            Current Time = 2
            Arrival = 5
            CPU waits until time 5.
            */
            if (currentTime < process.arrival) {
                currentTime = process.arrival;
            }

            process.ct = currentTime + process.burst;

            process.tat = process.ct - process.arrival;

            process.wt = process.tat - process.burst;

            currentTime = process.ct;

            let ganttBox = document.createElement('div');

            ganttBox.classList.add('ganttBox');

            ganttBox.textContent = process.pid;
            ganttBox.style.width = process.ct + 'px'
            ganttChart.appendChild(ganttBox);


            let row = document.createElement('tr');
            row.innerHTML = `
            <td>${process.pid}</td>
            <td>${process.arrival}</td>
            <td>${process.burst}</td>
            <td>${process.ct}</td>
            <td>${process.wt}</td>
            <td>${process.tat}</td>
        `;

            resultTable.appendChild(row);

        }
        let startTime = 0;

        let startBox = document.createElement('div');
        startBox.classList.add('timeBox');
        startBox.textContent = startTime;

        timeLine.appendChild(startBox);

        for (let process of processes) {

            let endBox = document.createElement('div');

            endBox.classList.add('timeBox');

            endBox.textContent = process.ct;

            timeLine.appendChild(endBox);
        }
    }
});

// Developer info part:
let showInfo = document.querySelector('.showInfo');
let developerInfo = document.querySelector('.developerInfo');
showInfo.addEventListener('click', () => {
    if (showInfo.textContent == 'About Developer') {
        developerInfo.style.display = 'flex'
        showInfo.textContent = 'Hide'
    } else {
        developerInfo.style.display = 'none'
        showInfo.textContent = 'About Developer'
    }
})