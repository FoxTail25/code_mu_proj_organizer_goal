
class localStor {
	constructor(name) {
		this.name = name;
	}
	setRecord(data) {
		localStorage.setItem(this.name, this._getString(data));
	}
	getRecord() {
		return this._checkRecord(this.name)
			? this._getParse(localStorage.getItem(this.name))
			: false;
	}

	_checkRecord(name) {
		let answer = true
		
		if (localStorage.getItem(this.name) === null) {
			answer = false
		}
		return answer
	}
	_getString(data) {
		return JSON.stringify(data);
	}
	_getParse(data) {
		return JSON.parse(data);
	}
}

export const localStorageWork = new localStor('userGoals');