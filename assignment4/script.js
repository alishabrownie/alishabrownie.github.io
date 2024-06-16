const donutButton = document.querySelector("#donut-button");
console.log(donutButton);

donutButton.addEventListener("mouseover", playVideo);
donutButton.addEventListener("mouseout", stopVideo);

function playVideo() {
  donutButton.src = "images/donutvid.mp4";
}

function stopVideo() {
  donutButton.src = "images/donut.png";
}
