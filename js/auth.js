//listen for auth status change
let adminStatus=0;
auth.onAuthStateChanged(user=>{
    if (user){
        console.log("User Logged In :", user);
        setupUI(user);
        //bring curated docs
        db.collection('curated').onSnapshot(snapshot=>{
            setupCurated(snapshot.docs)
        });
        //bring user apps
        db.collection(user.uid).onSnapshot(snapshot=>{
            setupAddedApp(snapshot.docs)
        });
    }else{
        console.log("User logged Out");
        setupUI(user);
        setupCurated([]);
    }
    
});

//Google Login
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(console.log).then(cred=>{
        window.location.hash='#mainp';
    });
}
//Sign-in (or) Login
function emailSignin() {
    var email = document.getElementById("signinmail").value;
    var password = document.getElementById("signinpassword").value;
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    }).then(cred => {
        document.getElementById("signinForm").reset();
    });
}
//Sign-up
function emailSignup() {
    var email = document.getElementById("signupmail").value;
    var password = document.getElementById("signuppassword").value;
    auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    }).then(cred => {
        return db.connection('users').doc(cred.user.uid);
        document.getElementById("signupForm").reset();
    });
}
//Logout
function logout() {
    auth.signOut();
}
//Logged-in Logged-out UI Changes
const loggedOutLinks= document.querySelectorAll('.logged-out');
const loggedInLinks= document.querySelectorAll('.logged-in');
const adminLinks= document.querySelectorAll('.adminLink');
const accountDetails = document.getElementById("usr");
let uid="";
const setupUI=(user)=>{
	if(user){
        uid = user.uid;
        if(uid.localeCompare(adminUid)==0){
            console.log("Admin Logged in");
            adminLinks.forEach(item=>item.style.display='block');
            adminStatus=1;
        }else{
            console.log("Regular user logged in");
            adminLinks.forEach(item=>item.style.display='none');
            adminStatus=0;
        }
		//toogle UI Elements
		loggedInLinks.forEach(item=>item.style.display='block');
        loggedOutLinks.forEach(item=>item.style.display='none');
        //Account Details
        const html=`
            <center>
            <div>
                Welcome to PowerApp<br>
                You have logged in with the email-id <br>
                <strong>${user.email}</strong><br>
            </div>
            </center>
        `;
        accountDetails.innerHTML=html;
	}else{
        //Account Details
        accountDetails.innerHTML='';
		//toogle UI Elements
        loggedOutLinks.forEach(item=>item.style.display='block');
        loggedInLinks.forEach(item=>item.style.display='none');
	}
}


