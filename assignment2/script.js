const video = document.querySelector("#custom-video-player");

const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

// Mute and unmute button added to allow users to mute and still watch the video if they can't listen to the sound at the time.
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteIcon = document.querySelector("#mute-unmute-icon");
console.log(muteUnmuteIcon);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (video.muted) {
    muteUnmuteButton.style.backgroundColor = "#77baa5";
    muteUnmuteIcon.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    video.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#8879bd";
    muteUnmuteIcon.src =
      "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    video.muted = true;
  }
}

// Full screen button to allow viewers to watch the music video in full view without the distractions of the website/other things on their browser.
video.addEventListener("dblclick", goFullscreen);

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Fast Forward  https://www.youtube.com/watch?v=gyUx8d49fJQ

const forwardButton = document.querySelector("#forward-button");
console.log(forwardButton);

forwardButton.addEventListener("mousedown", fastForward);
function fastForward() {
  video.currentTime += 4.0;
}

forwardButton.addEventListener("mouseup", stopForward);
function stopForward() {
  video.playbackRate = 1.0;
}

//Rewind https://stackoverflow.com/questions/65517594/how-to-implement-fast-forward-functionality-for-an-audio-player-using-javascript
const rewindButton = document.querySelector("#rewind-button");
console.log(rewindButton);

rewindButton.addEventListener("mousedown", rewind);
function rewind() {
  video.currentTime += -4;
}

rewindButton.addEventListener("mouseup", stopRewind);
function stopRewind() {
  video.playbackRate = 1.0;
}

//Replay
const replayButton = document.querySelector("#replay-button");
console.log(replayButton);

replayButton.addEventListener("click", replayVideo);
function replayVideo() {
  video.currentTime = 0;
  video.play();
}
