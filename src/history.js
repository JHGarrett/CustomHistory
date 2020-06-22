import {createBrowserHistory} from 'history';

const history = createBrowserHistory();


// Listen for changes to the current location.

createBrowserHistory({
    basename: 'your base URL', // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
});


//check if came from a redirect if you did go back to non redirect.
function updatePastLocations (location, action) {
    switch (action) {
        case 'PUSH':
            // first location when app loads and when pushing onto history
            this.pastLocations.push(location);
            break;
        case 'REPLACE':
            // only when using history.replace
            this.pastLocations[this.pastLocations.length - 1] = location;
            break;
        case 'POP': {
            // happens when using the back button, or forward button
            this.pastLocations.pop();
            // location according to pastLocations
            const appLocation = this.pastLocations[this.pastLocations.length - 1];
            if (!(appLocation && appLocation.key === location.key)) {
                // If the current location doesn't match what the app thinks is the current location,
                // blow up the app history.
                this.pastLocations = [location];
            }
            break;
        }
        default:
    }
}


export default createBrowserHistory();