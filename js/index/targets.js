import { nanoid } from "../utils/nanoid/nanoid.js";

class Targets {
  targetList = [];

  setTargetList(arr) {
    this.targetList = [...arr];
  };
  getTargetList() {
    return this.targetList;
  };

  _findTargetIndex(obj) {
    let index;
    this.getTargetList().forEach((elem, ind) => {if(elem.id == obj.id) index = ind});
    return index;    
  }

  addTarget(obj) {
    let newTarget = { ...this._target, ...obj };
    newTarget.id = nanoid();
    this.targetList.push(newTarget);
  };
  deletTarget(obj) {
    this.targetList.splice(this._findTargetIndex(obj), 1);
  }
  updateTarget(obj) {
    let ind = this._findTargetIndex(obj);
    this.targetList[ind] = obj;
  };

  _target = {
    id: "",
    name: "",
    createDate: new Date(),
    finishDate: "",
    ListOfSteps: [],
  };
}

export const userTarget = new Targets();
