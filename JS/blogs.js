const blog = [
  {
    title: "The Jodhpur, Rajasthan Solar Project",
    descr:
      "The Jodhpur, Rajasthan Solar Project stands as a testament to the city's commitment to a sustainable and brighter future. By harnessing the inexhaustible power of the sun, this initiative not only aims to meet the energy needs of today but also ensures a greener and more prosperous tomorrow for generations to come. Through collaboration, innovation, and a shared vision, Jodhpur sets sail on a transformative journey towards a renewable energy-driven future.",
    date: "5 Jan 2023",
    imageName: "jodhpur.jpg",
  },

  {
    title: "Solar Street Light Initiative",
    descr:
      "In pursuit of sustainable solutions and community well-being, an innovative initiative is underway to brighten pathways using solar energy. This Solar Street Light Project aims to replace conventional street lights with eco-friendly, efficient solar-powered alternatives, fostering safer and more sustainable neighborhoods.The Solar Street Light Initiative exemplifies a commitment to sustainability, innovation, and community welfare.",
    date: "24 july 2023",
    imageName: "strretLight.jpg",
  },
  {
    title: "Solar-Powered Irrigation Plant Initiative",
    descr:
      "The Solar-Powered Irrigation Plant Initiative represents a transformative step towards sustainable agriculture and rural development. By harnessing the power of the sun to provide reliable irrigation solutions, this initiative aims to empower farmers, enhance crop yields, and promote environmental stewardship within agricultural communities.By harnessing the power of the sun to provide reliable irrigation solutions, this initiative aims to empower farmers, enhance crop yields, and promote environmental stewardship within agricultural communities.",
    date: "26 Sept 2023",
    imageName: "ir.jpg",
  },
];
let currentIndex = 0;
function updateDescription() {
  if (blog.length <= currentIndex) {
    currentIndex = 0;
  }
  const blogJs = document.getElementById("blogJS");
  const items = blog[currentIndex];

  const htmlElement = `
    <div id="seperator">
        <div id="red">
            <img src="./images/blogs/${items.imageName}">
        </div>
       
        <div id="blogText">
            <h3>${items.title}</h3>
            <p id="descrip">${items.descr}</p>
            <p id="date">Date : ${items.date}</p>
        </div>
    </div>
  `;
  blogJs.innerHTML = htmlElement;
  currentIndex++;
}

updateDescription();

setInterval(updateDescription, 2000);
