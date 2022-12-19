import {createI18n} from 'vue-i18n'
import zh from './zh.js'
import en from './en.js'

const i18n = createI18n({
    locale:'zh',
    globalInjection: true,
    messages:{
        zh:zh,
        en:en
    }
})
export default i18n;