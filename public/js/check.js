let checkbtn = document.querySelector('.but');

checkbtn.addEventListener('click', function() {
    let title = document.getElementById("tit").value;
    let desc = document.getElementById("preview").value;


    
    let html = '';
    const toast = document.querySelector('.toast')

    toast.classList.add('active');
    let noteObj = localStorage.getItem('notes') || [];

    let noter = [{ title: title, description: desc }];
    html += `<section><h1>${title} (0)</h1><p>${desc}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`
    var ob2 = JSON.parse(noteObj);


    for (let i = 0; i < ob2.length; i++) {

        html += `<section><h1>${ob2[i].title + ` (${i})`}</h1><p>${ob2[i].description}</p><div class='menuTrack'> <button onclick="delNote(this)" class="trash"><i class="fa-solid fa-trash"></i></button><button onclick="download(this.parentElement.parentElement.querySelector('h1').innerHTML, this.parentElement.parentElement.querySelector('p').innerHTML)" class="download"><i class="fa-solid fa-cloud-arrow-down"></i></button></div></section>`

        noter.push({ title: ob2[i].title, description: ob2[i].description })

    }

    if(!html) html = `<section><h1>No Notes...</h1><p>Create notes by pressing <i>Take Notes</i> and adding a description + title.</p>`

    localStorage.setItem('notes', [JSON.stringify(noter)])
    let grid = document.querySelector('.grid');

    grid.innerHTML = html

    setTimeout(function(){
        if(toast.classList.contains('active')) {
            toast.classList.remove('active')
        }
    }, 3000)
})

const close = document.querySelector('.close')
close.addEventListener('click', function () {
    const toast = document.querySelector('.toast')
    toast.classList.remove('active')
})