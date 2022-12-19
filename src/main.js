import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import { ElSwitch, ElHeader } from 'element-plus';
// const elComponents = [ElSwitch, ElHeader, ];
import "@/assets/style/font.css";
import { createStore } from 'vuex';

import i18n from "./components/language";

const store = createStore({
    state() {
        return {
            textConfig: {
                title: {
                    Chinese: '新冠疫情流动预测可视化',
                    English: 'COVID-19 STATUS MONITOR'
                },
                home: {
                    Chinese: '初始化',
                    English: 'HOME'
                },
                background: {
                    Chinese: '背景图层',
                    English: 'BACKGROUND'
                },
                team: {
                    Chinese: '团队',
                    English: 'TEAM'
                },
                params: {
                    Chinese: '参数',
                    English: 'PARAMS'
                }
            }
        }
    }
})

const _app = createApp(App);
_app.use(i18n)
_app.use(store);
_app.use(ElementPlus);
_app.mount("#app");

// elComponents.forEach(e => {
//     _app.component(e.name, e);
// })
