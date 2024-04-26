document.addEventListener("DOMContentLoaded", function() {
    const addLessonButton = document.getElementById('addLesson');
    const lessonInputsContainer = document.getElementById('lessonInputs');
    let lessonCount = 2; // Initial lesson count (we have one lesson input by default)

    addLessonButton.addEventListener('click', function() {
        const lessonInput = document.createElement('div');
        lessonInput.innerHTML = `
            <div class="form-group">
                <label for="lesson${lessonCount}">Lesson ${lessonCount}:</label>
                <input type="text" id="lesson${lessonCount}" name="lesson${lessonCount}" required>
            </div>
        `;
        lessonInputsContainer.appendChild(lessonInput);
        lessonCount++;
    });

    const courseForm = document.getElementById('courseForm');
    courseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can implement logic to handle form submission
        // For example, you can collect form data and generate a course plan
    });
});
