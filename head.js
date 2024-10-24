const documentsContainer = document.querySelector('.documents');
const addButton = document.getElementById('addButton');
const linkInput = document.getElementById('linkInput');

// Function to create document windows
function createDocumentWindow(content) {
    const doc = document.createElement('div');
    doc.className = 'document';
    doc.textContent = content || 'Document Window';
    return doc;
}

// Initialize with 10 document windows
for (let i = 1; i <= 3; i++) {
    documentsContainer.appendChild(createDocumentWindow(`Document ${i}`));
}

// Add event listener for the add button
addButton.addEventListener('click', () => {
    const link = linkInput.value.trim();
    if (link) {
        documentsContainer.appendChild(createDocumentWindow(link));
        linkInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a link.");
    }
});
