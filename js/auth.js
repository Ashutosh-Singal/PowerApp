//listen for auth status change
auth.onAuthStateChanged(user=>{
    if (user){
        console.log("User Logged In :", user);
    }else{
        console.log("User logged Out");
    }
    
});
//bring curated docs
db.collection('curated').get().then(snapshot=>{
    //console.log(snapshot.docs)
    setupCurated(snapshot.docs)
});
//Google Login
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(console.log);
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
        document.getElementById("signupForm").reset();
    });
}
//Logout
function logout() {
    auth.signOut();
}