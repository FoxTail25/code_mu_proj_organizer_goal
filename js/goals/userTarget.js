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

  getOldTarget(obj) {
    let ind = this._findTargetIndex(obj);
    return this.targetList[ind];
  }
  getNewTarget() {
    return this._target;
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
    createDate: this._getDateString(),
    finishDate: this._getDateString(),
    listOfSteps: [],
  };
  _getDateString(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dayNumber = date.getDate();
    const dateString = `${year}-${this._getTwoSymbol(month)}-${this._getTwoSymbol(dayNumber)}`;
    return dateString;
  }
  _getTwoSymbol(num) {
   return (num += "").padStart(2, 0);
  }
}

export const userTarget = new Targets();
