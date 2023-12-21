const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const caurosel = [
  {
    title: "# Your First Choice in Solar",
    description:
      "Discover the brilliance of solar innovation with our cutting-edge solutions. We're committed to providing you with high-performance solar panels and advanced energy storage systems, paving the way for a sustainable and resilient energy future.",
    src: "panel3.jpg",
  },
  {
    title: "# Efficient. Affordable. Sustainable Energy Solutions",
    description:
      "Experience the revolution in solar energy.Our company is dedicated to delivering state- of - the - art solar solutions that not only reduce your carbon footprint but also offer significant savings on your energy bills.Embrace the power of the sun with us!.",
    src: "panel2.jpg",
  },

  {
    title: "# Leading Solar Solutions Provider",
    description:
      "At the forefront of solar technology, we bring you efficient and affordable energy solutions. From residential rooftops to large-scale commercial projects, our commitment to sustainability drives us to provide you with the best in solar innovation.",

    src: "so1.png",
  },

  {
    title: `${currentYear}'s Top Solar Provider`,
    description:
      "Empower your life with clean, sustainable energy solutions. Our solar technology harnesses the power of the sun to bring you reliable and eco-friendly electricity for a brighter, greener future.",
    src: "solar.jpeg",
  },
];

let currentValue = 0;

function setCaurosel() {
  if (currentValue >= caurosel.length) {
    currentValue = 0;
  }
  let items = caurosel[currentValue];

  const cauroselAppend = document.querySelector(".caurosel");
  const cauroselHtml = ` 
        <div class="imageCaurosel">
            <img src="./images/caurosel/${items.src}" id="imgCa">
        </div>
        <div class="contentCau">
            <h1>${items.title}</h1>
            <p>${items.description}</p>
            <a href="contact.html" id="connect">Connect With Us</a>
        </div>
        <div class="overlayCaur"></div>
        `;
  cauroselAppend.innerHTML = cauroselHtml;
  currentValue++;
}
function prevSlide() {
  currentValue = (currentValue - 1 + caurosel.length) % caurosel.length;
  setCaurosel();
}

function nextSlide() {
  currentValue = (currentValue + 1) % caurosel.length;
  setCaurosel();
}
setCaurosel();
setInterval(setCaurosel, 6000);
