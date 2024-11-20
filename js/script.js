"use strict"


document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
}
const menuLinks = document.querySelectorAll('.menu__link');

// Додаємо слухача події для кожного елемента меню
menuLinks.forEach(link => {
	link.addEventListener('click', function () {
		// Видаляємо клас 'active' з усіх елементів
		menuLinks.forEach(item => item.classList.remove('active'));
		// Додаємо клас 'active' до натиснутого елемента
		link.classList.add('active');
	});
});
const icons = document.querySelectorAll('.icon-menu');
icons.forEach(icon => {
	icon.addEventListener('click', (event) => {
		icon.classList.toggle("active");
	});
});

// let arrow = document.getElementById("arrow-1");

// console.log(arrow.getTotalLength());

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 50) { // Кількість пікселів, після яких змінюється фон
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});


document.getElementById('searchIcon').addEventListener('click', function () {
	const searchContainer = document.querySelector('.header__search');
	searchContainer.classList.toggle('active');
});


const swiperFeedbacks = new Swiper(".hero__swiper", {
	loop: true,
	autoplay: true,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

document.addEventListener("DOMContentLoaded", function () {
	// Отримуємо всі елементи пагінації
	const paginationLinks = document.querySelectorAll('.pagination__link');

	// Перевірка, чи існують елементи пагінації
	if (paginationLinks.length > 0) {
		// Додаємо обробник події на кожен елемент
		paginationLinks.forEach(link => {
			link.addEventListener('click', function (event) {
				// Перешкоджаємо переходу по посиланню
				event.preventDefault();

				// Видаляємо клас 'active' з усіх елементів пагінації
				paginationLinks.forEach(link => link.classList.remove('active'));

				// Додаємо клас 'active' до поточного елемента
				this.classList.add('active');
			});
		});
	} else {
		console.log('Елементи пагінації не знайдені.');
	}
});

document.addEventListener("DOMContentLoaded", function () {
	function moveElements() {
		let screenWidth = window.innerWidth;
		let elementsToMove = document.querySelectorAll("[data-da]");

		elementsToMove.forEach(function (element) {
			let data = element.getAttribute("data-da").split(",");
			if (data.length === 3) {
				let destinationSelector = data[0].trim();
				let order = parseInt(data[1].trim());
				let requiredScreenWidth = parseInt(data[2].trim());
				let destination = document.querySelector(destinationSelector);

				if (!destination) return;

				if (screenWidth <= requiredScreenWidth && !element.classList.contains("moved")) {
					if (order === 1) {
						destination.insertBefore(element, destination.firstChild);
					} else {
						var previousElement = destination.children[order - 2];
						if (previousElement) {
							destination.insertBefore(element, previousElement.nextSibling);
						} else {
							destination.appendChild(element);
						}
					}
					element.classList.add("moved");
				} else if (screenWidth > requiredScreenWidth && element.classList.contains("moved")) {
					let initialParent = document.querySelector(".header__container");
					initialParent.appendChild(element);
					element.classList.remove("moved");
				}
			}
		});
	}

	moveElements();

	window.addEventListener("resize", function () {
		moveElements();
	});
});

<<<<<<< HEAD
=======
// function toggleSidebar() {
// 	const sidebar = document.querySelector('.sidebar');  // Отримуємо елемент сайдбару
// 	sidebar.classList.toggle('visible');  // Додаємо або видаляємо клас 'visible'

// 	// Якщо сайдбар став видимим, додаємо обробник події на кліки поза сайдбаром
// 	if (sidebar.classList.contains('visible')) {
// 		document.addEventListener('click', handleClickOutside);  // Додаємо обробник події
// 	} else {
// 		// Якщо сайдбар приховуваний, видаляємо обробник події
// 		document.removeEventListener('click', handleClickOutside);
// 	}
// }

// function handleClickOutside(event) {
// 	const sidebar = document.querySelector('.sidebar');
// 	if (!sidebar.contains(event.target) && !event.target.closest('.filter-icon')) {
// 		sidebar.classList.remove('visible');
// 		document.removeEventListener('click', handleClickOutside);
// 	}
// }
>>>>>>> 4bf9ddcf01791bf600eda7930ab9101499c87a2e


document.querySelectorAll('.custom-select').forEach(select => {
	const trigger = select.querySelector('.custom-select__trigger span');
	const options = select.querySelectorAll('.custom-select__option');

	// Відкриття/закриття списку
	select.querySelector('.custom-select__trigger').addEventListener('click', () => {
		select.classList.toggle('open');
	});

	// Вибір опції
	options.forEach(option => {
		option.addEventListener('click', () => {
			// Оновлення тексту тригера
			trigger.textContent = `Sort by: ${option.textContent.trim()}`;
			// Закриття списку
			select.classList.remove('open');
		});
	});

	// Закриття списку при кліку за межами
	document.addEventListener('click', (e) => {
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const sizeItems = document.querySelectorAll('.size__item');
	const clearButton = document.querySelector('.item-sidebar__clear-btn');

	// Перевіряємо наявність елементів
	if (!sizeItems.length || !clearButton) return;

	const updateClearButtonVisibility = () => {
		// Перевіряємо, чи є активні розміри
		const hasActiveSizes = Array.from(sizeItems).some(item => item.classList.contains('active'));
		clearButton.hidden = !hasActiveSizes; // Показуємо або ховаємо кнопку залежно від стану
	};

	sizeItems.forEach(item => {
		item.addEventListener('click', () => {
			// Перемикаємо активний стан кнопки
			item.classList.toggle('active');
			updateClearButtonVisibility(); // Оновлюємо видимість кнопки Clear
		});
	});

	clearButton.addEventListener('click', () => {
		// Знімаємо клас active з усіх кнопок
		sizeItems.forEach(item => item.classList.remove('active'));
		updateClearButtonVisibility(); // Ховаємо кнопку Clear
		console.log('All sizes cleared!');
	});

	updateClearButtonVisibility(); // Перевіряємо стан кнопки при завантаженні сторінки
});

<<<<<<< HEAD
=======

>>>>>>> 4bf9ddcf01791bf600eda7930ab9101499c87a2e
// Отримуємо всі посилання категорій
const categoryLinks = document.querySelectorAll('.item-sidebar__link');

// Отримуємо всі елементи колекції
const collectionItems = document.querySelectorAll('.item-collection');

// Отримуємо сайдбар
const sidebar = document.querySelector('.sidebar');  // Заміни '.sidebar' на клас чи id свого сайдбару

// Функція для відкриття/закриття сайдбару
function toggleSidebar() {
	sidebar.classList.toggle('visible');  // Додаємо або видаляємо клас 'visible'

	// Якщо сайдбар став видимим, додаємо обробник події на кліки поза сайдбаром
	if (sidebar.classList.contains('visible')) {
		document.addEventListener('click', handleClickOutside);  // Додаємо обробник події
	} else {
		// Якщо сайдбар приховуваний, видаляємо обробник події
		document.removeEventListener('click', handleClickOutside);
	}
}

// Обробник події для кліків поза сайдбаром
function handleClickOutside(event) {
	// Перевіряємо, чи клікав користувач поза сайдбаром і поза кнопкою відкриття
	if (!sidebar.contains(event.target) && !event.target.closest('.filter-icon')) {
		sidebar.classList.remove('visible');  // Приховуємо сайдбар
		document.removeEventListener('click', handleClickOutside);  // Видаляємо обробник події
	}
}

// Додаємо обробники подій до посилань категорій
categoryLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();  // Запобігаємо стандартній поведінці

		// Видаляємо клас 'active' з усіх посилань
		categoryLinks.forEach(link => link.classList.remove('active'));

		// Додаємо клас 'active' до натиснутого посилання
		link.classList.add('active');

		// Отримуємо вибрану категорію
		const selectedCategory = link.getAttribute('data-category');

		// Показуємо/приховуємо елементи колекції
		collectionItems.forEach(item => {
			const itemCategory = item.getAttribute('data-category');

			// Якщо вибрана категорія 'all' або категорія співпадає, показуємо
			if (selectedCategory === 'all' || itemCategory === selectedCategory) {
				item.style.display = 'flex';
			} else {
				item.style.display = 'none';
			}
		});

		// Закриваємо сайдбар після вибору категорії
		sidebar.classList.remove('visible');  // Приховуємо сайдбар
		document.removeEventListener('click', handleClickOutside);  // Видаляємо обробник події
	});
});


//=======================
// document.addEventListener('scroll', () => {
// 	const filterIcon = document.querySelector('.filter-icon');

// 	// Перевірка на наявність елемента
// 	if (!filterIcon) return;

// 	const scrollThreshold = 50; // Скільки пікселів потрібно прокрутити вниз, щоб додати клас

// 	if (window.scrollY > scrollThreshold) {
// 		filterIcon.classList.add('scrolled');
// 	} else {
// 		filterIcon.classList.remove('scrolled');
// 	}
// });

// document.addEventListener('scroll', () => {
// 	const filterIcon = document.querySelector('.sidebar');
// 	const scrollThreshold = 50; // Скільки пікселів потрібно прокрутити вниз, щоб додати клас

// 	if (filterIcon) { // Перевіряємо, чи елемент існує
// 		if (window.scrollY > scrollThreshold) {
// 			filterIcon.classList.add('scrolled');
// 		} else {
// 			filterIcon.classList.remove('scrolled');
// 		}
// 	}
// });



//==================



document.addEventListener('DOMContentLoaded', () => {
	// Знаходимо всі елементи
	const colorItems = document.querySelectorAll('.color__item');
	const clearButton = document.querySelector('.item-sidebar__clear-btn--color');


	// Перевіряємо, чи є кольори перед додаванням обробників
	if (colorItems.length > 0) {
		colorItems.forEach(item => {
			item.addEventListener('click', () => {
				// Тоглимо класи для активних елементів
				item.classList.toggle('active');
				const colorBlock = item.querySelector('.color__color');
				const colorName = item.querySelector('.color__name');

				// Перевіряємо наявність дочірніх елементів перед зміною класів
				if (colorBlock) colorBlock.classList.toggle('active');
				if (colorName) colorName.classList.toggle('active');

				updateClearButtonVisibility(); // Оновлюємо стан кнопки
			});
		});
	}

	// Додаємо обробник для кнопки "Очистити", якщо вона існує
	if (clearButton) {
		clearButton.addEventListener('click', () => {
			colorItems.forEach(item => {
				item.classList.remove('active');
				const colorBlock = item.querySelector('.color__color');
				const colorName = item.querySelector('.color__name');

				// Перевіряємо наявність дочірніх елементів перед видаленням класів
				if (colorBlock) colorBlock.classList.remove('active');
				if (colorName) colorName.classList.remove('active');
			});
			updateClearButtonVisibility(); // Оновлюємо стан кнопки
			console.log('All colors cleared!');
		});
	}

});




//====================
document.addEventListener('DOMContentLoaded', function () {
	// Отримуємо елементи
	const clearButton = document.querySelector('.item-sidebar__clear-btn--price');
	const checkboxes = document.querySelectorAll('.price__checkbox input');
	const minPriceInput = document.getElementById('min-price');
	const maxPriceInput = document.getElementById('max-price');
	const applyButton = document.querySelector('.custom-range__button');

	// Функція для очищення фільтрів
	function clearFilters() {
		if (!clearButton || !checkboxes || !minPriceInput || !maxPriceInput) return;

		checkboxes.forEach(checkbox => (checkbox.checked = false));
		minPriceInput.value = '';
		maxPriceInput.value = '';
		updateClearButtonVisibility();
	}

	// Функція для оновлення видимості кнопки очищення
	function updateClearButtonVisibility() {
		if (!clearButton || !checkboxes || !minPriceInput || !maxPriceInput) return;

		const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
		clearButton.hidden = !anyChecked && !minPriceInput.value && !maxPriceInput.value;
	}

	// Перевіряємо наявність елементів перед додаванням обробників
	if (checkboxes) {
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('change', function () {
				updateClearButtonVisibility();
			});
		});
	}

	if (minPriceInput && maxPriceInput) {
		minPriceInput.addEventListener('input', updateClearButtonVisibility);
		maxPriceInput.addEventListener('input', updateClearButtonVisibility);
	}

	if (applyButton) {
		applyButton.addEventListener('click', function () {
			const minPrice = parseInt(minPriceInput?.value, 10);
			const maxPrice = parseInt(maxPriceInput?.value, 10);

			console.log(`Filtering products from ₦${minPrice || 0} to ₦${maxPrice || 0}`);
			// Додайте функціонал фільтрації
		});
	}

	if (clearButton) {
		clearButton.addEventListener('click', clearFilters);
	}

<<<<<<< HEAD
=======
	// Ініціалізація видимості кнопки очищення
	updateClearButtonVisibility();
>>>>>>> 4bf9ddcf01791bf600eda7930ab9101499c87a2e
});

document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.collection__item');
	const paginationLinks = document.querySelectorAll('.pagination__link');
	// Визначаємо кількість айтемів на сторінці: 16 для index.html, 9 для інших сторінок
	const itemsPerPage = window.location.pathname.includes('index.html') ? 16 : 12;
	const collection = document.querySelector('.collection'); // Блок з айтемами

	function showPage(page) {
		const start = (page - 1) * itemsPerPage;
		const end = start + itemsPerPage;

		items.forEach((item, index) => {
			item.classList.remove('visible');
			if (index >= start && index < end) {
				item.classList.add('visible');
			}
		});

		paginationLinks.forEach(link => link.classList.remove('active'));
		paginationLinks[page - 1].classList.add('active');
	}

	paginationLinks.forEach((link, index) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			showPage(index + 1);

			// Прокрутка до блоку .collection тільки при кліку
			collection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});

	// Показати першу сторінку за замовчуванням, без прокрутки
	showPage(1);
});

