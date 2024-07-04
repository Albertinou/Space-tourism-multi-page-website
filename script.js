async function getDestinationData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    const activePlanet = document.querySelector(
      ".planet-list-link.active"
    ).innerHTML;

    const activePlanetArr = data.destinations.filter(
      (destination) => destination.name == activePlanet
    );

    document.getElementById("planet-name").innerHTML = activePlanetArr[0].name;
    document.getElementById("planet-description").innerHTML =
      activePlanetArr[0].description;
  } catch (err) {
    console.error(err);
  }
}

getDestinationData();

function addActiveClass(elem) {
  // get all planet list elements
  const planetList = document.querySelectorAll(".planet-list-link");
  for (let i = 0; i < planetList.length; i++) {
    // Remove the class 'active' if it exists
    planetList[i].classList.remove("active");
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add("active");
  getDestinationData();
}
