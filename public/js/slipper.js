class TouchBoxInner {
  constructor(root, color, size, delay) {
    this.root = root;
    this.color = color;
    this.size = size;
    this.delay = delay;
    this.elm = document.createElement('div');
  }
  createElm() {
    try {
      this.elm.style.backgroundColor = (this.color === true) ? (this.root.backgroundColor == 'black') ? '(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' : this.color;
      this.elm.style.width = `${this.size}px`;
      this.elm.style.height = `${this.size}px`;
      this.elm.style.borderRadius = '50%';
      this.elm.style.position = 'absolute';
      this.elm.style.animationDuration = this.delay;
    }
    catch (err) {
      console.log(err);
    }
  }
  _init(top, left) {
    try {
      this.root.style.position = 'relative';
      this.root.style.overflow = 'hidden';
      this.createElm();
      this.elm.style.left = `${left}px`;
      this.elm.style.top = `${top}px`;
      this.root.appendChild(this.elm);
      this.elm.classList.add('main');
    }
    catch (er) {
      console.log(er);
    }
  }
}




class TouchBoxOuter extends TouchBoxInner {
  constructor(root, color, size, delay) {
    super(root, color, size, delay);
  }
  _init() {
    try {
      this.root.style.position = 'relative';
      this.createElm();
      this.elm.style.left = `40%`;
      this.elm.style.top = `40%`;
      this.elm.style.transform = 'translate(-45%,-45%)';
      this.root.appendChild(this.elm);
      this.elm.classList.add('main');
    }
    catch (er) {
      console.log(er);
    }
  }
}