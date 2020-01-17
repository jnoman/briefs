    var btn_menu=document.getElementById("NJE_btn1");
    var btn_close=document.getElementById("NJE_btn2");
    var menu1=document.getElementById("NJE_menu");

    btn_menu.onclick=function()
    {
        btn_menu.style.display="none";
        btn_close.style.display="inline";
        menu1.style.display="inline";
    }
    btn_close.onclick=function()
    {
        btn_menu.style.display="inline";
        btn_close.style.display="none";
        menu1.style.display="none";
    }

function validation_email()
{
    var email=document.getElementById("AB-srch").value;
    var reg=/^[a-zA-Z0-9._-]{5,}\@[a-z0-9._-]{5,7}\.[a-z]{2,3}$/;
    if(!reg.test(email))
    {
        alert("Votre e-mail adresse est invalide!");
    }
    else
    {
        alert("Votre adresse e-mail est valide");
    }
}