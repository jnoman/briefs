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