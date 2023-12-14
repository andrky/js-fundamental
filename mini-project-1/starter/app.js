const changeTitle = title => {
  const heading = document.querySelector('.heading-title');

  if (typeof title == 'string') {
    heading.innerHTML = title; 
  } else {
    alert('Tidak bisa rubah judul')
  }
}

changeTitle("Keren Gan");