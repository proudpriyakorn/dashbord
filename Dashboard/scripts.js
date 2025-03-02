document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profile-button");
    const profileDropdown = document.getElementById("profileDropdown");

    function toggleProfileDropdown(event) {
        event.stopPropagation(); // Prevents event bubbling
        profileDropdown.style.display = (profileDropdown.style.display === "block") ? "none" : "block";
    }

    function closeDropdown(event) {
        if (!profileDropdown.contains(event.target) && !profileButton.contains(event.target)) {
            profileDropdown.style.display = "none";
        }
    }

    profileButton.addEventListener("click", toggleProfileDropdown);
    document.addEventListener("click", closeDropdown);
});
function renderCalendar(year, month) {
    console.log("Rendering calendar for:", year, month);
}

    calendarGrid.innerHTML = ""; 
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    

    currentMonthElement.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(new Date(year, month));

    for (let i = 0; i < firstDay; i++) {
        let emptySpan = document.createElement("span");
        calendarGrid.appendChild(emptySpan);
    }

    for (let day = 1; day <= lastDate; day++) {
        let dayElement = document.createElement("span");
        dayElement.textContent = day;
        dayElement.classList.add("calendar-day");

        // เพิ่มเงื่อนไขเช็ควันที่ปัจจุบัน
        if (
            year === currentDate.getFullYear() &&
            month === currentDate.getMonth() &&
            day === currentDate.getDate()
        ) {
            console.log("Highlighting today:", day);
            dayElement.classList.add("today"); // เพิ่มคลาส today
        }

        calendarGrid.appendChild(dayElement);
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-item span").forEach((el) => {
        el.style.textDecoration = "none";
    });
});

