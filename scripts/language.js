var english = document.getElementById('en_click'),
    japanese = document.getElementById('ja_click'),
    en_txt = document.querySelectorAll('#en'),
    ja_txt = document.querySelectorAll('#ja'),
    nb_en = en_txt.length,
    nb_ja = ja_txt.length;

english.addEventListener('click', function() {
    langue(english,japanese);
}, false);

japanese.addEventListener('click', function() {
    langue(japanese,english);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(ja_txt, nb_ja);
    }
    else if(langueOn.innerHTML == 'Japanese'){
        afficher(ja_txt, nb_ja);
        cacher(en_txt, nb_en);
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
    langue(english,japanese);
}
init();