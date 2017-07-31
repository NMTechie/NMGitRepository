The IIS express application host file resides at 
=====================================================================================================================================================================================
C:\users\<<uid>>\documents\IISExpress\config\applicationhost.config
command is :- 
C:\Program Files\IIS Express>iisexpress.exe  /config:"C:\Users\152089\Documents\IISExpress\config\applicationhost.config"  /site:"AngularWeb" /apppool:"Clr4IntegratedAppPool"

=====================================================================================================================================================================================
OAuth---->Secure Token Service --> JSON Web Token (JWT)
=====================================================================================================================================================================================
http://stackoverflow.com/questions/34784644/what-is-the-difference-between-oauth-based-and-token-based-authentication
https://aaronparecki.com/oauth-2-simplified/

Google OAuth Platform
https://developers.google.com/identity/protocols/OAuth2 
(Had used my first gmail id for this purpose)

Developer console to register the App
https://console.developers.google.com/apis/library

Google OAuth Provider Client Library
https://github.com/google

Google API explorer
https://developers.google.com/apis-explorer/#p/

Google API Client Library
https://developers.google.com/api-client-library/
https://developers.google.com/api-client-library/javascript/reference/referencedocs

Google API and Scope documentation 
http://stackoverflow.com/questions/10664868/where-can-i-find-a-list-of-scopes-for-googles-oauth-2-0-api
https://gsuite-developers.googleblog.com/2012/01/tips-on-using-apis-discovery-service.html

Google access token validation from server - side (API)
https://developers.google.com/identity/sign-in/web/backend-auth

** Depending on the Depending on the API, you need an 
	- API key
	- a service account
	- an OAuth 2.0 client ID

** Client ID is - MyFirstOAuthOnGoogle
** Google given Client Id - 522935519119-89m6tad57u90n8hb9ailgepc0452qq6b.apps.googleusercontent.com
** Google given Client Secrect - Sa5nY53syUSougJo0L1IWo2x
====================================================================================================================================================================================================
Security on Single Page Application with API
====================================================================================================================================================================================================
====================================================================================================================================================================================================
Security in Web API (Will implement JWT and OAuth from Microsoft)

It appears that as whole Microsoft does not have any OAuth end point service rather has different product 
bucket to implement authentication.

Windows Live Services
https://msdn.microsoft.com/en-us/library/hh243641.aspx
"It has been superseded by a product branded Office 365"

Office 356 documentation
https://msdn.microsoft.com/en-us/office/office365/howto/platform-development-overview

Azure AD v2.0 endpoint
https://developer.microsoft.com/en-us/graph/docs/authorization/converged_auth

nileshranjan.mitra@outlook.com
yahoo pwd

OAuth process using Microsoft Account
https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/microsoft-logins

App registration URL
https://apps.dev.microsoft.com/
App Name - FirstWebAPIOnMSOAuth
AppId/ClientId - 4f24c6a2-d9de-4d5a-8e90-4c30ff7a4998
Password/ClientSecrect - 9eYnP2nuERcXV7v2VuqdrsJ

Javascript package for the Microsoft accout Authentication
https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp/blob/master/index.html
====================================================================================================================================================================================================
