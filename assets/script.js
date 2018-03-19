function startTime() {
    var today = new Date();
    var d = today.getDate();
    var month = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    d + "/" + month + "/" + y + " " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// Add ANIMATIONS
$('.googleSearch').addClass("animated fadeIn");
$('.websites').addClass("animated bounceInLeft");
$('.tools').addClass("animated fadeIn");
$('h1').addClass("animated fadeIn");
