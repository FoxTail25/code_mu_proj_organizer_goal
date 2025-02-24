let goalPresentation = document.querySelector(".goal-presentation");
let newGoalPresentation = goalPresentation.cloneNode(true);
newGoalPresentation.removeAttribute("id");


const originalGP = document.getElementById("goal-presentation-sample");
originalGP.parentElement.removeChild(originalGP);

// export default newGoalPresentation;

class TargetVidget {
  constructor(nodeElement) {
    this.target = nodeElement;
  }

  targetContainer = document.getElementById('target-container');

  _addTargetInTargetContainer(target) {
    this.targetContainer.appendChild(target);
  }

  createTarget(obj, func) {
    
    
    const newTargetNode = this.target.cloneNode(true)
    newTargetNode.dataset.id = obj.id
      ;[...newTargetNode.children].forEach(htmlElement => {
        if (htmlElement.className == 'name') {
          htmlElement.textContent = obj.name;
        }
        else if (htmlElement.className == 'create_date') {
          htmlElement.textContent = obj.createDate
        }
        else if (htmlElement.className == 'finish_date') {
          htmlElement.textContent = obj.finishDate
        } else if (htmlElement.className == 'step-details') {
          this._addTargetSteps(htmlElement, obj.listOfSteps)
        } else if (htmlElement.className == 'edit-target-btn') {
          // htmlElement.addEventListener('click', (e)=> console.log('edit', e.target.parentElement.dataset))
          htmlElement.addEventListener('click', (e) => {
            // console.log('edit');
            let id = e.target.parentElement.dataset.id
            func(id)
          })
        } else if (htmlElement.className == 'delete-target-btn') {
          htmlElement.addEventListener('click', (e) => {

            let id = e.target.parentElement.dataset.id
            // console.log('delete', id)

            this.deleteTarget(id)
          })
        }
      })
    this._addTargetInTargetContainer(newTargetNode)
  }
  _addTargetSteps(node, arr) {
    // console.log('noda', node, 'arrSteps', arr)
    arr.forEach(e => node.innerHTML += `<div class="step">${e}</div>`)
  }
  _findTargetById(id) {
    let item = this.targetContainer.querySelector(`[data-id="${id}"]`)
    return item
  }
  deleteTarget(id) {
    let elem = this._findTargetById(id)
    // console.log(elem)
    this.targetContainer.removeChild(elem)
  }
  resetTargetContainer() {
    this.targetContainer.innerHTML = ''
  }


}

export const goalPresentWork = new TargetVidget(newGoalPresentation);
