function openPopup(videoUrl) {
    var popup = document.getElementById("video-popup");
    var videoFrame = document.getElementById("popup-video");

    if (videoFrame && popup) {
        videoFrame.src = videoUrl;
        popup.style.display = "flex";
    }
}

function closePopup() {
    var popup = document.getElementById("video-popup");
    var videoFrame = document.getElementById("popup-video");

    if (videoFrame && popup) {
        videoFrame.src = "";
        popup.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var cartoons = document.querySelectorAll(".cartoon");

    cartoons.forEach(function(cartoon) {
        cartoon.addEventListener("click", function() {
            var videoUrl = this.getAttribute("data-video");
            if (videoUrl) {
                openPopup(videoUrl);
            }
        });
    });

    document.getElementById("close-popup").addEventListener("click", closePopup);
});