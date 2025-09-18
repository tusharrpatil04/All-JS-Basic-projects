// Get DOM elements
const createBtn = document.querySelector("#btn");
const notesContainer = document.querySelector(".notes-container");
const body = document.body;

// Array to store all notes
let notes = [];

// Load notes from localStorage on page load
window.addEventListener("DOMContentLoaded", loadNotesFromStorage);

// Create new note when button is clicked
createBtn.addEventListener("click", createNewNote);

// Function to create a new note
function createNewNote() {
  const noteId = Date.now().toString(); // Unique ID for each note
  const noteData = {
    id: noteId,
    content: "Click to edit this note...",
    timestamp: new Date().toLocaleString(),
  };

  notes.push(noteData);
  renderNote(noteData);
  saveNotesToStorage();
}

// Function to render a note in the DOM
function renderNote(noteData) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.setAttribute("data-id", noteData.id);

  noteElement.innerHTML = `
    <div class="note-header">
      <span class="note-timestamp">${noteData.timestamp}</span>
      <button class="delete-btn" onclick="deleteNote('${noteData.id}')">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <textarea class="note-content" placeholder="Write your note here..." 
              oninput="updateNote('${noteData.id}', this.value)">${noteData.content}</textarea>
  `;

  // Insert the note at the beginning of the container
  if (notesContainer.firstChild) {
    notesContainer.insertBefore(noteElement, notesContainer.firstChild);
  } else {
    notesContainer.appendChild(noteElement);
  }
}

// Function to update note content
function updateNote(noteId, newContent) {
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex !== -1) {
    notes[noteIndex].content = newContent;
    notes[noteIndex].timestamp = new Date().toLocaleString();

    // Update timestamp in DOM
    const noteElement = document.querySelector(`[data-id="${noteId}"]`);
    const timestampElement = noteElement.querySelector(".note-timestamp");
    timestampElement.textContent = notes[noteIndex].timestamp;

    saveNotesToStorage();
  }
}

// Function to delete a note
function deleteNote(noteId) {
  if (confirm("Are you sure you want to delete this note?")) {
    // Remove from array
    notes = notes.filter((note) => note.id !== noteId);

    // Remove from DOM
    const noteElement = document.querySelector(`[data-id="${noteId}"]`);
    noteElement.remove();

    saveNotesToStorage();
  }
}

// Function to save notes to localStorage
function saveNotesToStorage() {
  localStorage.setItem("notesApp", JSON.stringify(notes));
}

// Function to load notes from localStorage
function loadNotesFromStorage() {
  const savedNotes = localStorage.getItem("notesApp");
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
    notes.forEach((note) => renderNote(note));
  }
}

// Function to clear all notes
function clearAllNotes() {
  if (
    confirm(
      "Are you sure you want to delete all notes? This action cannot be undone."
    )
  ) {
    notes = [];
    notesContainer.innerHTML = "";
    saveNotesToStorage();
  }
}

// Function to export notes as text file
function exportNotes() {
  if (notes.length === 0) {
    alert("No notes to export!");
    return;
  }

  let exportText = "My Notes\n\n";
  notes.forEach((note, index) => {
    exportText += `Note ${index + 1}:\n`;
    exportText += `Created: ${note.timestamp}\n`;
    exportText += `Content: ${note.content}\n\n`;
    exportText += "---\n\n";
  });

  const blob = new Blob([exportText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `notes_${new Date().toISOString().split("T")[0]}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// Search functionality
function searchNotes() {
  const searchTerm = document
    .querySelector(".search-input")
    .value.toLowerCase();
  const noteElements = document.querySelectorAll(".note");

  noteElements.forEach((noteElement) => {
    const content = noteElement
      .querySelector(".note-content")
      .value.toLowerCase();
    if (content.includes(searchTerm)) {
      noteElement.style.display = "block";
    } else {
      noteElement.style.display = "none";
    }
  });
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl + N for new note
  if (e.ctrlKey && e.key === "n") {
    e.preventDefault();
    createNewNote();
  }

  // Ctrl + S to save (just a visual feedback since auto-save is already implemented)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    // Show save confirmation
    showNotification("Notes saved successfully!");
  }
});

// Function to show notifications
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
