const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

// Product array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5,
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7,
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5,
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9,
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0,
    },
];

// Populate product options
const productNameSelect = document.getElementById("productName");
products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} (Avg. Rating: ${product.avgRating})`;
    productNameSelect.appendChild(option);
});

// Handle form submission
document
    .getElementById("reviewForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const review = {
            productName: formData.get("productName"),
            rating: formData.get("rating"),
            installationDate: formData.get("installationDate"),
            features: formData.getAll("features"),
            writtenReview: formData.get("review") || "N/A",
            userName: formData.get("yourName") || "Anonymous",
        };

        // Save review to localStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Update review counter in localStorage
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        // Redirect to review.html with form data
        window.location.href = "review.html";
    });


