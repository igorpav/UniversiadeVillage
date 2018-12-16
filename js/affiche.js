var visible = true;
function show() {
    if(visible) {
        document.getElementById('noneDisplay').style.display = 'none';
        visible = false;
    } else {
        document.getElementById('noneDisplay').style.display = 'block';
        visible = true;
    }
}
