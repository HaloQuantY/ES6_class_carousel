import BaseCarousel from './base_carousel.js';

class TabCarousel extends BaseCarousel {
  constructor(el, options) {
    // 调用超类BaseCarousel构造函数
    super(el, options);
  }

  // 初始化函数,会在构造函数中调用
  init() {
    // 获得选项卡DOM元素
    this.pagination = this.slider.querySelector('.pagination');
    this.tabs = this.pagination.querySelectorAll('span');
    // 显示初始图片
    this.changeDisplayItem();
    this.bindEvent(this.pagination);
  }

  // 切换激活的图片和tab选项
  changeDisplayItem() {
    super.changeDisplayItem();
    this.changeDisplayTab();
  }

  // 切换激活的tab选项
  changeDisplayTab() {
    for (let i=this.minIndex; i<=this.maxIndex; i++) {
      if (i === this.index) {
        this.tabs[i].classList.add('active');
      } else {
        this.tabs[i].classList.remove('active');
      }
    }
  }

  // 为选项卡span添加data-n属性
  initDataN() {
    for (let i=this.minIndex; i<=this.maxIndex; i++) {
      this.tabs[i].setAttribute('data-n', i);
    }
  }

  // 绑定事件
  bindEvent(pagination) {
    // 添加data-n自定义属性,以便绑定事件使用
    this.initDataN();
    // 绑定事件,点击选项卡显示相应图片
    pagination.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'span') {
        // 获得点击选项卡的data-n属性值
        const dataN = parseInt(e.target.getAttribute('data-n'));
        // 将index设为获得到的data-n
        this.index = dataN;
        // 切换显示图片
        this.changeDisplayItem();
      }
    }, false);
  }
}

export default TabCarousel;