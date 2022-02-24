document.onkeydown = function(e) {
    const { keyCode: c } = e;
    if (e.ctrlKey) {
        switch (c) {
            case 83:
            case 85:
            case 65:
            case 73:
            case 123:
                e.preventDefault();
                break;
        }
    } else {
        if(c === 123) e.preventDefault()
    }
};
window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);