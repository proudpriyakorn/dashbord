document.addEventListener('DOMContentLoaded', function() {
    // Calendar Implementation
    const calendarDays = document.querySelector('.calendar-days');
    const monthYear = document.querySelector('.calendar-header h2');
    
    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startingDay = firstDay.getDay();
        const monthLength = lastDay.getDate();
        
        // Clear previous calendar
        calendarDays.innerHTML = '';
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarDays.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= monthLength; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            // Add active class for current day
            if (day === new Date().getDate() && 
                month === new Date().getMonth() && 
                year === new Date().getFullYear()) {
                dayElement.classList.add('active');
            }
            
            calendarDays.appendChild(dayElement);
        }
    }
    
    // Initialize calendar with January 2025
    generateCalendar(2025, 0);
    
    // Handle previous and next month buttons
    document.querySelector('.prev-month').addEventListener('click', () => {
        // Implementation for previous month navigation
        // Note: This is simplified since we're showing a static January 2025
    });
    
    document.querySelector('.next-month').addEventListener('click', () => {
        // Implementation for next month navigation
        // Note: This is simplified since we're showing a static January 2025
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Implement search functionality as needed
    });
    
    // Add hover effects to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("search-input");

    searchInput.addEventListener("focus", function() {
        if (this.value === "Search") {
            this.value = ""; // Clear the text when clicked
        }
    });

    searchInput.addEventListener("blur", function() {
        if (this.value === "") {
            this.value = "Search"; // Restore the text if empty
        }
    });
});

