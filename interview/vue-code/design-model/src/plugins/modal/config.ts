import { IConfig } from "./modal.type";

const config: IConfig = {
    style: {
        // 遮罩层透明度
        opacity: 0.7
    },
    props: {
        // 右上角关闭按钮
        close: true,
        maskClose: true
    }
}

export default config