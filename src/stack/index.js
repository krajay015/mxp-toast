class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.unshift(record);
  }
  isLength() {
    return this.data.length;
  }
  pop() {
    return this.data.pop();
  }
  init = false;
}

export default Stack;
