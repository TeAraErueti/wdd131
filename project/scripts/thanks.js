const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

// Display review count from localStorage
document.getElementById('messageCount').textContent = localStorage.getItem('messageCount') || 0;