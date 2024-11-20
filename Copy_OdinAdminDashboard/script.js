fetch('icons.json')
    .then(response => response.json())
    .then(iconsData => {
        iconsData.forEach(iconObj => {
            const sidebarIcon = document.createElement("div");
            sidebarIcon.classList.add("sidebar-icon");
            sidebarIcon.innerHTML = iconObj.icon;
            
            const labelText = document.createElement("span");
            labelText.classList.add("label-text");
            labelText.textContent = iconObj.label;
            
            sidebarIcon.appendChild(labelText);
            sidebarContainer.appendChild(sidebarIcon);
        });
    });



const container = document.querySelector("#container");


const sidebarContainer = document.createElement("section");
sidebarContainer.classList.add("sidebar-container");
container.appendChild(sidebarContainer);

const mainbarContainer = document.createElement("section");
mainbarContainer.classList.add("mainbar-container");
container.appendChild(mainbarContainer);


const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
mainbarContainer.appendChild(headerContainer);

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("body-container");
mainbarContainer.appendChild(bodyContainer);

const topContainer = document.createElement("section");
topContainer.classList.add("top-container");
headerContainer.appendChild(topContainer);

const bottomContainer = document.createElement("section");
bottomContainer.classList.add("bottom-container");
headerContainer.appendChild(bottomContainer);

const leftContainer = document.createElement("section");
leftContainer.classList.add("left-container");
topContainer.appendChild(leftContainer);

const rightContainer = document.createElement("section");
rightContainer.classList.add("right-container");
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
bottomContainer.appendChild(firstCon);

const secondCon = document.createElement("div");
secondCon.classList.add("second-con");
bottomContainer.appendChild(secondCon);


const imageLarge = document.createElement("div");
imageLarge.classList.add("image-large");
imageLarge.innerHTML = `<img src="./images/catmww.png" alt="cat head image">`;
firstCon.appendChild(imageLarge);

const textLarge = document.createElement("div");
textLarge.classList.add("text-large");
textLarge.innerHTML = `<span class="greet-user">Hi there,</span><p class="name-morgan">Morgan Oakley (@morgan)</p>`
firstCon.appendChild(textLarge);


const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach((text) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = text;
    secondCon.appendChild(button);
});
