let popUpwindow = document.querySelector(".popup-window");
let newPopUpWindow = popUpwindow.cloneNode(true);
newPopUpWindow.removeAttribute("id");

const originalPopUp = document.getElementById("popup-window-sample");
originalPopUp.parentElement.removeChild(originalPopUp);

class PopUpAllWork {
  constructor(nodeElement) {
    this.popUpWindow = nodeElement;

  }

  popUpBg = document.getElementById("popUp-bg");
  newPopUpWindow;
  popUpCloseBtn;
  popUpSaveBtn;
  addStepInListBtn;

  targetId;
  targetName;
  targetStartData;
  targetFinishData;
  targetListOfSteps;

  _createPopUp(returnDataFromBtn) {
    this.newPopUpWindow = this.popUpWindow.cloneNode(true);
    this.popUpBg.appendChild(this.newPopUpWindow);

    this.popUpCloseBtn = this.newPopUpWindow.querySelector("#popUpCloseBtn");
    this.popUpCloseBtn.addEventListener("click", () => this.popUpClose());

    this.popUpSaveBtn = this.newPopUpWindow.querySelector("#add-target-btn");
    this.popUpSaveBtn.addEventListener("click", () => {
      if (this._checkPopUpData()) {
        returnDataFromBtn(this._getPopUpData());
        this.popUpClose();
      }
    });

    this._connectVariableAndDomNode();

    this.addStepInListBtn = this.newPopUpWindow.querySelector("#add-step");
    this.addStepInListBtn.addEventListener('click', () => this._addStepInListOfStep());
  }
  _connectVariableAndDomNode() {
    this.targetName = this.newPopUpWindow.querySelector("#target-name");
    this.targetStartData = this.newPopUpWindow.querySelector("#target-start-data");
    this.targetFinishData = this.newPopUpWindow.querySelector("#target-finish-data");
    this.targetListOfSteps = this.newPopUpWindow.querySelector("#steps-to-target");
  }

  _setPopUpData(incomingDataObj) {

    this.targetId = incomingDataObj.id;
    this.targetName.value = incomingDataObj.name;
    this.targetStartData.setAttribute("value", `${incomingDataObj.createDate}`);
    this.targetFinishData.setAttribute("value", `${incomingDataObj.finishDate}`);
    this.targetListOfSteps.innerHTML = "";
    incomingDataObj.listOfSteps.forEach((stepToTarget) => (this.targetListOfSteps.innerHTML += `<li><button class="update-step" title="редактировать шаг">edit</button><span class="step-text">${stepToTarget}</span><button class="delete-step" title="удалить шаг">d</button></li>`));
    this.addListenerOnTargetSteps();
  }
  _getPopUpData() {

    return {
      id: this.targetId,
      name: this.targetName.value,
      createDate: this.targetStartData.value,
      finishDate: this.targetFinishData.value,
      listOfSteps: [...this.targetListOfSteps.children].map(
        (e) => e.children[1].textContent
      ),
    };
  }

  _checkPopUpData() {
    if (this.targetName.value == '') {
      this._openWarningPopUp('не заполнено имя цели');
      return false
    }
    return true
  }

  _openWarningPopUp(string) {
    document.querySelector('#popup-warning-bg').classList.remove('hide');
    document.querySelector('.warning-window').innerHTML = `${string} <button id="warnin-btn-close">Всё ясно!</button>`;
    document.querySelector('#warnin-btn-close').addEventListener('click', function closeWarningPopUp() {
      document.querySelector('#popup-warning-bg').classList.add('hide');
      document.querySelector('#warnin-btn-close').removeEventListener('click', closeWarningPopUp);
    })
  }



  popUpOpen(returnDataFromBtn, incomingDataObj = false) {
    this._createPopUp(returnDataFromBtn);
    if (incomingDataObj) {
      this._setPopUpData(incomingDataObj);
    }
    setTimeout(() => {
      this.popUpBg.classList.remove("hide");
    }, 1); // необходимая отсановка для срабатывания анимации
  }
  popUpClose() {
    this.popUpBg.classList.add("hide");
    setTimeout(() => {
      this.popUpBg.removeChild(this.newPopUpWindow);
    }, 500); //время на отработку анимации
  }





  addListenerOnTargetSteps() {
    this._stepsAddListenerToUpdateBtn();
    this._stepsAddListenerToDeleteBtn();
  }
  _stepsAddListenerToUpdateBtn() {

    let arrUpdateBtn = [...this.targetListOfSteps.children].map(
      (e) => e.children[0]
    );
    arrUpdateBtn.forEach((e) =>
      e.addEventListener("click", _changeSpanToInput)
    );

    let arrSpan = [...this.targetListOfSteps.children].map((e) => e.children[1]);
    arrSpan.forEach((e) => e.addEventListener("click", _changeSpanToInput));

    function _changeSpanToInput(event) {

      let changeBtn;
      if (event.target.nodeName == "BUTTON") {
        changeBtn = event.target;
      }
      if (event.target.nodeName == "SPAN") {
        changeBtn = event.target.previousSibling;
      }
      let input = document.createElement("input");
      let parentElem = event.target.parentElement;
      let span = parentElem.querySelector("span");
      let info = span.textContent;
      input.value = info;
      parentElem.removeChild(span);
      changeBtn.insertAdjacentElement("afterend", input);
      input.focus();
      changeBtn.removeEventListener("click", _changeSpanToInput);
      changeBtn.classList.remove("add-step");
      changeBtn.classList.add("save-step");
      changeBtn.setAttribute("title", "сохранить");
      changeBtn.addEventListener("click", _saveUpdatedStep);
      changeBtn.nextSibling.addEventListener("blur", blur);
    }
    function blur(e) {
      let flag = true;

      if (e.relatedTarget == null) {
        flag = true;
      } else {
        flag = e.relatedTarget.className != "update-step save-step"
      }

      if (flag) {
        _saveUpdatedStep();
      }

    }
    function _saveUpdatedStep(event) {
      let saveBtn;
      if (event?.target.innerHTML == "edit") {
        saveBtn = event.target;
      } else {
        saveBtn = document.querySelector("button.save-step");
      }
      let span = document.createElement("span");
      let parentElem = saveBtn.parentElement;
      let input = saveBtn.nextSibling;
      let info = input.value;
      span.textContent = info;
      parentElem.removeChild(input);
      saveBtn.insertAdjacentElement("afterend", span);
      saveBtn.classList.remove("save-step");
      saveBtn.classList.add("add-step");
      saveBtn.setAttribute("title", "редактировать");

      saveBtn.nextSibling.removeEventListener("blur", blur);
      saveBtn.nextSibling.addEventListener("click", _changeSpanToInput);
      saveBtn.removeEventListener("click", _saveUpdatedStep);
      saveBtn.addEventListener("click", _changeSpanToInput);
    }
  }
  _stepsAddListenerToDeleteBtn() {
    let arrDeleteBtn = [...this.targetListOfSteps.children].map(
      (e) => e.children[2]
    );
    arrDeleteBtn.forEach((e) => e.addEventListener("click", deleteStep));
    function deleteStep(e) {
      let li = e.target.parentElement;
      li.parentElement.removeChild(li);
    }
  }


  _addStepInListOfStep() {
    this.targetListOfSteps.innerHTML += `<li><button class="update-step" title="редактировать шаг">edit</button><span class="step-text">Новый шаг к достижению цели</span><button class="delete-step" title="удалить шаг">d</button></li>`;
    this.addListenerOnTargetSteps();
  }
}

export const popUpWork = new PopUpAllWork(newPopUpWindow);
