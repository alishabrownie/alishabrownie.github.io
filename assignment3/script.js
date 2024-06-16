const donutVideo = document.querySelector("#donut-video");
console.log(donutVideo);

donutVideo.addEventListener("mouseover", playVideo);
donutVideo.addEventListener("mouseout", stopVideo);

// function playVideo() {
//   donutVideo.play();
// }

// function stopVideo() {
//   donutVideo.pause();
// }

function playVideo(event) {
  event.target.play();
}

function stopVideo(event) {
  event.target.pause();
}

//This code makes it so when you hover over the image with your mouse the video plays.
//When you take your mouse off the video the video pauses.
//This shows the user more vivid imagery of what the recipes outcome will be, making them more likely to want to try it out for themselves.

const appleVideo = document.querySelector("#apple-video");
console.log(appleVideo);

appleVideo.addEventListener("mouseover", playVideo);
appleVideo.addEventListener("mouseout", stopVideo);

function playVideo(event) {
  event.target.play();
}

function stopVideo(event) {
  event.target.pause();
}

const bananaVideo = document.querySelector("#banana-video");
console.log(bananaVideo);

bananaVideo.addEventListener("mouseover", playVideo);
bananaVideo.addEventListener("mouseout", stopVideo);

function playVideo(event) {
  event.target.play();
}

function stopVideo(event) {
  event.target.pause();
}
