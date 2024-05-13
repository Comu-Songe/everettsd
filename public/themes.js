function showContextMenu(event) {
    var contextMenu = document.getElementById("twoclick-menu");
    var menuWidth = contextMenu.offsetWidth;
    var menuHeight = contextMenu.offsetHeight;
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    var posX = mouseX + menuWidth > window.innerWidth ? window.innerWidth - menuWidth : mouseX;
    var posY = mouseY + menuHeight > window.innerHeight ? window.innerHeight - menuHeight : mouseY;

    contextMenu.style.left = posX + scrollX + "px";
    contextMenu.style.top = posY + scrollY + "px";

    contextMenu.classList.add("show"); 
}

function hideContextMenu() {
    var contextMenu = document.getElementById("twoclick-menu");
    contextMenu.classList.remove("show"); 
}

function customAction(action) {
    switch (action) {
        case 'Back':
            window.history.back();
            break;
        case 'Forward':
            window.history.forward();
            break;
        case 'Reload':
            window.location.reload();
            break;
        case 'View Page Source':
            window.open('view-source:' + window.location.href, '_blank');
            break;
        case 'Inspect':
            window.scrollTo(0, 0);
            document.documentElement.dispatchEvent(new KeyboardEvent('keydown',{'key':'Control'}));
            document.documentElement.dispatchEvent(new KeyboardEvent('keydown',{'key':'Shift'}));
            document.documentElement.dispatchEvent(new KeyboardEvent('keydown',{'key':'C'}));
            break;
        case 'Panic Button':
            window.open('https://google.com', '_blank');
            break;
        case 'View All Settings':
            window.location.href = '/settings.html';
            break;
        default:
            break;
    }
}

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    showContextMenu(event);
});

document.addEventListener("dblclick", function(event) {
    event.preventDefault();
});

document.addEventListener("click", function(event) {
    hideContextMenu();
});

window.addEventListener("scroll", function(event) {
    hideContextMenu();
});