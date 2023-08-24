const addButton=document.querySelector('#add');

const updateLSData = () => {
    const textareaData= document.querySelectorAll('textarea');
    const notes= [];
    textareaData.forEach((note)=>{
       return notes.push(note.value);

    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote=(text='') =>{

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
        <div class="main ${text? "":"hidden"}"></div>
        <textarea class=" ${text? "hidden":""} "></textarea> `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    document.body.appendChild(note);

    //getting references
    const editButton= note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv= note.querySelector('.main');
    const textarea= note.querySelector('textarea');

    deleteButton.addEventListener('click',()=>{
        note.remove();
    })

    textarea.value=text;
    mainDiv.innerHTML=text;

    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    textarea.addEventListener('change',()=>{
        const value= event.target.value;
        mainDiv.innerHTML=value;

        updateLSData();
    })
}

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note)=>addNewNote(note)) };


addButton.addEventListener("click" , ()=>addNewNote());