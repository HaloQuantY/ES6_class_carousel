import BaseCarousel from './base_carousel.js';

class DotsCarousel extends BaseCarousel {
  constructor(el, options) {
    super(el, options);
  }
  
  // 改写init函数
  init() {
    // 获得小圆点DOM结构
    this.pagination = this.slider.querySelector('.pagination');
    this.dots = this.pagination.querySelectorAll('span');
    // 显示初始图片
    this.changeDisplayItem();
    // 小圆点绑定事件
    this.bindEvent();
    // 设置自动轮播
    this.autoPlay();
  }

  changeDisplayDot() {
    for (let i=this.minIndex; i<=this.maxIndex; i++) {
      if (i === this.index) {
        this.dots[i].classList.add('active');
      } else {
        this.dots[i].classList.remove('active');
      }
    }
  }

  // 改写切换图片函数, 使其根据index改变显示图片和激活的小圆点
  changeDisplayItem() {
    super.changeDisplayItem();
    this.changeDisplayDot();
  }

  // 初始添加小圆点data-n
  initDataN() {
    for (let i=this.minIndex; i<=this.maxIndex; i++) {
      this.dots[i].setAttribute('data-n', i);
    }
  }

  bindEvent() {
    // 小圆点添加data-n属性
    this.initDataN();
    // 绑定事件
    this.pagination.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'span') {
        const dataN = parseInt(e.target.getAttribute('data-n'));
        this.index = dataN;
        this.changeDisplayItem();
      }
    }, false);
  }

  // 自动轮播
  autoPlay() {
    // 初始设置轮播
    this.startPlay();
    // 移入鼠标, 暂停轮播
    this.slider.addEventListener('mouseover', () => {
      clearInterval(this.timer);
    }, false);
    // 移出鼠标, 开始轮播
    this.slider.addEventListener('mouseleave', () => {
      clearInterval(this.timer);
      this.startPlay();
    }, false)
  }
  // 设置定时器,每2s切换到下张图片
  startPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, 2000);
  }
}

export default DotsCarousel;