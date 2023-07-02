async function setImageUsingStreaming(imageElementId, imageStream) {
    const arrayBuffer = await imageStream.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);
    document.getElementById(imageElementId).src = url;
}

function myFunction(p1, p2) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = p2;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = p1;
    link.media = 'all';
    head.appendChild(link);
}
function loadScriptInJs(p1) {
    var head = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = p1;
    head.appendChild(js);
}


if ((window.location.href.toLowerCase().includes("/blog") || window.location.href.toLowerCase().includes("/category") || window.location.href.toLowerCase().includes("/page")) && !window.location.href.toLowerCase().includes("panel/blog")) {
    myFunction("/css/blog.css", 15)
} else {
    myFunction("/style.css", 14)
}


