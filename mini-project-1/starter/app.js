// Fungsi Mengganti Judul
const changeTitle = (title) => {
	const heading = document.querySelector('.heading-title');

	if (typeof title == 'string') {
		heading.innerHTML = title;
	} else {
		alert('Tidak bisa rubah judul');
	}
};

changeTitle('Todo List');

// Kumpulkan Semua UI Element
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const filterInput = document.querySelector('#filter-input');
const todoList = document.querySelector('#todo-list');
const clearTodos = document.querySelector('#clear-todos');

// Fungsi untuk mentrigger ketika submit akan menjalankan isi dari fungsi
allFunction();
function allFunction() {
	// Mendapatkan todos Dari LocalStorage
	document.addEventListener('DOMContentLoaded', showTodoLocalStorage);

	// Event Melakukan Sumbit Todo
	todoForm.addEventListener('submit', addTodo);

	// Event Delete 1 Todo
	todoList.addEventListener('click', deleteTodo);

	// Event Delete Semua Todo
	clearTodos.addEventListener('click', deleteAllTodo);

	// Event Filter Todo
	filterInput.addEventListener('keyup', filterTodo);
}

// Reusable Codes
// Fungsi Create Element Todo
function createElementTodo(value) {
	// Membuat Element li
	const li = document.createElement('li');

	// Menambahkan Class pada Element li
	li.className = 'todo-item list-group-item d-flex justify-content-between align-items-center mb-1';

	// Menambahkan Children pada Element li
	li.appendChild(document.createTextNode(value));

	// Membuat Element a
	const a = document.createElement('a');

	// Menambahkan Properti href dan class pada ELemet li
	a.href = '#';
	a.className = 'badge badge-danger delete-todo';

	// Menambahkan Children pada Element li
	a.appendChild(document.createTextNode('Delete'));

	// Menambahkan a Menjadi Children li
	li.appendChild(a);

	// Menambahkan Childre li pada todoList
	todoList.appendChild(li);
}

// Fungsi Get Todo From LocalStorage
function getTodoFromLocalStorage() {
	// Create var todos
	let todos;

	if (localStorage.getItem('todos') == null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	return todos;
}

// DOM Functions
// Menambahkan Todo ke LocalStorage
function addTodoLocalStorage(todoInputValue) {
	const todos = getTodoFromLocalStorage();

	todos.push(todoInputValue);

	localStorage.setItem('todos', JSON.stringify(todos));
}

// Menambahkan Todo
function addTodo(e) {
	e.preventDefault();
	if (todoInput.value) {
		createElementTodo(todoInput.value);

		addTodoLocalStorage(todoInput.value);

		todoInput.value = '';
	} else {
		alert('Data tidak boleh kosong');
	}
}

// Menampilkan Todo Berdasarkan LocalStorage
function showTodoLocalStorage() {
	const todos = getTodoFromLocalStorage();

	todos.forEach((todo) => {
		createElementTodo(todo);
	});
}

// Delete 1 Todo
function deleteTodo(e) {
	e.preventDefault();

	// Kondisi melakukan pengecekan target yang di klik apakah memiliki class yang dimaksud
	if (e.target.classList.contains('delete-todo')) {
		// Membuat confirm
		if (confirm('Apakah anda yakin menghapus data?')) {
			// Simpan parent dari target yang di klik
			const parent = e.target.parentElement;

			// Remove parent
			parent.remove();

			deleteTodoFromLocalStorage(parent);
		}
	}
}

function deleteTodoFromLocalStorage(deletedElement) {
	// Mengambil Data Dari LocalStorage
	const todos = getTodoFromLocalStorage();

	// Membandingkan Data Dari LocalStorage Dengan Element yang Akan Di Delete
	todos.forEach((todo, index) => {
		if (deletedElement.firstChild.textContent === todo) {
			todos.splice(index, 1);
		}
	});

	// Set Data yang Sudah Di Perbaharui
	localStorage.setItem('todos', JSON.stringify(todos));
}

// Delete Semua Todo
function deleteAllTodo() {
	todoList.innerHTML = '';

	clearTodoFromLocalStorage();
}

function clearTodoFromLocalStorage() {
	localStorage.clear();
}

// Filter Todo
function filterTodo(e) {
	// Menyimpan Hasil Pengertikan kedalam variable textFilter
	const textFilter = e.target.value.toLowerCase();

	// Menyimpan Hasil Select Semua Element yang Memiliki Class todo-item dan Menyimpannya pada Variable todoItem
	const todoItem = document.querySelectorAll('.todo-item');

	// Melakukan Looping Isi dari Variable todoItem
	todoItem.forEach((item) => {
		// Menyimpan Item dengan firstChild textContent ke Dalam Variable itemText
		const itemText = item.firstChild.textContent.toLowerCase();

		// Kondisi Jika itemText filter dari textFilter !== / Tidak Sama Dengan Satu Tambahkan Style berikut
		if (itemText.indexOf(textFilter) !== -1) {
			item.setAttribute('style', 'display: block');
		}
		// Jika == -1 / tidak ada kecocokan
		else {
			item.setAttribute('style', 'display: none !important');
		}
	});
}
