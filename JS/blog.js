const blogSrc = [
  {
    src: "https://www.youtube.com/embed/_AwWYFubj0w?si=Gkc6zgsPIg3tgOXu",
    title:
      "Founding Journey: Akshat Jain on Building a Sustainable Future through Innovation",
  },
  {
    src: "https://www.youtube.com/embed/XuV6pup-SmE?si=V212Dh_DnWFaw94z",
    title:
      "Lighting the Future: A Comprehensive Overview of KLK's Solar Module Street Lights",
  },
  {
    src: "https://www.youtube.com/embed/7xdq8iQRPPM?si=0Pm0JQ09ZyaKVqBh",
    title:
      "Inside KLK's Cutting-Edge Solar Street Light Manufacturing Facility: A Revealing Tour",
  },
  {
    src: "https://www.youtube.com/embed/D-QznQ8PxTE?si=obAPSLRXEyWkRUrr",
    title: "Empowering Communities: KLK's CSR Initiatives in Action",
  },
  {
    src: "https://www.youtube.com/embed/KZALLMOW7mw?si=QGA7k_wMFhNlryke",
    title: "A Comprehensive Look into KLK's Vision for Sustainable Energy",
  },
];

const media = document.querySelector(".media-grid");

blogSrc.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("media-item");
  div.classList.add("video");
  const textNode = `
    <iframe width="100%" height="100%" src="${item.src}" frameborder="0" ></iframe>
    <div class="media-content">
        <h3>${item.title}</h3>
    </div>
  `;
  div.innerHTML = textNode;
  media.appendChild(div);
});

const mediaItem = document.querySelectorAll(".media-item");

mediaItem.forEach((items, index) => {
  items.addEventListener("click", (e) => {
    e.preventDefault();
    mainDivupdate(index);
    const mainYoutube = document.querySelector(".mainYoutube");
    mainYoutube.scrollIntoView({ behavior: "smooth" });
  });
});

let index = 0;
function mainDivupdate(index) {
  const mainYoutube = document.querySelector(".mainYoutube");
  const texty = `<div class="full-Screen">
                <iframe width="100%" height="100%" src="${blogSrc[index].src}"
                    frameborder="0" ></iframe>
            </div>
            <div class="media-content media-contentR">
                <h3 id="ytbTi">${blogSrc[index].title}</h3>
            </div>`;
  mainYoutube.innerHTML = texty;
}
mainDivupdate(0);
