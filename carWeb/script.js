const cars = [
  {
    title: "Toyota Corolla Hybrid",
    image: "toyota.jpg",
    description: [
      "Reliable and fuel-efficient",
      "Low maintenance cost",
      "Perfect for daily commuting",
      "Eco-friendly hybrid engine"
    ],
    price: "KES 3,500,000"
  },
  {
    title: "Tesla Model 3",
    image: "tesla3.jpg",
    description: [
      "All-electric with futuristic features",
      "Over 500 km range per charge",
      "Fast acceleration (0-100 km/h in ~5s)",
      "Advanced autopilot support"
    ],
    price: "KES 6,800,000"
  },
  {
    title: "Mazda CX-5",
    image: "Mazda.jpg",
    description: [
      "Sporty and smooth ride",
      "Premium interior feel",
      "Reliable and practical SUV",
      "Great for both city and highway use"
    ],
    price: "KES 4,200,000"
  },
  {
    title: "BMW 3 Series",
    image: "BMW3.jpg",
    description: [
      "Luxurious and sporty sedan",
      "Dynamic handling performance",
      "Smart safety and tech features",
      "Available in hybrid options"
    ],
    price: "KES 7,000,000"
  },
  {
    title: "Ford Ranger",
    image: "ford.jpg",
    description: [
      "Strong and powerful pickup truck",
      "Excellent off-road capabilities",
      "Perfect for rural or semi-urban roads",
      "Good for utility and family use"
    ],
    price: "KES 5,300,000"
  }
];

let currentIndex = 0;

function displayCar(index) {
  const car = cars[index];
  const image = document.getElementById('car-image');
  const title = document.getElementById('car-title');
  const desc = document.getElementById('car-description');

  // Fade-in animation
  image.classList.remove('fade-in');
  void image.offsetWidth; // Force reflow
  image.src = car.image;
  image.classList.add('fade-in');

  title.textContent = car.title;

  const descriptionHTML = `
    <strong>Description:</strong>
    <ul>
      ${car.description.map(item => `<li>${item}</li>`).join("")}
    </ul>
    <strong>Price:</strong> ${car.price}
  `;

  desc.innerHTML = descriptionHTML;
}

function nextCar() {
  currentIndex = (currentIndex + 1) % cars.length;
  displayCar(currentIndex);
}

function prevCar() {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  displayCar(currentIndex);
}

window.onload = () => {
  displayCar(currentIndex);
};
