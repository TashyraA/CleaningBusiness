const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let slideIndex = 0;

// Function to show the next slide
function showSlide() {
  // Remove active class from all slides and buttons
  btns.forEach(btn => btn.classList.remove("active"));
  slides.forEach(slide => slide.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));
  
  // Increment slideIndex and reset to 0 if it exceeds the number of slides
  slideIndex = (slideIndex + 1) % slides.length;

  // Add active class to the next slide and button
  btns[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");
  contents[slideIndex].classList.add("active");
}

// Automatically change slide every 8 seconds
setInterval(showSlide, 8000);

// Function to change slide on button click
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slideIndex = i;
    showSlide();
  });
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Contact form submission

  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('submit_form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Your request has been submitted successfully.');
        form.reset();
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    });
  });
  

// JavaScript for handling the modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('serviceModal');
  const modalContent = document.getElementById('modalDetails');
  const closeBtn = document.querySelector('.close');

  const serviceDetails = {
    "basic-cleaning": {
      title: "Basic Cleaning Services",
      price: "$80",
      description: "<p>With our Basic Cleaning package, you will receive a thorough dusting of all surfaces, vacuuming of carpets and upholstery, sweeping and mopping of floors, detailed bathroom and kitchen cleaning, and trash removal. Enjoy a tidy and welcoming home with our reliable and eco-friendly cleaning service.</p>"
    },
    "detailed-cleaning": {
      title: "Detailed Cleaning Services",
      price: "$150",
      description: "<p>With our Detailed Cleaning package, you will receive an extensive top-to-bottom cleaning of your home. This includes deep cleaning of all surfaces, meticulous dusting of hard-to-reach areas, steam cleaning of carpets, scrubbing of tile grout, comprehensive bathroom and kitchen sanitation, appliance cleaning, and window washing. Experience a spotless and pristine living space with our thorough and professional service.</p>"
    },
    "move-in/out-cleaning": {
      title: "Move In/Out Cleaning Services",
      price: "$250",
      description: "<p>With our Move In/Out Cleaning package, you will receive a comprehensive cleaning service designed to make your transition smooth and hassle-free. This includes deep cleaning of all rooms, thorough scrubbing of kitchens and bathrooms, wiping down of cabinets and drawers, cleaning of appliances inside and out, vacuuming and mopping of all floors, and detailed attention to every corner. Ensure your new home is spotless or leave your old home in pristine condition with our professional cleaning service.</p>"
    },
    "green-cleaning": {
      title: "Green Cleaning Services",
      price: "$120",
      description: "<p>With our Green Cleaning package, you will receive an eco-friendly cleaning service that uses only environmentally safe and non-toxic products. This includes thorough cleaning of all surfaces, vacuuming and mopping with green products, and detailed kitchen and bathroom cleaning. Protect your home and the planet with our sustainable and effective green cleaning solutions.</p>"
    },
    "window-cleaning": {
      title: "Window Cleaning Add-On",
      price: "$5 Per Window",
      description: "<p>Enhance your cleaning package with our Window Cleaning Add-On. Our team will meticulously clean the interior of your windows, ensuring they are streak-free and sparkling. This add-on service includes cleaning window sills and tracks, removing any accumulated dirt and grime. Perfect for brightening up your home and letting in more natural light, our window cleaning service is a convenient way to achieve a flawless finish.</p>"
    },
    "organizational-services": {
      title: "Organizational Services",
      price: "$60 Per Hour",
      description: "<p>Transform your living spaces with our Organizational Services. Our professional organizers will work with you to declutter and streamline your home, creating efficient and aesthetically pleasing environments. From tidying up closets and kitchen cabinets to arranging your home office and storage spaces, we provide personalized solutions to fit your lifestyle. Experience the peace of mind that comes with a well-organized home, making daily tasks simpler and more enjoyable.</p>"
    },
  };

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceType = card.getAttribute('data-service');
      const service = serviceDetails[serviceType];

      modalContent.innerHTML = `
        <h2>${service.title}</h2>
        <div class="service-price">Starting at ${service.price}</div>
        ${service.description}
        <button class="book-now-btn">Get a Free Quote</button>
      `;

  modal.style.display = 'block';
 
  const freeQuoteBtn = document.querySelector('.book-now-btn');
  freeQuoteBtn.addEventListener('click', () => {
      // Scroll to the contact form section
      const contactFormSection = document.getElementById('consult');
      contactFormSection.scrollIntoView({ behavior: 'smooth' });

      // Hide the modal
      modal.style.display = 'none';
    });
  });
});

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

// Animated Bubble Banner
const bubbleBanner = document.getElementById('bubble-banner');

for (let i = 0; i < 10; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.width = `${Math.random() * 80 + 20}px`;
  bubble.style.height = bubble.style.width;
  bubble.style.animationDelay = `${Math.random() * 10}s`;
  bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;
  bubbleBanner.appendChild(bubble);
}

  
  
