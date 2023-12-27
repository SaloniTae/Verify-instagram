// dummyOpen.js
function notifyParentToClose() {
    if (window.parent !== window) {
        // Code is running in an iframe
        // Notify the parent window to handle the closing action
        window.parent.postMessage('closeWindow', '*');
    } else {
        // Code is running in the main window
        // It's safe to use window.close() here
        window.close();
    }
}
