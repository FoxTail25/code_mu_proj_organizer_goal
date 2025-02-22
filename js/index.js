import { localStorageWork } from './index/local_stor.js';
import { userTarget } from './index/targets.js';
import { goalPresentWork } from './index/targetVidj.js';


// элементы PopUp
let popUpBg = document.getElementById('popUp-bg')
let addTargetBtn = document.getElementById('addTargetBtn');
let popUpCloseBtn = document.getElementById('popUpCloseBtn');

function openAndClosePopUp() {
    let popUpBgOpen = [...popUpBg.classList].includes('hide')

}

// доступ к контейнеру целей
let targetContainer = document.getElementById('target-container')

const userGoals = [];

