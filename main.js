var a = 0;

function SetImage() {
    switch(a) {
        case 0:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg2.png)";
            a = 1;
            break;
        case 1:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg3.png)";
            a = 2;
            break;
        case 2:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg4.png)";
            a = 3;
            break;
        case 3:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg5.png)";
            a = 4;
            break;
        case 4:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg6.png);";
            a = 5;
            break;
        case 5:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg7.png);";
            a = 6;
            break;
        case 6:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg8.png);";
            a = 7;
            break;
        case 7:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg1.png);";
            a = 0;
            break;
    }
}

setInterval(SetImage, 6000)