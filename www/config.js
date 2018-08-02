var  configurl="http://192.168.1.22/courior/api_user/";
//var configurl="#";
var lang;
var user_id=localStorage.getItem('user_id');
var user_mobile=localStorage.getItem('mobile');
var user_name=localStorage.getItem('name');
var user_type=localStorage.getItem('type');
function logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    localStorage.removeItem("mobile");
    localStorage.removeItem("type");
    window.location="account.html";

}

if (localStorage.getItem('lang')==null){
      lang="AR";

}else{
      lang=localStorage.getItem('lang');

}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
var order_id=localStorage.getItem('order_id');

if (order_id==null){
    localStorage.setItem('order_id',makeid());

}




 function back_btn() {
    window.history.back();
}


