let goalPresentation = document.querySelector(".goal-presentation");
let newGoalPresentation = goalPresentation.cloneNode(true);
newGoalPresentation.removeAttribute("id");

let targetContainer = document.getElementById('target-container')

const originalGP = document.getElementById("goal-presentation-sample");
originalGP.parentElement.removeChild(originalGP);

export default newGoalPresentation;
class TargetVidget {
  constructor(nodeElement) {
    this.target = nodeElement;
  }
  addTarget() {
    targetContainer.appendChild(this.target.cloneNode(true))
  }
  
}

export const goalPresentWork = new TargetVidget(newGoalPresentation);
