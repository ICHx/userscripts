// ==UserScript==
// @name     Remove Threads link and red badge on instagram.com
// @version  1.0
// @description  Removes the div with the href https://www.threads.net/ on instagram.com without using the class xdy9tzy
// @author    Jonathan Woolf
// @match    https://www.instagram.com/*
// @grant    none
// @license  Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
// @namespace https://greasyfork.org/users/1008047
// @downloadURL https://update.greasyfork.org/scripts/478959/Remove%20Threads%20link%20and%20red%20badge%20on%20instagramcom.user.js
// @updateURL https://update.greasyfork.org/scripts/478959/Remove%20Threads%20link%20and%20red%20badge%20on%20instagramcom.meta.js
// ==/UserScript==

// Define a function to remove red elements
function removeRedElements() {
    const divsToRemove = document.querySelectorAll('.x1s7lred'); // Assuming '.red' is the selector for red elements
    divsToRemove.forEach(n => {
        let divToRemove = n.parentNode.parentNode;
        console.log(divToRemove);

        // Remove the div if it exists
        if (divToRemove) {
            divToRemove.parentNode.removeChild(divToRemove);
        }
    });
}

// Main function to handle the removal and set up a MutationObserver
function loadRemoveRedMain() {
    removeRedElements(); // Initial removal

    // Set up a MutationObserver to observe changes in the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length || mutation.removedNodes.length) {
                removeRedElements();
            }
        });
    });

    // Configuration of the observer:
    const config = { childList: true, subtree: true };

    // Start observing the document body for changes in the DOM
    observer.observe(document.body, config);
}

// Execute the main function after the window loads
window.addEventListener('load', loadRemoveRedMain, false);
