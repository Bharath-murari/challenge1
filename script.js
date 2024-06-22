document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.getElementById('calendarDays');
    const selectedDate = document.getElementById('selectedDate');
    const selectedMonth = document.getElementById('selectedMonth');
    const selectedYear = document.getElementById('selectedYear');

    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    function createCalendar() {
        const date = new Date(2024, 5, 1); 
        const lastDay = new Date(2024, 6, 0).getDate();

        for (let i = 1; i <= 35; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');

            if (i <= lastDay) {
                dayElement.textContent = i;
                if (i === 16) dayElement.classList.add('blue');
                if (i >= 17 && i <= 20) dayElement.classList.add('orange');
            } else {
                dayElement.textContent = i - lastDay;
                dayElement.classList.add('grey');
            }

            dayElement.addEventListener('click', function() {
                if (!this.classList.contains('grey')) {
                    selectedDate.textContent = this.textContent.padStart(2, '0');
                    selectedMonth.textContent = 'JUNE';
                    selectedYear.textContent = '2024';
                }
            });

            calendarDays.appendChild(dayElement);
        }
    }

    createCalendar();
});