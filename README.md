#  <img src="img\logo-192.png"  width="25px" height="25px">   PowerApp

This project was built out of personal need but your are welcome to use this if helps you.<br>
To visit the  public version of the web app click [here](https://powerapp-a068b.web.app/)<br>
This web app was buit mainly for mobile so don't hate on the ui when used on pc.
## About
PowerApp can act as your personal library to keep a catalog of all the softwares and apps you download from all over the web, or it can act as a internal app if you deplot it on your personal server, where people can  download all the internal apps of your organisation in one place.<br><br>

## Modules
- Login, Signup - Pages where users can login or signup using their <b>email and password</b> (or) <b>Google account</b>
- YourApp - Page where all the personal app are displayed and users can add a new app using the add app button by filling in all the data in the modal.
- Curated - Page where the curated apps are displayed . Here the app can be added or removed by the admin only.
- Home - Page which connects all the pages and the logout button is also present here from where the users can logout.
## ScreenShots
|Login|Home|
|:-:|:-:|
|<img src="img\art\login.PNG" height="50%" width="60%">|<img src="img\art\home.PNG" height="50%" width="60%">|

|YourApp|Curated|
|:-:|:-:|
|<img src="img\art\yourapps.PNG" height="50%" width="60%">|<img src="img\art\curated.PNG" height="50%" width="60%">|


People using Powerapp on my server <b>ENJOY!!!</b><br>
But for people who want to deploy this on their server follow the steps below.
## Deploy
> Quick Link for Setup
> - Any editor like [VSCode](https://code.visualstudio.com/Download) or [Notepad++](https://notepad-plus-plus.org/downloads/)
> - [Firebase](https://firebase.google.com/)
> - [Node.js](https://www.nodejs.org/) : to setup npm.
> - [Firebase CLI](https://github.com/firebase/firebase-tools)

<br>

<b>Step-1 : </b>Login to firebase and open your [firebase](https://firebase.google.com/) console.<br>
<b>Step-2 : </b>Add a new project and name it what you want.<br>
<b>Step-3 : </b>Create a folder on you pc where you want to work on the project and setup firebase and git in the folder using npm.<br>
<b>Step-4 : </b>Fork this project to your github account and clone it to your pc.<br>
<b>Step-5 : </b> Now go to your firebase console and add a new web app from where you will get your SDK snippet. Copy  `<script src="/__/firebase/init.js"></script>`and replace this by the same script in `index.html`. This is important as your SDK will have all the important data like peoject name, id, etc.<br>
<b>Step-6 : </b> Go to Authentication in your firebase console, and  enable `Email/password` and `Google` in Sign-in method.<br>
<b>Step-7 : </b>You can serve your project on your localhost by typing `firebase serve` on your terminal or you can deploy your project to the cloud by typing `firebase deploy`.<br>
<b>Step-8 : </b>Now go to you locally hosted or served project and sign-up with the email you want to assign as the admin, and go to Authentication in your firebase console and copy the UID of the user.<br>
<b>Step-8 : </b>Create a new file `Administrator.js` in `js` folder and type `let adminUid='UID'`. Here replace UID with the UID you copied from your firebase console.<br>
<b>Step-9 : </b>Deploy the project and <b>ENJOY!!!</b><br>
