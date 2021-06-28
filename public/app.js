document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();

    // console.log(app);

    const db = firebase.firestore();

    const user = db.collection('students').doc('personal_info').get()
        .then(doc => {
            const userInfo = doc.data();

            document.write(`${userInfo.firstname} ${userInfo.time}`);
            
        })
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