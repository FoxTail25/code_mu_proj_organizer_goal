import { popUpWork } from './index/pop_up_work.js';
import { localStorageWork } from "./index/local_stor.js";
import { userTarget } from "./index/targets.js";
import { goalPresentWork } from "./index/targetVidj.js";

// элементы PopUp
const addTargetBtn = document.getElementById("addTargetBtn");
const PopUpCloseBtn = document.getElementById("popUpCloseBtn");
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen())

userTarget.addTarget({
  id: "",
  name: "target1",
  createDate: new Date(),
  finishDate: "",
  listOfSteps: [1, 2, 3],
});
userTarget.addTarget({
  id: "",
  name: "target2",
  createDate: new Date(),
  finishDate: "",
  listOfSteps: [1, 2, 3],
});
userTarget.addTarget({
  id: "",
  name: "target3",
  createDate: new Date(),
  finishDate: "",
  listOfSteps: [1, 2, 3],
});

// const target = userTarget.getTargetList()[0];
function createTargetList(){
	userTarget.getTargetList().forEach(e => goalPresentWork.createTarget(e, editTarget))
}
createTargetList()

function editTarget(id){
	console.log('сработала функция editTarget in index.js')
	console.log(id)
	popUpWork.popUpOpen(id)
}
// let id = userTarget.getTargetList()[0].id


// addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen(testPopUpDataObj));
// PopUpCloseBtn.addEventListener('click', () => popUpWork.popUpClose());

// let testPopUpDataObj= {
// 	id: "",
// 	name: "test2",
// 	createDate: "2025-02-23",
// 	finishDate: "2025-02-23",
// 	listOfSteps: ['test1','test2','test3'],
// };

// доступ к контейнеру целей
// let targetContainer = document.getElementById('target-container')

// const userGoals = [...userTarget.getTargetList()];
// console.log('userGoals', userGoals)
