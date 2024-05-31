function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert("Task cannot be empty");
    }
}

document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const titleInput = document.getElementById('appointment-title');
    const dateInput = document.getElementById('appointment-date');
    const appointmentList = document.getElementById('appointment-list');

    if (titleInput.value.trim() !== '' && dateInput.value !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = `${titleInput.value} - ${new Date(dateInput.value).toLocaleString()}`;
        appointmentList.appendChild(listItem);
        titleInput.value = '';
        dateInput.value = '';
    } else {
        alert("Both title and date are required");
    }
});


function getPersonalRecommendations() {
    const recommendations = [
        'This is a demo and will be updated later'
    ];

    const recommendationsList = document.getElementById('recommendations-list');
    recommendations.forEach(recommendation => {
        const listItem = document.createElement('li');
        listItem.textContent = recommendation;
        recommendationsList.appendChild(listItem);
    });
}


document.addEventListener('DOMContentLoaded', getPersonalRecommendations);
