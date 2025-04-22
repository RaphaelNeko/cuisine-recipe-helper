const cookbooksContainer = document.getElementById('cookbooks-container');
const cookbook = document.getElementById('cookbook-modal');

initializeCookbooks();
function initializeCookbooks() {
	var maxCookbook = 12;
	for (let index = 0; index < maxCookbook; index++) {
		getCookbookData(index).then(cookbook => {
			generateCookbook(index, cookbook.bookName, cookbook.bookIcon, cookbook.bookStyle);
		});
	}
}

function generateCookbook(index, bookName, bookIcon, bookStyle) {
	const root = document.createElement('a');
	if (bookStyle.includes('large')) {
		root.classList.add('large');
	}
	else if (bookStyle.includes('dots')) {
		root.classList.add('dots');
	}
	else if (bookStyle.includes('special')) {
		root.classList.add('special');
	}
	else {
		root.classList.add('basic');
	}
	root.setAttribute('onclick', `openCookbook(${index})`);

	const bookImg = document.createElement('img');
	bookImg.src = `assets/img/cookbooks/${bookStyle}.png`;
	root.append(bookImg);

	const iconImg = document.createElement('img');
	iconImg.classList.add('icon');
	iconImg.src = `assets/img/cookbooks/icons/${bookIcon}.png`;
	root.append(iconImg);

	const bookP = document.createElement('p');
	const bookText = document.createTextNode(bookName);
	bookP.append(bookText);
	root.append(bookP);

	const countP = document.createElement('p');
	countP.classList.add('count');
	const countText = document.createTextNode('0/4');
	countP.append(countText);
	root.append(countP);

	cookbooksContainer.append(root);
}

async function getCookbookData(index) {
	try {
		const response = await fetch('assets/recipes.json');
		if (!response.ok) {
			throw new Error(`Failed to load recipes data: ${response.statusText}`);
		}

		const recipesData = await response.json();

		return recipesData.cookbooks[index] || null;
	} catch (error) {
		console.error('Error fetching recipes data:', error);
		return null;
	}
}

function openCookbook(index) {
	getCookbookData(index).then(cookbookData => {
		document.getElementById('book-title').innerText = cookbookData.bookName;
	});
	cookbook.classList.add('opened');
}

function closeCookbook() {
	cookbook.classList.remove('opened');
}