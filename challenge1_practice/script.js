document.addEventListener('DOMContentLoaded', function() {
    const monthHeading = document.querySelector('.my');
    const daysContainer = document.querySelector('.dayss');
    const prevArrow = document.querySelector('.leftarrow');
    const nextArrow = document.querySelector('.rightarrow');
    const selectedDateNumber = document.querySelector('.date-number');
    const selectedMonth = document.querySelector('.month');
    const selectedYear = document.querySelector('.year');

    let currentDate = new Date();

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    function updateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthHeading.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)} ${year}`;

        daysContainer.innerHTML = '';

        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'day-of-week');
            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);
        });

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();

        let startDay = firstDay.getDay() - 1;
        if (startDay === -1) startDay = 6;

        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day', 'empty');
            daysContainer.appendChild(emptyDay);
        }

        for (let i = 1; i <= totalDays; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;
            if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                day.classList.add('current-day');
            }
            day.addEventListener('click', () => updateSelectedDate(i, month, year));
            daysContainer.appendChild(day);
        }

        const totalBoxes = 35;
        while (daysContainer.children.length < totalBoxes + 7) {
            const day = document.createElement('div');
            day.classList.add('day', 'next-month');
            day.textContent = daysContainer.children.length - totalDays - 6;
            daysContainer.appendChild(day);
        }
    }

    function updateSelectedDate(day, month, year) {
        const date = new Date(year, month, day);
        selectedDateNumber.textContent = day;
        selectedMonth.textContent = date.toLocaleString('en-US', { month: 'long' });
        selectedYear.textContent = year;
    }

    prevArrow.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });

    nextArrow.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
    updateSelectedDate(currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear());
});