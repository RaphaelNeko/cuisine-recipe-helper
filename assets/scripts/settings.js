const settingsMenu = document.getElementById('settings-modal');
const settingWelcomeText = document.getElementById('setting-welcome-text');
const settingSpoiler = document.getElementById('setting-spoilers');
const settingCompletedBooks = document.getElementById('setting-completed-books');
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

function toggleCompletedBooks() {
	settingCompletedBooks.classList.toggle('enabled');
	document.body.classList.toggle('hide-completed-cookbooks');
}

function toggleDarkTheme() {
	settingDarkTheme.classList.toggle('enabled');
	document.body.classList.toggle('dark-theme');
}