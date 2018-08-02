var  configurl="http://10.0.44.33/hack-pro/api/";
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

 function back_btn() {
    window.history.back();
}


