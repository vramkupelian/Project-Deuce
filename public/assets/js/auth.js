function startAuth(){
    const config = {
        apiKey: "AIzaSyAC0BO3jbLgKPU_GvD5yBS56QzoFQCmjc8",
        authDomain: "artist-booker.firebaseapp.com",
        databaseURL: "https://artist-booker.firebaseio.com",
        projectId: "artist-booker",
        storageBucket: "artist-booker.appspot.com",
        messagingSenderId: "401112093874"
    };

    firebase.initializeApp(config);

    //Get elements
    // const username = document.getElementById('username');
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const loginBtn = document.getElementById('loginBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    //Add login event
    loginBtn.addEventListener("click", e=>{
        //get email and pass
        // const user = username.value;
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.then((result)=>{
            console.log(result.emailVerified);
            //if not a verified email, send verification.
            if(result.emailVerified === false){
                console.log("need to verify email");
                var user = firebase.auth().currentUser;

                user.sendEmailVerification().then(function() {
                // Email sent.
                console.log("verification email sent");
                console.log(user.emailVerified);
                $(".container").append("<span> Verification email sent. Check your inbox and verify email before continuing. </span>");
                }).catch(function(error) {
                // An error happened.
                console.log(error);
                console.log("error happened when trying to send verification email");
                });
            }
        }
        );
        promise.catch(e=> console.log(e.message));
    });

    //Add Sign Up Event
    signUpBtn.addEventListener("click", e=>{
        //get email and pass
        //validate for email
        // const user = username.value;
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.then(function(){
            console.log("need to verify email");
                var user = firebase.auth().currentUser;

                user.sendEmailVerification().then(function() {
                // Email sent.
                console.log("verification email sent");
                console.log(user.emailVerified);
                $(".container").append("<span> Verification email sent. Check your inbox and verify email before continuing. </span>");
                }).catch(function(error) {
                // An error happened.
                console.log(error);
                console.log("error happened when trying to send verification email");
                });
        })
        promise.catch(e=> console.log(e.message));
    });

    //logout
    logoutBtn.addEventListener("click", e=>{
        firebase.auth().signOut();
    })

    //Add real time listener
    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser){
            // console.log(firebaseUser);
            logoutBtn.classList.remove("hidden");
            loginBtn.classList.add("hidden");
            if(firebaseUser.emailVerified === false){
                //go to verify email page
            
            }else{
                //go to next page
            }
        }
        else{
            console.log("not logged in");
            logoutBtn.classList.add("hidden");
            loginBtn.classList.remove("hidden");
        }
    });

}
startAuth();