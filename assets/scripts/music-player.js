const audioPlayer = document.getElementById('mp-audio-player');
const audioSource = document.getElementById('mp-audio-source');
const musicPlayerText = document.getElementById('music-player-text');
const playPauseButtonIcon = document.getElementById('music-player-play-pause');

var isPlaying = false;
var currentlyPlaying = '';
var currentTrackID = 0;
let totalTracks = 0;

function playPauseButton() {
	isPlaying = !isPlaying;
	if (isPlaying) {
		playPauseButtonIcon.classList.remove('fa-play');
		playPauseButtonIcon.classList.add('fa-pause');
		if (currentlyPlaying == '') {
			loadMusic(0);
		}
		audioPlayer.play();
	}
	else {
		playPauseButtonIcon.classList.remove('fa-pause');
		playPauseButtonIcon.classList.add('fa-play');
		audioPlayer.pause();
	}
}

function skipButton() {
	currentTrackID++;
	if (currentTrackID >= totalTracks) {
		currentTrackID = 0;
	}
	loadMusic(currentTrackID);
}

function previousButton() {
	currentTrackID--;
	if (currentTrackID < 0) {
		currentTrackID = totalTracks - 1;
	}
	loadMusic(currentTrackID);
}

function loadMusic(index) {
	getAudioFileData(index).then(musicData => {
		currentlyPlaying = 'assets/audio/' + musicData.file;
		audioSource.src = currentlyPlaying;
		audioPlayer.load();
		audioPlayer.play();
		musicPlayerText.innerText = '🎵 ' + musicData.name + '\n 🎮 ' + musicData.game;
		if (!isPlaying) {
			isPlaying = true;
			playPauseButtonIcon.classList.remove('fa-play');
			playPauseButtonIcon.classList.add('fa-pause');
		}
	});
}

async function getAudioFileData(index) {
	try {
		const response = await fetch('assets/audio/audio.json');
		if (!response.ok) {
			throw new Error(`Failed to load audio data: ${response.statusText}`);
		}

		const audioData = await response.json();

		return audioData.audioFiles[index] || null;
	} catch (error) {
		console.error('Error fetching audio file data:', error);
		return null;
	}
}

async function initializeAudioPlayer() {
	try {
		const response = await fetch('assets/audio/audio.json');
		if (!response.ok) {
			throw new Error(`Failed to load audio data: ${response.statusText}`);
		}

		const audioData = await response.json();
		totalTracks = audioData.audioFiles.length;
		console.log(`Total tracks loaded: ${totalTracks}`);
	} catch (error) {
		console.error('Error initializing audio player:', error);
	}
}

initializeAudioPlayer();

audioPlayer.addEventListener('ended', () => {
	skipButton();
});

