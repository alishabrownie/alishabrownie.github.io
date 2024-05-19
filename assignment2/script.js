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

// Mute and unmute button:
// I added this to allow users to mute the sound and still watch the video if they can't listen to the sound at the time.
// This means if they find the website while they are in a setting where they can't play the sound out loud, they have easy access turn the sound off.
// If this was not readily available it could result in the user clicking off the site and not interacting with the artist's music.
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

// Full screen button:
// I added this to allow viewers to watch the music video in full view without the distractions of the website/other things on their browser.
// It helps to immerse the viewer in the content of the video, providing a more engaging experience.
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

// Fast Forward - Additional interactive feature
// I added both a forward and rewind button so that the user could easily navigate to different areas of the video.
// This means if they really like a certain part or miss something and want to rewatch it they easily forward or rewind to that section.
// At first I used this tutorial for the forward button: https://www.youtube.com/watch?v=gyUx8d49fJQ
// They used play back rate to make it so when you hold down the mouse the video increases in speed.
// I ended up going with this method: https://stackoverflow.com/questions/65517594/how-to-implement-fast-forward-functionality-for-an-audio-player-using-javascript
// This adds seconds to the video's current time every time you click.
// I like this better because it lets the user navigate the video a bit quicker and also you can still foward/rewind when the video is paused so they don't have to listen to harsh cuts in sound.

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

//Rewind
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

//Replay button:
//I added this function so that if the user hopefully really loves the music video, they can replay it and watch again without having to rewind all the way to the start.
//I used this method: https://stackoverflow.com/questions/16646648/html5-reset-video-and-play-again
// This makes it so the video goes back to the starting time when you click the button.
const replayButton = document.querySelector("#replay-button");
console.log(replayButton);

replayButton.addEventListener("click", replayVideo);
function replayVideo() {
  video.currentTime = 0;
  video.play();
}
