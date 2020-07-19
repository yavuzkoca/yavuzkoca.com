const experiencesDiv = document.getElementsByClassName('experiences-container')[0];
const experiences = [
  {
    name: "Trendyol",
    startDate: "06.2019",
    endDate: "Present",
    description: "After joining Trendyol Group as an intern, I started my first full-time job here while attending several teams: Mobile Web and Seller Ads.",
    image: "img/trendyol.jpg"
  },
  {
    name: "Nod Digital",
    startDate: "11.2018",
    endDate: "06.2019",
    description: "It was the place where we develop multiple projects for the clients as well as developing them with plenty of different technologies.",
    image: "img/nod.png"
  },
  {
    name: "Mobim Yazılım",
    startDate: "07.2018",
    endDate: "10.2018",
    description: "During my first internship I designed REST API for the mobile applications that is used by the company by Laravel.",
    image: "img/mobim.png"
  },
  {
    name: "EMBD Lab",
    startDate: "01.2018",
    endDate: "06.2018",
    description: "As we develop multiple different projects, I was responsible from the web parts of these amazing projects.",
    image: "img/emdb.png"
  }
];

for (const experience of experiences) {
  const experienceNode = document.createElement("div");
  experienceNode.classList.add("experience");

  const imgNode = document.createElement("img");
  imgNode.classList.add("experience__image");
  imgNode.src = experience.image;

  const titleNode = document.createElement("div");
  titleNode.classList.add("experience__title");
  titleNode.innerHTML = experience.name;

  const descriptionNode = document.createElement("div");
  descriptionNode.classList.add("experience__description");
  descriptionNode.innerHTML = experience.description;

  const dateNode = document.createElement("div");
  dateNode.classList.add("experience__date");
  dateNode.innerHTML = experience.startDate + " - " + experience.endDate;

  experiencesDiv.append(experienceNode);
  experienceNode.append(imgNode);
  experienceNode.append(titleNode);
  experienceNode.append(descriptionNode);
  experienceNode.append(dateNode);
}

