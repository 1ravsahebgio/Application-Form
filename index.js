  // Function to allow only one checkbox to be selected at a time
  function checkOnlyOne(current, otherIds) {
    otherIds.forEach(id => {
      const otherCheckbox = document.getElementById(id);
      if (current.checked) {
        otherCheckbox.checked = false; // Uncheck the other checkboxes
      }
    });
  }

function showPreview(event) {
  const preview = document.getElementById('image-preview');
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result; // Update img src with selected image
    };
    reader.readAsDataURL(file);
  }
}








