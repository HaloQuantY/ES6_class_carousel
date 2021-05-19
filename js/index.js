import DotsCarousel from './dots_carousel.js';
import TabCarousel from './tab_carousel.js';
import DotsArrowCarousel from './dots_arrow_carousel.js';

// 依次序创建实例
const dotsC = new DotsCarousel(document.querySelector('.banner'));
const tabsC = new TabCarousel(document.querySelector('.tab'));
// 初始显示图片为第二张
const daC = new DotsArrowCarousel(document.querySelector('.pagination-arrow'), {startIndex: 1});



