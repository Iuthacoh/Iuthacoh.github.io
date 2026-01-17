let currentLang = 'zh';

function toggleLanguage() {
    const zhElements = document.querySelectorAll('.lang-zh');
    const enElements = document.querySelectorAll('.lang-en');
    const btn = document.getElementById('lang-btn');
    const htmlTag = document.documentElement;

    if (currentLang === 'zh') {
        // Switch to English
        zhElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
        btn.textContent = '中文';
        currentLang = 'en';
        htmlTag.lang = 'en';
    } else {
        // Switch to Chinese
        zhElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
        btn.textContent = 'English';
        currentLang = 'zh';
        htmlTag.lang = 'zh-CN';
    }
}
