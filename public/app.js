document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.initializeApp();

    console.log(app);
});

const googleLogin = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(result => {
            const user = result.user;

            document.write(`Hello ${ user.displayName }`);
        })
        .catch(err => window.alert(err.message));
}