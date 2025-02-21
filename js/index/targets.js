import { nanoid } from '../utils/nanoid/nanoid.js';

class Targets {
	targetList = [];
	setTargetList(arr) {
		this.targetList = [...arr]
	};
	targetListAddTarget(obj) {
		this.targetList.push(obj.id = nanoid())
	};
	targetListCheckTarget(obj) {
		let nameArr = this.targetList.map(e => e.name)
		return nameArr.includes(obj.name)
			? true
			: false
	};
	targetListDeletTarget(obj) {
		if(this.targetListCheckTarget(obj)) {

		}
	}

	target = {
		id:'',
		name: '',
		createDate: '',
		finishDate: '',
		ListOfSteps: [],
	}
}