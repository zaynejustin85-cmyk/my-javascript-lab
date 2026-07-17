const banner = document.getElementById("banner-text");
const updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener("click", changeBanner);

function changeBanner() {
    banner.innerHTML = "Updated Banner";
}
