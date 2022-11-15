
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'tu'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href =  window.location.pathname + '#'+lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('#nav_link-1').innerHTML = langArr['nav_link:nth-child(1)'][hash];
    document.querySelector('#nav_link-2').innerHTML = langArr['nav_link:nth-child(2)'][hash];
    document.querySelector('#nav_link-3').innerHTML = langArr['nav_link:nth-child(3)'][hash];
    document.querySelector('#nav_link-4').innerHTML = langArr['nav_link:nth-child(4)'][hash];
    document.querySelector('#nav_link-5').innerHTML = langArr['nav_link:nth-child(5)'][hash];
    document.querySelector('.section_suptitle').innerHTML = langArr['section_suptitle'][hash];
    document.querySelector('.section_text').innerHTML = langArr['section_text'][hash];
    document.querySelector('.tabone').innerHTML = langArr['tabone'][hash];
    document.querySelector('#li-1').innerHTML = langArr['li:nth-child(1)'][hash];
    document.querySelector('#li-2').innerHTML = langArr['li:nth-child(2)'][hash];
    document.querySelector('#li-3').innerHTML = langArr['li:nth-child(3)'][hash];
    document.querySelector('#li-4').innerHTML = langArr['li:nth-child(4)'][hash];
    document.querySelector('#li-5').innerHTML = langArr['li:nth-child(5)'][hash];
    document.querySelector('#li-6').innerHTML = langArr['li:nth-child(6)'][hash];
    document.querySelector('#section_title').innerHTML = langArr['section_title:nth-child(2)'][hash];

    document.querySelector('#h3').innerHTML = langArr['h3'][hash];
    document.querySelector('.p').innerHTML = langArr['p'][hash];
    document.querySelector('.h3-2').innerHTML = langArr['h3-2'][hash];
    document.querySelector('.p-2').innerHTML = langArr['p-2'][hash];
    document.querySelector('.h3-3').innerHTML = langArr['h3-3'][hash];
    document.querySelector('.p-3').innerHTML = langArr['p-3'][hash];
    document.querySelector('.subscribe__btn').innerHTML = langArr['subscribe__btn'][hash];
    document.querySelector('.footer__title').innerHTML = langArr['footer__title'][hash];
    document.querySelector('#blogs__title-1').innerHTML = langArr['blogs__title:nth-child(1)'][hash];
    document.querySelector('#blogs__title-2').innerHTML = langArr['blogs__title:nth-child(2)'][hash];
    document.querySelector('#blogs__title-3').innerHTML = langArr['blogs__title:nth-child(3)'][hash];
    document.querySelector('.footer__social-content').innerHTML = langArr['footer__social-content'][hash];
    document.querySelector('#footer_span').innerHTML = langArr['footer_span'][hash];



}
changeLanguage();