const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;


// Options array
const options = [
    {
        option: "Facebook",
    },
    {
        option: "Instagram",
    },
    {
        option: "LinkedIn",
    },
    {
        option: "Word of Mouth",
    },
    {
        option: "Other",
    },
];

// Populate options
const howUsSelect = document.getElementById("howUs");
options.forEach((choice) => {
    const option = document.createElement("option");
    option.value = choice.option;
    option.textContent = `${choice.option}`;
    howUsSelect.appendChild(option);
});

// Handle form submission
document
    .getElementById("reviewForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const message = {
            userName: formData.get("name") || "Anonymous",
            message: formData.get("message") || "N/A",
        };

        // Save message to localStorage
        let messages = JSON.parse(localStorage.getItem("message")) || [];
        messages.push(message);
        localStorage.setItem("message", JSON.stringify(messages));

        // Update message counter in localStorage
        let messageCount = localStorage.getItem("messageCount") || 0;
        messageCount++;
        localStorage.setItem("messageCount", messageCount);

        // Redirect to review.html with form data
        window.location.href = "thanks.html";
    });


