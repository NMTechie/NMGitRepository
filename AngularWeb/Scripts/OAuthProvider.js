/******************The section is meant for the Google OAuth Provider strats*******************/
gapi.load('client:auth2', initGapiClient);
var gAuthPromise;

function handleGoogleSignIn(event) {
    /* Ideally the button should only show up after gapi.client.init finishes, so that this
    handler won't be called before OAuth is initialized.*/
    var signInOptions = {
        fetch_basic_profile: "True",
        prompt: "consent",
        ux_mode: "popup"
    };
    gAuthPromise = gapi.auth2.getAuthInstance().signIn(signInOptions);
}
function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}
function initGapiClient() {
    /*Initializes the JavaScript client with API key, OAuth client ID, scope, and API discovery document(s). If OAuth client ID and scope are provided, 
    this function will load the gapi.auth2 module to perform OAuth. The gapi.client.init function can be run multiple times, such as to set up more APIs, 
    to change API key, or initialize OAuth lazily.*/
    gapi.client.init
     (
         {
             /*apiKey: 'AIzaSyBiPYVUAfvi2Q5ic_tGobyCydo2U2AzyNM', This is not required for OAuth Authentication*/ 
             clientId: '522935519119-89m6tad57u90n8hb9ailgepc0452qq6b.apps.googleusercontent.com',
             scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login',
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
        /*************************** This approach showcase the general requset response mechanism where you need to know the api
        URL from the API explorer**********************************.

        var profileReqObj = {
            path: "https://www.googleapis.com/oauth2/v2/userinfo",
            method: "GET"
        };
        gapi.client.request(profileReqObj).then(
            function (response) {
                response.result.email;                
                response.result.family_name
                response.result.gender
                response.result.given_name
                response.result.id
                response.result.link
                response.result.locale
                response.result.name
                response.result.picture
                response.result.verified_email
            },
            function (reason)
            {
                alert("Hello");
            }
            )*/

        /*************************** This approach showcase the generated method discovery approach
        After loading an API Discovery Document, the JavaScript client library automatically generates
        JavaScript methods for interacting with the API. For each method defined in the API Discovery 
        Document, a corresponding method is constructed on the gapi.client object.**********************************/

        gapi.client.oauth2.userinfo.get().then(
            function (response) {
                alert(response.result.family_name);
            },
            function (reason) {
                alert(reason.result.error.message);
            }
            );
    }
}
/******************The section is meant for the Google OAuth Provider ends*******************/