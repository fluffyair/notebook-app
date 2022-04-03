showNotes()


function delNote(btn) {

        let parent = btn.parentElement.parentElement
        let noteObj = localStorage.getItem('notes') || [];
        var ob2 = JSON.parse(noteObj);
        let splitTitle = parent.querySelector('h1').innerHTML.split(' ');



        let html = '';
        let noter = [];

        for (let i = 0; i < ob2.length; i++) {



            if(parent.querySelector('p').innerHTML == ob2[i].description &&  splitTitle[0] == ob2[i].title && splitTitle[1] == `(${i})`) continue;
            if(splitTitle[1] == `(0)`) html += `<section><h1>${ob2[i].title + ` (${i - 1})`}</h1><p>${ob2[i].description}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`
            else
            html += `<section><h1>${ob2[i].title + ` (${i})`}</h1><p>${ob2[i].description}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`

            noter.push({ title: ob2[i].title, description: ob2[i].description })
        }
    
        localStorage.setItem('notes', [JSON.stringify(noter)])
       
        let grid = document.querySelector('.grid');

        if(!html) html = `<section><h1>No Notes...</h1><p>Create notes by pressing <i>Take Notes</i> and adding a description + title.</p>`
        grid.innerHTML = html
}


function showNotes() {
    let noteObj = localStorage.getItem('notes') || [];

	if(!noteObj || !noteObj[0]) localStorage.setItem('notes', JSON.stringify(noteObj))

    let html = '';
    let obj = [];
    var ob2 = JSON.parse(noteObj);


    for (let i = 0; i < ob2.length; i++) {

        html += `<section><h1>${ob2[i].title + ` (${i})`}</h1><p>${ob2[i].description}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`
    }

    if(!html) html = `<section><h1>No Notes...</h1><p>Create notes by pressing <i>Take Notes</i> and adding a description + title.</p>`


    let grid = document.querySelector('.grid');

    grid.innerHTML = html
}

function addNote() {

}

// ob= [{"title": "test", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error quisquam eveniet, ducimus quas dolore! Explicabo vero in eum consequuntur. Doloremque quo quidem expedita cupiditate ullam fugit reiciendis delectus aliquid?"}, {"title": "test", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error quisquam eveniet, ducimus quas dolore! Explicabo vero in eum consequuntur. Doloremque quo quidem expedita cupiditate ullam fugit reiciendis delectus aliquid?"}, {"title": "test", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error quisquam eveniet, ducimus quas dolore! Explicabo vero in eum consequuntur. Doloremque quo quidem expedita cupiditate ullam fugit reiciendis delectus aliquid?"}, {"title": "test", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error quisquam eveniet, ducimus quas dolore! Explicabo vero in eum consequuntur. Doloremque quo quidem expedita cupiditate ullam fugit reiciendis delectus aliquid?"}]