window.onload = function () {
    const defaultUrlHeader = "http://musicapi.leanapp.cn";

    function AjaxRequest(url) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // operationFun(JSON.parse(xhttp.responseText));
                console.log(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    let SignUp_phone=document.getElementById("SignUp_phone");
    // let phones=document.getElementById("phones");
    let SignUp_password=document.getElementById("SignUp_password");
    var SignUp_btn=document.getElementById("SignUp_btn");

    SignUp_btn.onclick=function(){
        console.log("aaa");
        let phone=SignUp_phone.value;
        let password=SignUp_password.value;
        // let phone2=phones.value;
        let dengluurl=
        defaultUrlHeader+"/login/cellphone?"+"phone="+phone+"&"+"password="+password;
        // let fasong=
        // defaultUrlHeader+"/captcha/sent?phone="+phone2;
        AjaxRequest(dengluurl);
        // AjaxRequest(fasong)
    }

    // AjaxRequest()
    
}