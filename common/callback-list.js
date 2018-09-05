export class CallbackList {
  constructor() {
    this.list = [];
  }

  add(callback) {
    let index = this.list.indexOf(callback);
    if (index === -1) {
      this.list.push(callback);
    }
  }

  remove(callback) {
    let index = this.list.indexOf(callback);
    if (index === -1) {
      return;
    }

    this.list.splice(index, 1);
  }

  invoke(...args) {
    this.list.forEach(function(item) {
      item(...args);
    });
  }
}

export default CallbackList;