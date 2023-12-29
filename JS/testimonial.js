const testimonials = [
  {
    clientSays:
      "Choosing KLK Ventures for our solar installation was one of the best decisions we've ever made. From the initial consultation to the final installation, the team demonstrated professionalism and expertise. Our energy bills have significantly decreased, and we're proud to contribute to a more sustainable future. Thank you, SolarBrite, for making the process seamless and for providing top-notch service!",
    whoom: "Kriti",
  },
  {
    clientSays:
      "I can't speak highly enough about KLK Ventures. The entire process, from the first contact to the completed installation, exceeded our expectations. The team was knowledgeable, friendly, and efficient. Our solar panels are now generating clean energy, and we're excited to see the positive impact on both the environment and our electricity bills. If you're considering solar, SolarBrite is the way to go!",
    whoom: "Piyush ",
  },
  {
    clientSays:
      "We are thrilled with our decision to go solar with KLK Ventures. The team not only delivered on their promises but went above and beyond to ensure our satisfaction. The installation was smooth, and their attention to detail was impressive. It's empowering to harness the sun's energy for our home, and we highly recommend SolarBrite for their excellent service and commitment to sustainability.",
    whoom: "Punit",
  },
  {
    clientSays:
      "KLK Ventures has truly transformed our home into an energy-efficient haven. The solar panel installation was quick and hassle-free, and the team's expertise was evident throughout the process. We've seen a significant reduction in our energy bills, and it feels great to make a positive impact on the environment. Thank you, SolarBrite, for providing a reliable and eco-friendly solution!",
    whoom: "Dhruv",
  },
  {
    clientSays:
      "After researching several solar companies, we decided to go with KLK Ventures, and we couldn't be happier. The team was responsive, professional, and guided us through every step of the installation. Our solar system is now up and running, and we're reaping the benefits of clean, renewable energy. Choosing SolarBrite was a wise investment in both our home and the planet. Highly recommended!",
    whoom: "Udit",
  },
];
let i = 0;

function testimonial() {
  const insideDiv = document.querySelector(".testimonial-container");
  insideDiv.innerHTML = "";

  const firstIndex = i % testimonials.length;
  const secondIndex = (i + 1) % testimonials.length;
  const thirdIndex = (i + 2) % testimonials.length;

  const firstBoxHtml = document.createElement("div");
  firstBoxHtml.classList.add("testimonial");
  firstBoxHtml.innerHTML = `<div class="testimonial-content">
                            <p>${testimonials[firstIndex].clientSays}</p>
                          </div>
                          <div class="testimonial-author">
                            <img src="./images/imgtest.webp" alt="Testimonial 1">
                            <div class="author-info">
                              <h3>${testimonials[firstIndex].whoom}</h3>
                            </div>
                          </div>`;
  insideDiv.appendChild(firstBoxHtml);

  const secondBoxHtml = document.createElement("div");
  secondBoxHtml.classList.add("testimonial");
  secondBoxHtml.innerHTML = `<div class="testimonial-content">
                                <p>${testimonials[secondIndex].clientSays}</p>
                              </div>
                              <div class="testimonial-author">
                                <img src="./images/imgtest.webp" alt="Testimonial 2">
                                <div class="author-info">
                                  <h3>${testimonials[secondIndex].whoom}</h3>
                                </div>
                              </div>`;
  insideDiv.appendChild(secondBoxHtml);

  const thirdBoxHtml = document.createElement("div");
  thirdBoxHtml.classList.add("testimonial");
  thirdBoxHtml.innerHTML = `<div class="testimonial-content">
                                <p>${testimonials[thirdIndex].clientSays}</p>
                              </div>
                              <div class="testimonial-author">
                                <img src="./images/imgtest.webp" alt="Testimonial 2">
                                <div class="author-info">
                                  <h3>${testimonials[thirdIndex].whoom}</h3>
                                </div>
                              </div>`;
  insideDiv.appendChild(thirdBoxHtml);

  i++;
}

testimonial();

setInterval(testimonial, 7000);
