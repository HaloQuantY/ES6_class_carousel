import { default_options } from './default_options.js';

class BaseCarousel {
  constructor(el, options) {
    // 获得最终options设置,使用展开运算符在大括号中进行对象展开
    // 默认对象写在前,用户自定义设置写在后,重复设置被用户自定义设置覆盖
    const { sliderNumber, startIndex } = {...default_options, ...options};

    // 根据图片数量设置最大最小index
    this.minIndex = 0;
    this.maxIndex = sliderNumber - 1;
    // 根据初始index设置当前index
    this.index = startIndex;


    // 获得DOM元素
    const slider = el.querySelector('.slider');
    const sliderContent = slider.querySelector('.slider-content');
    const sliderItems = sliderContent.querySelectorAll('.slider-item');
    // DOM元素赋值给实例
    this.slider = slider;
    this.sliderContent = sliderContent;
    this.sliderItems = sliderItems;

    // 初始化
    this.init();
  }

  init() {
    // 显示初始图片
    this.changeDisplayItem();
  }

  // 切换到下张图片
  next() {
    // 更新index
    this.index++;
    if (this.index > this.maxIndex) {
      this.index = this.minIndex;
    }
    // 更新显示图片
    this.changeDisplayItem();
  }

  // 切换到上张图片
  prev() {
    // 更新index
    this.index--;
    if (this.index < this.minIndex) {
      this.index = this.maxIndex;
    }
    // 更新显示图片
    this.changeDisplayItem();
  }

  // 根据index更新显示图片
  changeDisplayItem() {
    // 排他操作, 对slideritem中item判断
    for (let i=this.minIndex; i<=this.maxIndex; i++) {
      // 顺序和index相同的item添加slider-item-active类
      // 顺序和index不同的item删除slider-item-active类
      if (i === this.index) {
        this.sliderItems[i].classList.add('slider-item-active');
      } else {
        this.sliderItems[i].classList.remove('slider-item-active');
      }
    }
  }
};

export default BaseCarousel;