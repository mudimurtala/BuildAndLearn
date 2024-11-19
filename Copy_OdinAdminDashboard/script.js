const html = document.querySelector("html");
const body = document.querySelector("body");
const container = document.querySelector("#container");

const data1 = [html, body, container];
data1.forEach((item) => {
    if (item === html) {
        item.setAttribute("style", "margin: 0; padding: 0; font-family: 'Roboto', sans-serif; background-color: black; height: 100%;");
    } else if (item === body) {
        item.setAttribute("style", "margin: 0; padding: 0; font-family: 'Roboto', sans-serif; background-color: black; height: 100%; display: flex; justify-content: center; align-items: stretch;");
    } else {
        item.setAttribute("style", "display: grid; width: 65%; height: 100vh; background-color: white;");
    }
});

const sidebarContainer = document.createElement("section");
sidebarContainer.classList.add("sidebar-container");
sidebarContainer.setAttribute("style", "background-color:#60a5fa;");
container.appendChild(sidebarContainer);

const mainbarContainer = document.createElement("section");
mainbarContainer.classList.add("mainbar-container");
container.appendChild(mainbarContainer);

fetch('icons.json')
    .then(response => response.json())
    .then(iconsData => {
        iconsData.forEach(iconObj => {
            const sidebarIcon = document.createElement("div");
            sidebarIcon.classList.add("sidebar-icon");
            sidebarIcon.innerHTML = iconObj.icon;
            
            const labelText = document.createElement("span");
            labelText.textContent = iconObj.label;
            labelText.setAttribute("style", "margin-left: 10px; font-weight: bold; color: white;");
            
            sidebarIcon.appendChild(labelText);
            sidebarContainer.appendChild(sidebarIcon);
        });
    });





const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
headerContainer.setAttribute("style", "background-color:#ffffff;");
mainbarContainer.appendChild(headerContainer);

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("body-container");
bodyContainer.setAttribute("style", "background-color:#E5E7EB; box-shadow: 0px 0px 3px 0px black;");
mainbarContainer.appendChild(bodyContainer);

const topContainer = document.createElement("section");
topContainer.classList.add("top-container");
topContainer.setAttribute("style", "background-color:#ffffff; display: flex; flex-direction: row;");
headerContainer.appendChild(topContainer);

const bottomContainer = document.createElement("section");
bottomContainer.classList.add("bottom-container");
bottomContainer.setAttribute("style", "background-color:#ffffff; display: flex; flex-direction: row;");
headerContainer.appendChild(bottomContainer);

const leftContainer = document.createElement("section");
leftContainer.classList.add("left-container");
leftContainer.setAttribute("style", "background-color:#ffffff; width: 65%; display: flex; flex-direction: row; gap: 20px;");
topContainer.appendChild(leftContainer);

const rightContainer = document.createElement("section");
rightContainer.classList.add("right-container");
rightContainer.setAttribute("style", "background-color:#ffffff; width: 35%; display: flex; flex-direction: row; gap:10px;");
topContainer.appendChild(rightContainer);


const searchIcon = document.createElement("div");
searchIcon.classList.add("search-icon", "search");
searchIcon.innerHTML = `<span class="mdi mdi-magnify"></span>`;
leftContainer.appendChild(searchIcon);

const searchBar = document.createElement("div");
searchBar.classList.add("search-bar", "search");
searchBar.innerHTML = `<input type="text" id="search_bar" name="search_bar">`;
leftContainer.appendChild(searchBar);


const notificationIcon = document.createElement("div");
notificationIcon.classList.add("notification-icon", "right-div");
notificationIcon.innerHTML = `<span class="mdi mdi-bell-badge-outline"></span>`;
rightContainer.appendChild(notificationIcon);

const catHeadImage = document.createElement("div");
catHeadImage.classList.add("cat-head-image", "right-div");
catHeadImage.innerHTML = `<img src="./images/catmww.png" alt="cat head image">`;
rightContainer.appendChild(catHeadImage);

const nameText = document.createElement("div");
nameText.classList.add("name-text", "right-div");
nameText.innerHTML = `<span class="name-user">MorganOakley</span>`;
rightContainer.appendChild(nameText);



const firstCon = document.createElement("div");
firstCon.classList.add("first-con");
firstCon.setAttribute("style", "background-color:#ffffff; width: 60%; display: flex; flex-direction: row;");
bottomContainer.appendChild(firstCon);

const secondCon = document.createElement("div");
secondCon.classList.add("second-con");
secondCon.setAttribute("style", "background-color:#ffffff; width: 40%; display: flex; justify-content: center; align-items: center; gap: 15px; height: 100%;");
bottomContainer.appendChild(secondCon);


const imageLarge = document.createElement("div");
imageLarge.classList.add("image-large");
imageLarge.setAttribute("style", "background-color:#ffffff;");
imageLarge.innerHTML = `<img src="./images/catmww.png" alt="cat head image">`;
firstCon.appendChild(imageLarge);

const textLarge = document.createElement("div");
textLarge.classList.add("text-large");
textLarge.setAttribute("style", "background-color:#ffffff; width: 80%;");
textLarge.innerHTML = `<span class="greet-user">Hi there,</span><p class="name-morgan">Morgan Oakley (@morgan)</p>`
firstCon.appendChild(textLarge);


const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach((text) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = text;
    button.setAttribute("style", "background-color: #60a5fa; color: #ffffff; border-radius: 25px; border: none; padding: 5px 17px; cursor: pointer;");
    secondCon.appendChild(button);
});
