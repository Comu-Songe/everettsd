function isMobileDevice() {
    return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}

if (isMobileDevice()) {
    window.location.href = "/mobile.html";
}