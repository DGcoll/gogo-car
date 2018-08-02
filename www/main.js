/*Global*/

function op_new(pg_a) {
    "use strict";
    $.mobile.pageContainer.pagecontainer("change", "#" + pg_a, {transition: "fade"});

};


function bk_pg(){
    window.history.back();
}


function toggle_n(v_l){
    $("."+v_l).slideToggle();
}