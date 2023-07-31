import { App } from 'vue';
import Modal from './Modal.vue'
import { IConfig } from './modal.type';
import config from './config';
// Modal 对象 组件
Modal.install = (app: App, options: IConfig = {}) => {
    Object.assign(config.style!, options.style || {})
    app.component(Modal.name, Modal)
}


export default Modal