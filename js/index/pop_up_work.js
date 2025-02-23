class PopUpWork {
  popUpBg = document.querySelector("#popUp-bg");
  arrEventListenerElements = [];

  targetName = document.querySelector("#target-name");
  targetStartData = document.querySelector("#target-start-data");
  targetfinishData = document.querySelector("#target-finish-data");
  stepsToTarget = document.querySelector("#steps-to-target");

  popUpClose() {
    console.log("сработала функция закрытия окна");
    this.popUpBg.classList.add("hide");
    console.log(this.getPopUpData());
    this.popUpClearData();
  }
  popUpOpen(obj) {
    typeof obj == "undefined"
      ? this.popUpClearData()
      : (console.log("сработала функция открытия окна"),
        this.setPopUpData(obj));
    this.popUpBg.classList.remove("hide");
  }
  popUpClearData() {
    console.log("сработала функция стирания данных");
    this.targetName.value = "";
    this.targetStartData.value = "";
    this.targetfinishData.value = "";
    [...this.stepsToTarget.children].forEach((e, i) => {
      if (i == 0) {
        e.children[1].textContent = "";
      } else {
        this.stepsToTarget.removeChild(e);
      }
    });
    return "данные очищены";
  }
  getPopUpData() {
    console.log("сработала функция получения данных");
    return {
      name: this.targetName.value,
      createDate: this.targetStartData.value,
      finishDate: this.targetfinishData.value,
      listOfSteps: [...this.stepsToTarget.children].map(
        (e) => e.children[1].textContent
      ),
    };
  }
  setPopUpData(obj) {
    console.log("сработала функция установки данных");
    this.targetName.value = obj.name;
    this.targetStartData.value = obj.createDate;
    this.targetfinishData.value = obj.finishDate;
    [...this.stepsToTarget.children].forEach((e) => {
      this.stepsToTarget.removeChild(e);
    });
    obj.listOfSteps.forEach((e) => {
      this.stepsToTarget.innerHTML += `<li><button class="update-step" title="редактировать шаг">edit</button><span class="step-text">${e}</span><button class="delete-step" title="удалить шаг">d</button></li>`;
    });
    this.addListenerOnTargetSteps();
    return "данные установлены";
  }

  addListenerOnTargetSteps() {
    console.log("сработал addListenerOnTargetSteps");
    this._stepsAddListenerToUpdateBtn();
    this._stepsAddListenerToDeleteBtn();
  }
  _stepsAddListenerToUpdateBtn() {
    let arrUpdateBtn = [...this.stepsToTarget.children].map(
      (e) => e.children[0]
    );
    console.log("сработал _stepsUpdateBtn", arrUpdateBtn);
    arrUpdateBtn.forEach((e) =>
      e.addEventListener("click", _changeSpanToInput)
    );
  

  function _changeSpanToInput(event) {
    console.log("_changeSpanToInput");
    let input = document.createElement("input");
    let parentElem = event.target.parentElement;
    let span = event.target.nextSibling;
    let info = span.textContent;
    input.value = info;
    parentElem.removeChild(span);
    event.target.insertAdjacentElement("afterend", input);
    input.focus();
    console.log("event.target", event.target);
    event.target.removeEventListener("click", _changeSpanToInput);
    event.target.removeEventListener("click", _changeSpanToInput);
    event.target.classList.remove("add-step");
    event.target.classList.add("save-step");
    event.target.setAttribute("title", "сохранить");
    event.target.addEventListener("click", _saveUpdatedStep);
  }
  function _saveUpdatedStep(e) {
    console.log("_saveUpdateBtnStep");
    let span = document.createElement("span");
    let parentElem = e.target.parentElement;
    let input = e.target.nextSibling;
    let info = input.value;
    span.textContent = info;
    parentElem.removeChild(input);
    e.target.insertAdjacentElement("afterend", span);
    e.target.removeEventListener("click", _saveUpdatedStep);
    e.target.classList.remove("save-step");
    e.target.classList.add("add-step");
    e.target.setAttribute("title", "редактировать");
    e.target.addEventListener("click", _changeSpanToInput);
  }
}
_stepsAddListenerToDeleteBtn() {
    let arrDeleteBtn = [...this.stepsToTarget.children].map(
      (e) => e.children[2]
    );
    console.log("сработал _stepsDeleteeBtn", arrDeleteBtn);
    arrDeleteBtn.forEach((e) =>
      e.addEventListener("click", deleteStep)
    );
	function deleteStep(e) {
			  let li = e.target.parentElement
			  li.parentElement.removeChild(li)
		  }
  }

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
}

export const popUpWork = new PopUpWork();
