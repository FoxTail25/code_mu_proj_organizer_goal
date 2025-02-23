let goalPresentation = document.querySelector(".goal-presentation");
let newGoalPresentation = goalPresentation.cloneNode(true);
newGoalPresentation.removeAttribute("id");


const originalGP = document.getElementById("goal-presentation-sample");
originalGP.parentElement.removeChild(originalGP);

export default newGoalPresentation;
class TargetVidget {
  constructor(nodeElement) {
    this.target = nodeElement;
  }

  targetContainer = document.getElementById('target-container');
  
  _addTargetInTargetContainer(target) {
    console.log("доавлена новая цель", target)
    this.targetContainer.appendChild(target);
  }
  
  createTarget(obj){
    console.log( obj);
    const newTargetNode = this.target.cloneNode(true)
    newTargetNode.dataset.id = obj.id
    console.log(newTargetNode.children);
    [...newTargetNode.children].forEach(htmlElement => {
      if(htmlElement.className == 'name'){
        console.log('добавлено Имя')
        htmlElement.textContent = obj.name;
      }
      else if(htmlElement.className == 'create_date'){
        console.log('добавлено Время начала')
        htmlElement.textContent = obj.createDate
      }
      else if(htmlElement.className == 'finish_date'){
        console.log('добавлено Время конца')
        htmlElement.textContent = obj.finishDate
      } else {

        this._addTargetSteps(htmlElement, obj.listOfSteps)
      }
      // console.dir(htmlElement)
    })
    this._addTargetInTargetContainer(newTargetNode)
  }
  _addTargetSteps(node, arr){
    console.log('noda', node, 'arrSteps', arr)
    arr.forEach(e => node.innerHTML +=`<div class="step">${e}</div>`)
  }
  
}

export const goalPresentWork = new TargetVidget(newGoalPresentation);
