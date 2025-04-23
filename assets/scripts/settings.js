const settingsMenu = document.getElementById('settings-modal');
const settingWelcomeText = document.getElementById('setting-welcome-text');
const settingSpoiler = document.getElementById('setting-spoilers');
const settingDarkTheme = document.getElementById('setting-dark-theme');

function toggleSettingsVisibility() {
	settingsMenu.classList.toggle('opened');
}

function toggleWelcomeText() {
	settingWelcomeText.classList.toggle('enabled');
	document.body.classList.toggle('hide-welcome');
}

function toggleSpoilers() {
	settingSpoiler.classList.toggle('enabled');
	document.body.classList.toggle('show-spoilers');
}

function toggleDarkTheme() {
	settingDarkTheme.classList.toggle('enabled');
	document.body.classList.toggle('dark-theme');
}