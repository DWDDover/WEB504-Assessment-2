document.addEventListener('DOMContentLoaded', () => {
    console.log('Document Loaded');


    //Firebase initialisation check

    if (!firebase.apps.length) {
        console.error('firebase not initialized');
        return;
    } else {
        console.log('firebase initialized successfully')
    }

    //firebase Services

    const auth = firebase.auth();
    const database  = firebase.database();

    //Set persistence to LOCAL

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            console.log('firebase auth persistence set to local');
        })
        .catch((error) => {
            console.error('error setting persistence', error);
        });

    //Auth state listener

    auth.onAuthStateChanged((user) => {
        
    })
})