var a = 0;

function SetImage() {
    switch(a) {
        case 0:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg2.webp)";
            a = 1;
            break;
        case 1:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg3.webp)";
            a = 2;
            break;
        case 2:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg4.webp)";
            a = 3;
            break;
        case 3:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg5.webp)";
            a = 4;
            break;
        case 4:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg6.webp);";
            a = 5;
            break;
        case 5:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg7.webp);";
            a = 6;
            break;
        case 6:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg8.webp);";
            a = 7;
            break;
        case 7:
            document.getElementById('general-container').style.cssText = "background-image: url(/img/bg1.webp);";
            a = 0;
            break;
    }
}

setInterval(SetImage, 10 * 1000);