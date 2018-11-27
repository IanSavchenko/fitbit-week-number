export class CallbackList {
  public list: Array<(arg?: any) => any>;

  constructor() {
    this.list = [];
  }

  public add(callback: () => any) {
    const index = this.list.indexOf(callback);
    if (index === -1) {
      this.list.push(callback);
    }
  }

  public remove(callback: () => any) {
    const index = this.list.indexOf(callback);
    if (index === -1) {
      return;
    }

    this.list.splice(index, 1);
  }

  public invoke(...args: any[]) {
    this.list.forEach(function(item) {
      item(...args);
    });
  }
}

export default CallbackList;
