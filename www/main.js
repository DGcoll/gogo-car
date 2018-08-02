/*Global*/

function op_new(pg_a) {
    "use strict";
    $.mobile.pageContainer.pagecontainer("change", "#" + pg_a, {transition: "slide"});

};


function bk_pg(){
    window.history.back();
}


function toggle_n(v_l){
    $("."+v_l).slideToggle();
}

function rem_dh(o_2){
    $(".cs-ac-rd").removeClass("act-class");
    $("."+o_2).addClass("act-class");
}

function rem_d2(d_2){
    $(".lang-dv").removeClass("act-lang");
    $("."+d_2).addClass("act-lang");
}

function rem_a2(a_2){
    $(".lang-dv").removeClass("act-lang-d");
    $("."+a_2).addClass("act-lang-d");
}

function copyDiv() {
    var 
        firstDivContent = document.getElementById('nav-home'),
        Content_1 = document.getElementById('nav-here'),
        Content_2 = document.getElementById('nav-time-out'),
        Content_3 = document.getElementById('nav-here-py');

        Content_1.innerHTML = firstDivContent.innerHTML;
        Content_2.innerHTML = firstDivContent.innerHTML;
        Content_3.innerHTML = firstDivContent.innerHTML;
}
copyDiv();