    var Modal = document.getElementById("connection");
    var btn = document.getElementById("btn10");
    var btn_clos = document.getElementById("btn12");
    var btn_menu=document.getElementById("btn_menu");
    var btn_close=document.getElementById("btn_close");
    var menu1=document.getElementById("menu1");

    btn.onclick = function()
    {
        Modal.style.display = "inline";
    }
    btn_clos.onclick = function()
    {
       Modal.style.display = "none";
    }
    window.onclick = function()
    {
        if(event.target == Modal)
        {
            Modal.style.display ="none";
        }
    }
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



    // window.addEventListener("resize", function() {
    // if (window.matchMedia("(min-width: 1190px)").matches) {
    //     btn_menu.style.display="none";
    //     btn_close.style.display="none";
    //     menu1.style.display="none";
    //  }
    //  else
    //  {
    //     btn_menu.style.display="inline";
    //     btn_close.style.display="none";
    //     menu1.style.display="none";
    //  }
    // });


    // var lang=document.getElementById("lang");
    // var table=document.getElementById("lang1");
    // lang.onmouseover =function()
    // {
    //     table.style.display ="block";
    // }
    // lang.onmouseout =function()
    // {
    //     table.style.display ="block";
    // }