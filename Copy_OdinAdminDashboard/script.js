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

// Utility function to create and append an element with specified properties
function createAndAppendElement(tag, parent, classNames = [], innerHTML = "") {
    const element = document.createElement(tag);
    classNames.forEach((className) => element.classList.add(className));
    if (innerHTML) element.innerHTML = innerHTML;
    parent.appendChild(element);
    return element;
}
    
// Sidebar and Mainbar
const sidebarContainer = createAndAppendElement("section", container, ["sidebar-container"]);
const mainbarContainer = createAndAppendElement("section", container, ["mainbar-container"]);
    
// Header and Body
const headerContainer = createAndAppendElement("div", mainbarContainer, ["header-container"]);
const bodyContainer = createAndAppendElement("div", mainbarContainer, ["body-container"]);
    
// Top and Bottom sections in Header
const topContainer = createAndAppendElement("section", headerContainer, ["top-container"]);
const bottomContainer = createAndAppendElement("section", headerContainer, ["bottom-container"]);
    
// Left and Right containers in Top section
const leftContainer = createAndAppendElement("section", topContainer, ["left-container"]);
const rightContainer = createAndAppendElement("section", topContainer, ["right-container"]);
    
// Add content to Left container
createAndAppendElement("div", leftContainer, ["search-icon", "search"], `<span class="mdi mdi-magnify"></span>`);
createAndAppendElement("div", leftContainer, ["search-bar", "search"], `<input type="text" id="search_bar" name="search_bar">`);
    
// Add content to Right container
createAndAppendElement("div", rightContainer, ["notification-icon", "right-div"], `<span class="mdi mdi-bell-badge-outline"></span>`);
createAndAppendElement("div", rightContainer, ["cat-head-image", "right-div"], `<img src="./images/catmww.png" alt="cat head image">`);
createAndAppendElement("div", rightContainer, ["name-text", "right-div"], `<span class="name-user">MorganOakley</span>`);
    
// Add content to Bottom section
const firstCon = createAndAppendElement("div", bottomContainer, ["first-con"]);
const secondCon = createAndAppendElement("div", bottomContainer, ["second-con"]);
    
// Add content to First Container
createAndAppendElement("div", firstCon, ["image-large"], `<img src="./images/catmww.png" alt="cat head image">`);
createAndAppendElement("div", firstCon, ["text-large"], `<span class="greet-user">Hi there,</span><p class="name-morgan">Morgan Oakley (@morgan)</p>`);
    


const buttonTexts = ["New", "Upload", "Share"];
buttonTexts.forEach((text) => {
    createAndAppendElement("button", secondCon, ["btn"], text);
});
    
const rightBodyCon = document.createElement("div");
rightBodyCon.classList.add("right-body-con");
bodyContainer.appendChild(rightBodyCon);

const leftBodyCon = document.createElement("div");
leftBodyCon.classList.add("left-body-con");
bodyContainer.appendChild(leftBodyCon);

// const leftBodyConText = document.createElement("div");
// leftBodyConText.classList.add("left-body-con-text");
// leftBodyConText.innerHTML = `<p>Announcements</p>`;
// leftBodyCon.appendChild(leftBodyConText);

for (let i = 0; i < 6; i++) {
    const elemOne = document.createElement("div");
    elemOne.classList.add("elem-one");
    rightBodyCon.appendChild(elemOne);
}



for (let i = 0; i < 2; i++) {
    const elemTwo = document.createElement("div");
    elemTwo.classList.add("elem-two");
    leftBodyCon.appendChild(elemTwo);
}


fetch('text.json')
    .then(response => response.json())
    .then(textData => {
        textData.forEach(textObj => {
            elemOne.innerHTML = textObj.heading4;
            elemOne.innerHTML = textObj.sentence;
        });
    });

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