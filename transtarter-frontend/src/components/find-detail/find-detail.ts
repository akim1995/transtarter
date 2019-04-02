 import { Vue, Component, Prop } from 'vue-property-decorator'
 import { wrap } from '@vue/web-component-wrapper';

 @Component
 export default class FindDetail extends Vue {
    activeTab:number = 0;
    placeholderText:string[] = [
        'По номеру детали, например 456765',
        'По номеру VIN, например 1HGEG644387712345',
        'По Марке, например Audi'
    ]
 }

// const CustomElement = wrap(Vue, FindDetail);
// window.customElements.define('find-detail', CustomElement);
