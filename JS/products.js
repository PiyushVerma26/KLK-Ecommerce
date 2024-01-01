const product = [
  {
    title: "Solar Module",
    descn: `Solar modules, also referred to as solar panels, are devices that harness sunlight to
                generate electricity through photovoltaic cells made mostly of silicon. These interconnected cells convert sunlight into directcurrent (DC) electricity, which can then be converted into usable alternating current (AC) or stored for later use.Solar panels contribute to sustainable energy production, are available in various types, and find applications in residential,commercial, and industrial settings, supporting the global shift towards renewable energy sources.`,
    href: "module.html",
    src: "poly.webp",
  },
  {
    title: "Lithium -ION",
    descn: `Lithium-ion (Li-ion) batteries are rechargeable energy storage devices widely used in numerous modern applications. They operate based on lithium ions moving between electrodes during charging and discharging cycles. Their popularity stems from their high energy density, making them ideal for portable devices like smartphones and laptops, as well as larger applications such as electric vehicles and renewable energy storage systems.These batteries leverage lithium compounds as cathode materials and carbon-based anodes, enabling their compact size and lightweight design. Their rechargeable nature allows for multiple charge-discharge cycles, providing longer-lasting power for various devices.`,
    href: "li-ionBattery.html",
    src: "lithium.webp",
  },
  {
    title: "Irrigation Pump",
    descn:
      "A solar irrigation pump is an innovative system that utilizes solar energy to power a water pump used for agricultural irrigation. These pumps operate by converting sunlight into electricity through solar panels, eliminating the need for grid electricity or traditional fuel sources. They provide an eco-friendly and sustainable solution, particularly in remote areas lacking reliable access to electricity, by tapping into natural water sources like wells or rivers to supply water for crop irrigation. These systems offer scalability, various pump types, and often incorporate smart technologies to efficiently manage water usage, contributing to improved agricultural productivity and water conservation efforts in farming practices.",
    href: "pump.html",
    src: "irrigation.webp",
  },
  {
    title: "Solar Street Light",
    descn:
      "Solar street lights represent a cutting-edge lighting solution that operates independently of the electrical grid. These lights consist of photovoltaic panels, which collect sunlight during the day to charge built-in batteries. At dusk, they automatically switch on, utilizing the stored solar energy to illuminate streets, walkways, or public spaces. This eco-conscious lighting alternative not only contributes to energy conservation but also enhances safety and visibility in outdoor environments, offering a reliable and environmentally friendly lighting option for communities worldwide.",
    href: "module.html",
    src: "solarLight.jpg",
  },
  {
    title: "Solar Table Light",
    descn:
      "Solar table lights are portable lighting devices designed for tabletop use, integrating solar panels to harness sunlight and convert it into electricity. These compact lights often come with built-in rechargeable batteries that store solar energy during the day. They illuminate tabletops or indoor spaces, providing ambient light for various activities such as dining, reading, or creating a cozy atmosphere. With their eco-friendly nature and convenient portability, solar table lights offer a sustainable and versatile lighting solution for both indoor and outdoor settings without relying on conventional electricity sources.",
    href: "portableProducts.html",
    src: "tableLight.webp",
  },
];
let index = 0;

function setProducts() {
  const productItem = document.querySelector(".products");

  if (index >= product.length) {
    index = 0;
  }

  const item = product[index];

  productItem.innerHTML = `<div class="item1">
            <h3 class="itemTitl">${item.title}</h3>
            <p class="itemPara">${item.descn}</p>
            <a class="btnDiscover" href="${item.href}">Discover More</a>
        </div>
        <div class="item2">
            <img id="itemImgs" src="./images/products/${item.src}">
        </div>`;

  index++;
}

setProducts();

setInterval(setProducts, 10000);
