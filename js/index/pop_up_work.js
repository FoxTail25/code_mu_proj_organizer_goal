let popUpwindow = document.querySelector(".popup-window");
let newPopUpWindow = popUpwindow.cloneNode(true);
newPopUpWindow.removeAttribute("id");

const originalPopUp = document.getElementById("popup-window-sample");
originalPopUp.parentElement.removeChild(originalPopUp);

class PopUpAllWork {
  constructor(nodeElement) {
    this.popUpWindow = nodeElement;
    // console.log("pp", this.pop);
  }

  popUpBg = document.getElementById("popUp-bg");
  newPopUpWindow;
  popUpCloseBtn;

  _createPopUp() {
    this.newPopUpWindow = this.popUpWindow.cloneNode(true);
    this.popUpBg.appendChild(this.newPopUpWindow);
    // console.dir(newPopUpWindow);
    setTimeout(() =>{
      this.popUpBg.classList.remove("hide");
    }, 1) // необходимая отсановка для работы анимации
    this.popUpCloseBtn = this.newPopUpWindow.querySelector("#popUpCloseBtn");
    this.popUpCloseBtn.addEventListener('click', ()=> this.popUpClose());
  }

  popUpOpen(popUpData = false) {
    console.log('сработал console.log при открытии popUp', popUpData)
    this._createPopUp();
  }
  popUpClose() {
    this.popUpBg.classList.add("hide");
    setTimeout(() => {
      // this.popUpCloseBtn.removeEventListener('click', ()=> this.popUpClose());
      this.popUpBg.removeChild(this.newPopUpWindow);
    }, 500);//время на отработку анимации
  }
}

export const popUpWork = new PopUpAllWork(newPopUpWindow);

// createPopUp(){
//   this.popUpwindowBg.appenChild(this.popUpWindow)
// }
//   arrEventListenerElements = [];

// targetName = document.querySelector("#target-name");
// targetStartData = document.querySelector("#target-start-data");
// targetfinishData = document.querySelector("#target-finish-data");
// stepsToTarget = document.querySelector("#steps-to-target");

// popUpClose() {
//   // console.log("сработала функция закрытия окна");
//   this.popUpBg.classList.add("hide");
//   console.log(this.getPopUpData());
//   this.popUpClearData();
// }
// popUpOpen() {
// typeof obj == "undefined"
//   ? this.popUpClearData()
//   : (console.log("сработала функция открытия окна"),
//     this.setPopUpData(obj));

// this.popUpBg.classList.remove("hide");
//   this.popUpWindow.parentElement.classList.remove("hide");

// }
// // }
// popUpClearData() {
//   console.log("сработала функция стирания данных");
//   this.targetName.value = "";
//   this.targetStartData.value = "";
//   this.targetfinishData.value = "";
//   [...this.stepsToTarget.children].forEach((e, i) => {
//     if (i == 0) {
//       e.children[1].textContent = "";
//     } else {
//       this.stepsToTarget.removeChild(e);
//     }
//   });
//   return "данные очищены";
// }
// getPopUpData() {
//   console.log("сработала функция получения данных");
//   return {
//     name: this.targetName.value,
//     createDate: this.targetStartData.value,
//     finishDate: this.targetfinishData.value,
//     listOfSteps: [...this.stepsToTarget.children].map(
//       (e) => e.children[1].textContent
//     ),
//   };
// }
// setPopUpData(obj) {
//   console.log("сработала функция установки данных");
//   this.targetName.value = obj.name;
//   this.targetStartData.value = obj.createDate;
//   this.targetfinishData.value = obj.finishDate;
//   [...this.stepsToTarget.children].forEach((e) => {
//     this.stepsToTarget.removeChild(e);
//   });
//   obj.listOfSteps.forEach((e) => {
//     this.stepsToTarget.innerHTML += `<li><button class="update-step" title="редактировать шаг">edit</button><span class="step-text">${e}</span><button class="delete-step" title="удалить шаг">d</button></li>`;
//   });
//   this.addListenerOnTargetSteps();
//   return "данные установлены";
// }

// addListenerOnTargetSteps() {
//   console.log("сработал addListenerOnTargetSteps");
//   this._stepsAddListenerToUpdateBtn();
//   this._stepsAddListenerToDeleteBtn();
// }
// _stepsAddListenerToUpdateBtn() {
//   let arrUpdateBtn = [...this.stepsToTarget.children].map(
//     (e) => e.children[0]
//   );
//   arrUpdateBtn.forEach((e) =>
//     e.addEventListener("click", _changeSpanToInput)
//   );

//   let arrSpan = [...this.stepsToTarget.children].map((e) => e.children[1]);
//   arrSpan.forEach((e) => e.addEventListener("click", _changeSpanToInput));

//   function _changeSpanToInput(event) {
//   //   console.log('_changeSpanToInput');
//   //   console.log(event);
//   //   console.dir(event.target);
//     let changeBtn;
//     if (event.target.nodeName == "BUTTON") {
//       changeBtn = event.target;
//     }
//     if (event.target.nodeName == "SPAN") {
//       changeBtn = event.target.previousSibling;
//     }
//     let input = document.createElement("input");
//     let parentElem = event.target.parentElement;
//     let span = parentElem.querySelector("span");
//     let info = span.textContent;
//     input.value = info;
//     parentElem.removeChild(span);
//     changeBtn.insertAdjacentElement("afterend", input);
//     input.focus();
//     changeBtn.removeEventListener("click", _changeSpanToInput);
//     changeBtn.classList.remove("add-step");
//     changeBtn.classList.add("save-step");
//     changeBtn.setAttribute("title", "сохранить");
//     changeBtn.addEventListener("click", _saveUpdatedStep);
//     changeBtn.nextSibling.addEventListener("blur", blur);
//   }
//   function blur(e) {
//   //   console.log("blur");
//     let flag = true;
//     try {
//       flag = e.relatedTarget.className != "update-step save-step";
// 	// console.log(flag)
// } catch {
// 	flag = true;
// }
// if (flag) {
// 	//   console.log(flag)
//       _saveUpdatedStep();
//     }
//   }
//   function _saveUpdatedStep(event) {
//     let saveBtn;
//     if (event?.target.innerHTML == "edit") {
//       saveBtn = event.target;
//     } else {
//       saveBtn = document.querySelector("button.save-step");
//     }
//     let span = document.createElement("span");
//     let parentElem = saveBtn.parentElement;
//     let input = saveBtn.nextSibling;
//     let info = input.value;
//     span.textContent = info;
//     parentElem.removeChild(input);
//     saveBtn.insertAdjacentElement("afterend", span);
//     saveBtn.classList.remove("save-step");
//     saveBtn.classList.add("add-step");
//     saveBtn.setAttribute("title", "редактировать");

//     saveBtn.nextSibling.removeEventListener("blur", blur);
//     saveBtn.nextSibling.addEventListener("click", _changeSpanToInput);
//     saveBtn.removeEventListener("click", _saveUpdatedStep);
//     saveBtn.addEventListener("click", _changeSpanToInput);
//   }
// }

// _stepsAddListenerToDeleteBtn() {
//   let arrDeleteBtn = [...this.stepsToTarget.children].map(
//     (e) => e.children[2]
//   );
//   // console.log("сработал _stepsDeleteeBtn", arrDeleteBtn);
//   arrDeleteBtn.forEach((e) => e.addEventListener("click", deleteStep));
//   function deleteStep(e) {
//     let li = e.target.parentElement;
//     li.parentElement.removeChild(li);
//   }
// }

// removeAllEventListener() {
// 	this.removeEventListenerFromLi()
// }

// removeEventListenerFromLi() {
// 	this.arrEventListenerElements.forEach(elem => {
// 		elem.arr.forEach(e => {
// 			e.children[0].removeEventListener('click', elem.func)
// 		})
// 	})
// 	this.arrEventListenerElements = [];
// }
// setPopUpCloseListener(func) {
// 	this._popUp.querySelector('#popUpCloseBtn').addEventListener('click', () => {
// 		this.removeAllEventListener()
// 		func()
// 	});

// }

// setPopUpListener() {
// 	this._popUp.querySelector('#add-step').addEventListener('click', this.addStepInList);
// 	this.setLisetenerOnStepsLi()

// };

// _exLastRecord(node) {

// 	let lastLi = node.children[[...node.children].length - 1];
// 	let recordInLi = lastLi.children[1].textContent;
// 	console.log(recordInLi);
// 	let answer;
// 	recordInLi.length > 1
// 		? answer = true
// 		: answer = false;

// 		return answer
// };

// };
