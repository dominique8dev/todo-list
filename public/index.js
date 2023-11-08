
document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('#editBtn');
    const saveEditButtons = document.querySelectorAll('#saveEditBtn');
    const editTextInputs = document.querySelectorAll('#editTxt');
    const deleteBtn = document.querySelectorAll('#deleteBtn');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const taskItem = document.querySelectorAll('.completedSection');
    const cancelButtons = document.querySelectorAll('#cancelBtn');
    
    editButtons.forEach((editBtn, index) => {
        editBtn.addEventListener('click', () => {
            // Show the edit input field and the save button for the corresponding task
            editTextInputs[index].style.display = 'inline';
            saveEditButtons[index].style.display = 'inline';
            cancelButtons[index].style.display = 'inline';
            deleteBtn[index].style.display = 'none';
            taskItem[index].style.display = 'none';
            editBtn.style.display = 'none';
        });
    });

    cancelButtons.forEach((cancelBtn, index) => {
        cancelBtn.addEventListener('click', () => {
            // Hide the edit input field and the save button for the corresponding task
            editTextInputs[index].style.display = 'none';
            saveEditButtons[index].style.display = 'none';
            deleteBtn[index].style.display = 'inline';
            taskItem[index].style.display = 'inline';
            cancelBtn.style.display = 'none';
            editButtons[index].style.display = 'inline';
        });
    })

    saveEditButtons.forEach((saveEditBtn, index) => {
        saveEditBtn.addEventListener('click', () => {
            // Hide the edit input field and the save button after saving the edit
            taskItem[index].style.display = 'inline';
            deleteBtn[index].style.display = 'inline';
            editTextInputs[index].style.display = 'none';
            saveEditBtn.style.display = 'none';
        });
    });

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            // Trigger the form submission when the checkbox changes
            checkbox.closest('form').submit();
        });
    });

});

