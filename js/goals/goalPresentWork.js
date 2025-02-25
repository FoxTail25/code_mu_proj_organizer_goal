let goalPresentation = document.querySelector(".goal-presentation");
let newGoalPresentation = goalPresentation.cloneNode(true);
newGoalPresentation.removeAttribute("id");


const originalGP = document.getElementById("goal-presentation-sample");
originalGP.parentElement.removeChild(originalGP);


class TargetVidget {
  constructor(nodeElement) {
    this.target = nodeElement;
  }

  targetContainer = document.getElementById('target-container');

  _addTargetInTargetContainer(target) {
    this.targetContainer.appendChild(target);
  }

  createTarget(obj, funcEdit, funcDel ) {
    const newTargetNode = this.target.cloneNode(true);
    newTargetNode.dataset.id = obj.id;

      [...newTargetNode.children].forEach(htmlElement => {
        if (htmlElement.className == 'name') {

          htmlElement.textContent = obj.name;
          
        }
        else if (htmlElement.className == 'create_date') {

          htmlElement.textContent = this._createTimeView('ru', obj.createDate);
        }
        else if (htmlElement.className == 'finish_date') {

          htmlElement.textContent = this._createTimeView('ru', obj.finishDate);

        } else if (htmlElement.className == 'step-details') {

          this._addTargetSteps(htmlElement, obj.listOfSteps);

        } else if (htmlElement.className == 'edit-target-btn') {
          
          htmlElement.addEventListener('click', (e) => {
            let id = e.target.parentElement.dataset.id;
            funcEdit(id);

          })
        } else if (htmlElement.className == 'delete-target-btn') {
          htmlElement.addEventListener('click', (e) => {

            let id = e.target.parentElement.dataset.id;
            funcDel(id);
            this.deleteTarget(id);
          })
        }
      })
    this._addTargetInTargetContainer(newTargetNode)
  }
  _addTargetSteps(node, arr) {
    let ol = document.createElement('ol')
    arr.forEach(e => ol.innerHTML += `<li class="step">${e}</li>`);

    node.appendChild(ol);
  }
  _findTargetById(id) {
    let item = this.targetContainer.querySelector(`[data-id="${id}"]`);
    return item;
  }
  deleteTarget(id) {
    let elem = this._findTargetById(id);
    this.targetContainer.removeChild(elem);
  }
  resetTargetContainer() {
    this.targetContainer.innerHTML = '';
  }
  _createTimeView(string, timeString){
    let view;
    if(string === 'ru') {
     view = timeString.split('-').reverse();
    }
    return view.join('-')
  }
}

export const goalPresentWork = new TargetVidget(newGoalPresentation);
