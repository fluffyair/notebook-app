const searchBar = document.getElementById("search-bar");
let grid = document.querySelector('.grid');



const filter = () => {
	grid.innerHTML = "";

	const text = searchBar.value.toLowerCase();
	const ob2 = localStorage.getItem('notes')
    const listofnotes = JSON.parse(ob2);


	for (let i = 0; i < listofnotes.length; i++) {
		let title = listofnotes[i].title
		let desc = listofnotes[i].description

		if (title.indexOf(text) !== -1) {
			grid.innerHTML += `<section><h1>${title} (${i})</h1><p>${desc}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`
		} else
        if (desc.indexOf(text) !== -1) {
			grid.innerHTML += `<section><h1>${title} (${i})</h1><p>${desc}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`

		}
	}

	if (grid.innerHTML === "") {
		grid.innerHTML += `<section><h1>No notes found.<h1></section>`;
	}
};

filter();

searchBar.addEventListener("keyup", filter);
