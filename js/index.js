import { popUpWork } from './index/pop_up_work.js';
import { localStorageWork } from "./index/local_stor.js";
import { userTarget } from "./index/targets.js";
import { goalPresentWork } from "./index/targetVidj.js";

// элементы PopUp
const addTargetBtn = document.getElementById("addTargetBtn");
const PopUpCloseBtn = document.getElementById("popUpCloseBtn");
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen(returnPopUpData, false))

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
  userTarget.getTargetList().forEach(e => goalPresentWork.createTarget(e, editTarget))
}
createTargetList()

function editTarget(id) {
  let target = userTarget.getTarget({ id: [id] })

  popUpWork.popUpOpen(returnPopUpData, target)
}

function returnPopUpData(dataFomPopUpBtn) {
  console.log('!!index!!')
  console.log(dataFomPopUpBtn)
  userTarget.updateTarget(dataFomPopUpBtn)
  goalPresentWork.resetTargetContainer()
  createTargetList()
}
