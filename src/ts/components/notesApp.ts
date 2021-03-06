//@ts-nocheck
const notesApp = () => {
  const submitBtn = document.querySelector(".js-submit");
  const notesContainer = document.querySelector(".js-notes");
  const notesTitle = document.querySelector(".js-title");
  const notesDescription = document.querySelector(".js-description");

  let notes = JSON.parse(localStorage.getItem("notes"));
  if (notes) {
    notes.forEach((element) => {
      addNotes(element);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes();
  });

  function addNotes(note) {
    let newNote = document.createElement("li");
    newNote.classList.add("js-note");

    let titleValue = notesTitle.value;
    let descValue = notesDescription.value;

    if (note) {
      titleValue = note.notesTitle;
      descValue = note.notesDescription;
    }

    if (titleValue) {
      newNote.innerHTML = `
                              <h3 class="notes__item-title | js-text">${titleValue}</h3>
                              <p class="notes__item-description | js-text">${descValue}</p>
                              <button  class="btn notes__item-btn | js-delete">Delete</button>
                              <button  class="btn notes__item-btn | js-edit">Edit</button>

    `;

      notesContainer.appendChild(newNote);
      notesTitle.value = "";
      notesDescription.value = "";

      updateNotes();
    }

    const deleteBtn = newNote.querySelector(".js-delete");
    deleteBtn.addEventListener("click", deleteNotes);
    function deleteNotes() {
      newNote.remove();
      updateNotes();
    }

    const texts = newNote.querySelectorAll(".js-text");
    const editBtn = newNote.querySelector(".js-edit");
    editBtn.addEventListener("click", editNotes);
    function editNotes() {
      texts.forEach((text) => {
        text.contentEditable = true;
      });
      updateNotes();
    }
  }

  function updateNotes() {
    let note = document.querySelectorAll(".js-note");
    let noteArr = [];
    note.forEach((element) => {
      noteArr.push({
        notesTitle: element.children[0].innerText,
        notesDescription: element.children[1].innerText,
      });
    });
    localStorage.setItem("notes", JSON.stringify(noteArr));
  }
};

export default notesApp;
