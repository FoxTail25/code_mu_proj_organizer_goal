import { popUpWork } from './index/pop_up_work.js';
import { localStorageWork } from './index/local_stor.js';
import { userTarget } from './index/targets.js';
import { goalPresentWork } from './index/targetVidj.js';


// элементы PopUp
const addTargetBtn = document.getElementById('addTargetBtn');
const PopUpCloseBtn = document.getElementById('popUpCloseBtn');
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen(testPopUpDataObj));
PopUpCloseBtn.addEventListener('click', () => popUpWork.popUpClose());

let testPopUpDataObj= {
	id: "",
	name: "test2",
	createDate: "2025-02-23",
	finishDate: "2025-02-23",
	listOfSteps: ['test1','test2','test3'],
};

// console.log(popUpWork.getPopUpData())
// console.log(popUpWork.popUpClearData())
// console.log(popUpWork.getPopUpData())
// console.log(popUpWork.setPopUpData(testPopUpDataObj))

// доступ к контейнеру целей
let targetContainer = document.getElementById('target-container')

const userGoals = [];

