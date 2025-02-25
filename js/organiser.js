import { popUpWork } from './goals/popUpWork.js';
import { localStorageWork } from "./goals/local_stor.js";
import { userTarget } from "./goals/userTarget.js";
import { goalPresentWork } from "./goals/goalPresentWork.js";

const addTargetBtn = document.getElementById("addTargetBtn");
addTargetBtn.addEventListener('click', () => popUpWork.popUpOpen(returnPopUpData, userTarget.getNewTarget()));

userTarget.addTarget({
  id: "",
  name: "Frontend разработчик middle",
  createDate: "2022-07-11",
  finishDate: "2025-07-11",
  listOfSteps: ['Изучить HTML', 'Изучить CSS', 'Изучить Js', 'Изучить REACT', 'Изучить Vue', 'Изучить Bootstrap'],
});
userTarget.addTarget({
  id: "",
  name: "BackEnd разработчик middle",
  createDate: "2024-03-01",
  finishDate: "2026-03-20",
  listOfSteps: ['Изучить Node.js', 'Изучить SQL', 'Изучить PHP', ],
});
userTarget.addTarget({
  id: "",
  name: "Найти достойную работу",
  createDate: "2025-04-01",
  finishDate: "2026-02-28",
  listOfSteps: ["Пройти все бесплатные курсы у прекрасного учителя Дмитрия Трепачёва","Создать более 10 различных Pet-проектов", "Сделать красивый сайт-резюме", "Создать резюме на hh.ru", "Создать резюме на фриланс-платформах"],
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
  if(isNewTarget) {
    userTarget.addTarget(dataFomPopUp)
  }
  userTarget.updateTarget(dataFomPopUp)
  goalPresentWork.resetTargetContainer()
  createTargetList()
}


