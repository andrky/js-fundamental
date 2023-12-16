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
todoForm.addEventListener('submit', addTodo);

function addTodo(e) {
	e.preventDefault();

	// Membuat Element li
	const li = document.createElement('li');

	// Menambahkan Class pada Element li
	li.className = 'list-group-item d-flex justify-content-between align-items-center mb-1';

	// Menambahkan Children pada Element li
	li.appendChild(document.createTextNode(todoInput.value));

	// Membuat Element a
	const a = document.createElement('a');

	// Menambahkan Properti href dan class pada ELemet li
	a.href = '#';
	a.className = 'badge badge-danger';

	// Menambahkan Children pada Element li
	a.appendChild(document.createTextNode('Delete'));

	// Menambahkan a Menjadi Children li
	li.appendChild(a);

  todoList.appendChild(li);

	console.log(todoList);
}
