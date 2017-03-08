/******************The section is meant for the Google OAuth Provider strats*******************/
function handleGoogleSignIn(event) {
    /* Ideally the button should only show up after gapi.client.init finishes, so that this
    handler won't be called before OAuth is initialized.*/
    var signInOptions = {
        fetch_basic_profile: "True",
        prompt: "select_account",
        ux_mode: "redirect",
        redirect_uri: "http://localhost:1541/Views/Landing.html"
    };
    var gAuthPromise = gapi.auth2.getAuthInstance().signIn(signInOptions);
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

gapi.load('client:auth2', initGapiClient);

function initGapiClient() {
    /*Initializes the JavaScript client with API key, OAuth client ID, scope, and API discovery document(s). If OAuth client ID and scope are provided, 
    this function will load the gapi.auth2 module to perform OAuth. The gapi.client.init function can be run multiple times, such as to set up more APIs, 
    to change API key, or initialize OAuth lazily.*/
    gapi.client.init
     (
         {
             apiKey: 'AIzaSyBiPYVUAfvi2Q5ic_tGobyCydo2U2AzyNM',
             clientId: '522935519119-89m6tad57u90n8hb9ailgepc0452qq6b.apps.googleusercontent.com',
             scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me',
             discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest"]
         }
     ).then
     (
       function () {
           // Listen for sign-in state changes.
           gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
           // Handle the initial sign-in state.
           updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
       }
     );
};

function updateSigninStatus(isSignedIn)
{
    /*When signin status changes, this function is called. If the signin status is changed to signedIn, we make an API call.*/
    if (isSignedIn)
    {
        
    }
}
/******************The section is meant for the Google OAuth Provider ends*******************/