import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en-us.json';
import translation_zh from './zh-cn.json';
 
const resources = {
	en: {
		translation: translation_en,
	},
	zh: {
		translation: translation_zh,
	},
};

i18n.use(initReactI18next).init({
	resources,
	// 默认语言  zh/en  中文/英文
	lng: localStorage.getItem('language') || 'zh',
	interpolation: {
		escapeValue: false,
	},
});
 
export default i18n;