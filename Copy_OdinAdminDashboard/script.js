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

const rightBodyCon = createAndAppendElement("div", bodyContainer, ["right-body-con"]);

const leftBodyCon = createAndAppendElement("div", bodyContainer, ["left-body-con"]);



// for (let i = 0; i < 2; i++) {
//     createAndAppendElement("div", leftBodyCon, ["elem-two"]);
// }




// Fetch data from text.json
fetch('text.json')
    .then(response => response.json())
    .then(textData => {
        // Loop through the data and create elements dynamically
        textData.forEach((textObj) => {
            // Create a new div for each item
            const elemOne = createAndAppendElement("div", rightBodyCon, ["elem-one"]);
            
            // Set the innerHTML using the fetched data
            elemOne.innerHTML = `
                <h4>${textObj.heading4}</h4>
                ${textObj.sentence}
                ${textObj.threeIcons}
            `;
        });
    })
    .catch(error => {
        console.error("Error fetching text.json:", error);
    });





    const jsonFiles = [
        { 
            url: "announcements.json", 
            handleData: handleAnnouncements 
        },
        { 
            url: "trending.jso", 
            handleData: handleTrending 
        }
    ];
    
    for (let i = 0; i < 2; i++) {
        // Create a new div element
        const elem = createAndAppendElement("div", leftBodyCon, ["elem-two"]);
        
        // Fetch the corresponding JSON file
        fetch(jsonFiles[i].url)
            .then(response => response.json())
            .then(data => {
                // Call the specific handler function for this JSON file
                jsonFiles[i].handleData(elem, data);
            })
            .catch(error => {
                console.error(`Error fetching ${jsonFiles[i].url}:`, error);
            });
    }
    
    // Function to handle data for announcements.json
    function handleAnnouncements(elem, data) {
        elem.innerHTML = data.map(item => `
            <div class="announcement-item">
                ${item.heading}
                ${item.content}
            </div>
        `).join('');
    }
    
    // Function to handle data for trending.json
    function handleTrending(elem, data) {
        elem.innerHTML = data.map(item => `
            <div class="trending-item">
                ${item.imageBox}
                ${item.textBox}
            </div>
        `).join('');
    }
    