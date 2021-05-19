import DotsCarousel from './dots_carousel.js';

class DotsArrowCarousel extends DotsCarousel {
  constructor(el, options) {
    // super在构造函数中作为函数调用,表示超类构造函数,且必须在其他语句之前
    super(el, options);
  }

  // 扩展init函数
  init() {
    // 获取左右箭头DOM
    this.arrows = this.slider.querySelector('.arrow');
    this.prevBtn = this.arrows.querySelector('.prev');
    this.nextBtn = this.arrows.querySelector('.next');
    // super作为对象在非静态方法中表示超类原型,可以在其他语句后执行
    super.init();
  }

  // 改写autoPlay函数,取消初始轮播
  autoPlay() {
    this.slider.addEventListener('mouseover', () => {
      clearInterval(this.timer);
    }, false);
    this.slider.addEventListener('mouseleave', () => {
      clearInterval(this.timer);
      this.startPlay();
    }, false)
  }

  // 扩展绑定事件函数
  bindEvent() {
    super.bindEvent();
    this.prevBtn.addEventListener('click', () => {
      this.prev();
    }, false);
    this.nextBtn.addEventListener('click', () => {
      this.next();
    }, false);
  }
}

export default DotsArrowCarousel;