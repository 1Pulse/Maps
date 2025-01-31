// Sample data for updates
const updates = [
  "New collaboration opportunity with XYZ Inc.",
  "Upcoming event: Community Meetup on Feb 15th.",
  "Exclusive webinar for VIP members on Feb 20th.",
];

// Populate updates list
const updatesList = document.getElementById("updates-list");
updates.forEach((update) => {
  const li = document.createElement("li");
  li.textContent = update;
  updatesList.appendChild(li);
});

// Add to cart functionality
function addToCart(product) {
  alert(`${product} added to cart!`);
}

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});