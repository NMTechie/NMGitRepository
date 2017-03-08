gapi.load('client:auth2', start);

function start() {

    /*Initializes the JavaScript client with API key, OAuth client ID, scope, 
    and API discovery document(s). If OAuth client ID and scope are provided, 
    this function will load the gapi.auth2 module to perform OAuth. 
    The gapi.client.init function can be run multiple times, such as to set up more APIs, 
    to change API key, or initialize OAuth lazily.*/

    gapi.client.init
        (
            {
                apiKey: 'AIzaSyBiPYVUAfvi2Q5ic_tGobyCydo2U2AzyNM',
                clientId: '522935519119-89m6tad57u90n8hb9ailgepc0452qq6b.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/userinfo.profile',
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest"]       
            }
        ).then
        (function ()
            {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            }
        );
};

function updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
        makeApiCall();
    }
}

function makeApiCall() {
    // Make an API call to the People API, and print the user's given name.
    gapi.client.people.people.get({
        resourceName: 'people/me'
    }).then(function (response) {
        console.log('Hello, ' + response.result.names[0].givenName);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

function handleSignInClick(event) {
    
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}