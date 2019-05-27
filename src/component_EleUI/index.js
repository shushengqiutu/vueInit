//按需引入elmentUi组件
import Vue from 'vue'
import {
    Button,
    Input,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
} from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.use(Input);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);