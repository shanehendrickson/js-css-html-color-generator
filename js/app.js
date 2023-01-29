const colorsContainer = document.querySelector(".colors-container")
const spawnButton = document.getElementById("spawn-button")

let colorBlocks = ["", "", "", ""]

function getRandomNumber(){
  return Math.floor(Math.random() * 256)
}


function spawn(){
  colorsContainer.innerHTML = "";

  const commonColor = getRandomNumber();

  colorBlocks.forEach((_colorBlock, index) => {
    colorBlocks[index] = 
    "rgb(" + commonColor + "," + getRandomNumber() + "," + getRandomNumber() + ")"
  })

  console.log(colorBlocks)

  colorBlocks.forEach(colorBlock => {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = colorBlock;
    divElement.textContent = colorBlock;
    colorsContainer.append(divElement);
  })
}

spawn();
spawnButton.addEventListener("click", spawn);