import { popUpWork } from './goals/popUpWork.js';
import { localStorageWork } from "./goals/local_stor.js";
import { userTarget } from "./goals/userTarget.js";
import { goalPresentWork } from "./goals/goalPresentWork.js";

// элементы PopUp
const addTargetBtn = document.getElementById("addTargetBtn");
// const PopUpCloseBtn = document.getElementById("popUpCloseBtn");
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen(returnPopUpData, userTarget.getNewTarget()));

userTarget.addTarget({
  id: "",
  name: "target1",
  //   finishDate: "",
  listOfSteps: [1, 2, 3],
});
userTarget.addTarget({
  id: "",
  name: "target2",
  finishDate: "2025-02-26",
  listOfSteps: [4, 5, 6],
});
userTarget.addTarget({
  id: "",
  name: "target3",
  finishDate: "2025-02-28",
  listOfSteps: [7, 8, 9],
});

function createTargetList() {
  userTarget.getTargetList().forEach(e => goalPresentWork.createTarget(e, editTarget, deleteTarget))
}
createTargetList()

function editTarget(id) {
  let target = userTarget.getOldTarget({ id: [id] });
  popUpWork.popUpOpen(returnPopUpData, target);
}

function deleteTarget(id) {
userTarget.deletTarget({id:[id]})
}

function returnPopUpData(dataFomPopUp) {
  console.log('сработала функция dataFromPopUpBtn')
  let isNewTarget = (dataFomPopUp.id == '');
  // console.log('поле id вернувшегося объекта',isNewTarget)
  if(isNewTarget) {
    userTarget.addTarget(dataFomPopUp)
  }
  userTarget.updateTarget(dataFomPopUp)
  goalPresentWork.resetTargetContainer()
  createTargetList()
}


