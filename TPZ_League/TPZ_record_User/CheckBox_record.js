let total =0;
let Attack_num = 0;
let Defensive_num = 0;
let Operate_num = 0;

function getPlayTypeCount_A(event) {    
    Attack_num = Number(event.target.value);
    document.getElementById('Attack_result').innerText = Attack_num;
  }

function getPlayTypeCount_D(event) {    
    Defensive_num = Number(event.target.value);
    document.getElementById('Defensive_result').innerText = Defensive_num;
  }

function getPlayTypeCount_O(event) {
    Operate_num = Number(event.target.value);
    document.getElementById('Operate_result').innerText = Operate_num;
}

function getPlayTypeCount_AVG(event) {
    document.getElementById('AVG').innerText = Math.round((Attack_num + Defensive_num + Operate_num)/3);
}

function getDownloadRecord(event) {
    downloadTemplate('플레이 총점.txt', Attack_num, Defensive_num, Operate_num); //현재 웹페이지 전체 소스 선택
}
// document.addEventListener('DOMContentLoaded', ()=>{
    
// })        

//Download HTML Template Source
function downloadTemplate(filename, Attack_num, Defensive_num, Operate_num) {
    let element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + '공격 점수 : '+encodeURIComponent(Attack_num) +'\r'+ '수비 점수 : '+ encodeURIComponent(Defensive_num) +'\r'+ '운영 점수 : ' + encodeURIComponent(Operate_num) +'\r'+ '평점 : ' + encodeURIComponent(document.getElementById('AVG').innerText));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
}

// data:text/plain;charset=utf-8