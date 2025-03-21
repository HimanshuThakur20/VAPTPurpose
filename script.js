alert("cross domain script execution ");
// alert(4*4*4);
// window.location.href = "https://www.google.com";
// meme_modal.js
// meme_modal.js
window.onload = function() {
    const memeUrl = "image.png";
    
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
    
    const img = document.createElement("img");
    img.src = memeUrl;
    img.style.maxWidth = "90vw";
    img.style.maxHeight = "90vh";
    img.style.border = "5px solid white";
    img.style.borderRadius = "10px";
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Ensure the modal is added to the DOM after the page is fully loaded
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener("click", function() {
        modal.remove();
    });
};
