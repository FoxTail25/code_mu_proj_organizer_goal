
class PopUpWork {

	popUpBg = document.querySelector('#popUp-bg')
	arrEventListenerElements = [];

	targetName = document.querySelector('#target-name');
	targetStartData = document.querySelector('#target-start-data');
	targetfinishData = document.querySelector('#target-finish-data');
	stepsToTarget = document.querySelector('#steps-to-target');
	

	popUpClose(){
		console.log('сработала функция закрытия окна')
		this.popUpBg.classList.add('hide');
	}
	popUpOpen(){
		console.log('сработала функция открытия окна')
		this.popUpBg.classList.remove('hide');
	}
	popUpClear() {
		console.log(this.popUpBg);
	}
	getPopUpData(){
		return {
			name: this.targetName.value,
			createDate: this.targetStartData.value,
			finishDate: this.targetfinishData.value,
			listOfSteps: [...this.stepsToTarget.children].map(e => e.children[1].textContent)
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

	// addStepInList() {

	// 	let ol = document.querySelector('#steps-to-target');
	// 	console.log(ol);
	// 	console.log(this._exLastRecord)
	// 	if (this._exLastRecord(ol)) {
	// 		ol.innerHTML += '<li><button class="update-step">i</button><span class="step-text"></span><button class="delete-step">d</button></li>'
	// 		this.removeEventListenerFromLi()
	// 		this.setLisetenerOnStepsLi()
	// 	} else {
	// 		let warningPopUp = document.querySelector('#popup-warning-bg')
	// 		warningPopUp.classList.remove('hide')
	// 		let warningPopUpCloseBtn = warningPopUp.querySelector('#warnin-btn-close')
	// 		warningPopUpCloseBtn.addEventListener('click', function closeWarningPopUp() {

	// 			warningPopUp.classList.add('hide');
	// 			warningPopUp.querySelector('#warnin-btn-close').removeEventListener('click', closeWarningPopUp);
	// 		})
	// 	};
	// };

	// setLisetenerOnStepsLi() {
	// 	let arr = this._popUp.querySelectorAll('li')
	// 	arr.forEach(e => {

	// 		e.children[0].addEventListener('click', addEditStepListener);
	// 		e.children[2].addEventListener('click', deleteStep);
	// 	})
	// 	function addEditStepListener(e) {
	// 		let input = document.createElement('input');
	// 		let parentElem = e.target.parentElement;
	// 		let span = e.target.nextSibling;
	// 		let info = span.textContent;
	// 		input.value = info;
	// 		parentElem.removeChild(span);
	// 		e.target.insertAdjacentElement('afterend', input);
	// 		input.focus();
	// 		e.target.removeEventListener('click', addEditStepListener);
	// 		e.target.classList.remove('add-step');
	// 		e.target.classList.add('save-step');
	// 		e.target.setAttribute('title', 'сохранить');
	// 		e.target.addEventListener('click', saveUpdatedStep);

	// 	};
	// 	function saveUpdatedStep(e) {
	// 		let span = document.createElement('span');
	// 		let parentElem = e.target.parentElement;
	// 		let input = e.target.nextSibling;
	// 		let info = input.value;
	// 		span.textContent = info;
	// 		parentElem.removeChild(input);
	// 		e.target.insertAdjacentElement('afterend', span);
	// 		e.target.removeEventListener('click', saveUpdatedStep);
	// 		e.target.classList.remove('save-step');
	// 		e.target.classList.add('add-step');
	// 		e.target.setAttribute('title', 'редактировать');
	// 		e.target.addEventListener('click', addEditStepListener);

	// 	};
	// 	function deleteStep(e) {
	// 		let li = e.target.parentElement
	// 		li.parentElement.removeChild(li)
	// 	}
	// 	this.arrEventListenerElements.push({ arr: arr, func: addEditStepListener })

	// };

};

export const popUpWork = new PopUpWork()