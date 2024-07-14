const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

// Display review count from localStorage
document.getElementById('reviewCount').textContent = localStorage.getItem('reviewCount') || 0;

// Retrieve and display past reviews from localStorage
const reviewsList = document.getElementById('reviewsList');
const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

if (reviews.length > 0) {
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <p><strong>Product:</strong> ${review.productName}</p>
            <p><strong>Rating:</strong> ${'☆'.repeat(review.rating)}</p>
            <p><strong>Installation Date:</strong> ${review.installationDate}</p>
            <p><strong>Useful Features:</strong> ${review.features.join(', ')}</p>
            <p><strong>Review:</strong> ${review.writtenReview}</p>
            <p><strong>Name:</strong> ${review.userName}</p>
        `;
        reviewsList.appendChild(reviewItem);
    });
} else {
    reviewsList.innerHTML = '<p>No past reviews found.</p>';
}