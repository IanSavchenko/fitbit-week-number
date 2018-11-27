export class CallbackList {
  list: ((arg?: any) => any)[];

  constructor() {
    this.list = [];
  }

  add(callback: () => any) {
    let index = this.list.indexOf(callback);
    if (index === -1) {
      this.list.push(callback);
    }
  }

  remove(callback: () => any) {
    let index = this.list.indexOf(callback);
    if (index === -1) {
      return;
    }

    this.list.splice(index, 1);
  }

  invoke(...args: any[]) {
    this.list.forEach(function(item) {
      item(...args);
    });
  }
}

export default CallbackList;