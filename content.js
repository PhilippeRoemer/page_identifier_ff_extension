(function () {
    const hostname = window.location.hostname;
    let barColor = null;

    if (hostname === "www.google.com") {
        barColor = "#0000FF";
    } else if (hostname === "www.weather.com") {
        barColor = "#FF0000";
    }

    if (barColor) {
        const bar = document.createElement("div");
        bar.style.position = "fixed";
        bar.style.top = "0";
        bar.style.left = "0";
        bar.style.width = "100%";
        bar.style.height = "5px";
        bar.style.backgroundColor = barColor;
        bar.style.zIndex = "999999";
        bar.style.pointerEvents = "none";

        document.body.appendChild(bar);
    }
})();
