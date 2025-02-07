document.addEventListener('DOMContentLoaded', () => {
    fetch('json/schedule.json')
        .then(response => response.json())
        .then(data => {
            const scheduleBody = document.getElementById('schedule-body');
            data.schedule.forEach(game => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${game.opponent}</td>
            <td>${game.result}</td>
            <td>${game.score}</td>
            `;
                scheduleBody.appendChild(row);
            });

            console.log(data); // debugging
        })
        .catch(error => console.error('Error fetching the schedule:', error));

});

//https://www.geeksforgeeks.org/read-json-file-using-javascript/
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event