const banner = document.querySelector('.banner'),
    avgElem = document.querySelector('#average');

function calcAvg(){
    let sum = 0,
        group = JSON.parse(localStorage.getItem('group'));


    for (let student in group) {
        for (let subject in group[student]) {
            sum += +group[student][subject]; 
        }
    }
    

    avgElem.innerHTML = (sum/3).toFixed(2);
}

function init(){

    let group = JSON.parse(localStorage.getItem('group')), string = '';

    string += `<table><tr><th>Имя</th><th>Java</th><th>PHP</th><th>JS</th></tr>`;

    for (let student in group){
        string +=`<tr><td>${student}</td>`;
        for (let subject in group[student]) {
            string += `<td>${group[student][subject]}</td>`;
        }
        string += `</tr>`;
    }
    string += `</table>`;

    string += `<button onclick='calcAvg()'>Посчитать среднее</button>`;

    banner.innerHTML = string;

}

init();

