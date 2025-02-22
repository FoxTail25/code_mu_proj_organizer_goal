import { popUpWork } from './index/add_listner_in_pop_up.js';
import { localStorageWork } from './index/local_stor.js';
import { userTarget } from './index/targets.js';
import { goalPresentWork } from './index/targetVidj.js';


// элементы PopUp
const addTargetBtn = document.getElementById('addTargetBtn');
const PopUpCloseBtn = document.getElementById('popUpCloseBtn');
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen());
PopUpCloseBtn.addEventListener('click', () => popUpWork.popUpClose());

console.log(popUpWork.getPopUpData())
console.log(popUpWork.popUpClearData())
console.log(popUpWork.getPopUpData())
console.log(popUpWork.setPopUpData({
	id: "",
	name: "test2",
	createDate: '12',
	finishDate: "14",
	ListOfSteps: [1,2,3],
}))

// доступ к контейнеру целей
let targetContainer = document.getElementById('target-container')

const userGoals = [];

