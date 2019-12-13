var Modal = document.getElementById("connection");
    var btn = document.getElementById("btn10");
    var btn_close = document.getElementById("btn12");

    btn.onclick = function()
    {
       Modal.style.display = "block";
    }

    btn_close.onclick = function()
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
    var lang=document.getElementById("lang");
    var table=document.getElementById("lang1");
    lang.onmouseover =function()
    {
        table.style.display ="block";
    }
    lang.onmouseout =function()
    {
        table.style.display ="block";
    }