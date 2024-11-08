document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.menubtn');
    const menuItems = ['Play online', 'Play on-site', 'The story', 'Contact'];

    // Create a new div for the menu
    const menu = createMenu(menuItems);

    // Create the blur overlay
    const blurOverlay = createBlurOverlay();

    // Append blur overlay and menu to the body
    document.body.appendChild(blurOverlay);
    document.body.appendChild(menu);

    // Initially hide the menu and blur overlay
    menu.style.display = 'none';
    blurOverlay.style.display = 'none';

    // Toggle menu visibility 
    menuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            showMenu(menu, blurOverlay);
        }
    });

    // Close the menu 
    menu.querySelector('.close-btn').addEventListener('click', () => {
        hideMenu(menu, blurOverlay);
    });
});

// Function to create the menu
function createMenu(menuItems) {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Create and add close button
    const closeButton = document.createElement('img');
    closeButton.src = './close.png';
    closeButton.alt = 'Close';
    closeButton.classList.add('close-btn');
    menu.appendChild(closeButton);

    // Add menu items
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = item;
        menuItem.classList.add('menuItem');
        menu.appendChild(menuItem);
    });
    return menu;
}

// Function to create the blur overlay
function createBlurOverlay() {
    const blurOverlay = document.createElement('div');
    blurOverlay.classList.add('blur-overlay');
    return blurOverlay;
}

// Function to show the menu 
function showMenu(menu, blurOverlay) {
    menu.style.display = 'block';  
    blurOverlay.style.display = 'block';  
    setTimeout(() => {
        menu.classList.add('fade-in');  
    }, 10);
}

// Function to hide the menu 
function hideMenu(menu, blurOverlay) {
    menu.classList.remove('fade-in');
    setTimeout(() => {
        menu.style.display = 'none';  
        blurOverlay.style.display = 'none';  
    }, 300);
}