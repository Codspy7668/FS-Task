let selectedTeacher = '';

document.querySelectorAll('.timetable td[data-teacher]').forEach(cell => {
    cell.addEventListener('click', function() {
        selectedTeacher = this.getAttribute('data-teacher');
        const subject = this.textContent;
        const optionsModal = new bootstrap.Modal(document.getElementById('optionsModal'));
        optionsModal.show();

        document.getElementById('contactTeacher').onclick = function() {
            window.location.href = `contact.html?teacher=${encodeURIComponent(selectedTeacher)}&subject=${encodeURIComponent(subject)}`;
        };

        document.getElementById('showTeacherName').onclick = function() {
            alert(`Teacher: ${selectedTeacher}`);
        };
    });
});
