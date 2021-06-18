var english = document.getElementById('en_click'),
    vietnamese = document.getElementById('vi_click'),
    japanese = document.getElementById('ja_click'),
    russian = document.getElementById('ru_click'),
    en_txt = document.querySelectorAll('#en'),
    vi_txt = document.querySelectorAll('#vi'),
    ja_txt = document.querySelectorAll('#ja'),
    ru_txt = document.querySelectorAll('#ru'),
    nb_en = en_txt.length,
    nb_vi = vi_txt.length;
    nb_ja = ja_txt.length;
    nb_ru = ru_txt.length;

english.addEventListener('click', function() {
    langue(english,vietnamese,japanese,russian);
}, false);

vietnamese.addEventListener('click', function() {
    langue(vietnamese,english,japanese,russian);
}, false);

japanese.addEventListener('click', function() {
    langue(japanese,vietnamese,english,russian);
}, false);

russian.addEventListener('click', function() {
    langue(russian,english,vietnamese,japanese);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(vi_txt, nb_vi);
        cacher(ja_txt, nb_ja);
        cacher(ru_txt, nb_ru);
    }
    else if(langueOn.innerHTML == 'Vi'){
        afficher(vi_txt, nb_vi);
        cacher(ja_txt, nb_ja);
        cacher(ru_txt, nb_ru);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'Ja'){
        afficher(ja_txt, nb_ja);
        cacher(ru_txt, nb_ru);
        cacher(en_txt, nb_en);
        cacher(vi_txt, nb_vi);
    }
    else if(langueOn.innerHTML == 'Ru'){
        afficher(ru_txt, nb_ru);
        cacher(en_txt, nb_en);
        cacher(vi_txt, nb_vi);
        cacher(ja_txt, nb_ja);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(english,vietnamese,japanese,russian);
}
init();