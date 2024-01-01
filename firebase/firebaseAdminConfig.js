// firebaseAdminConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('../slomarket_admin_key.json'); 

// Initialize Firebase Admin SDK
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


const auth = admin.auth();

const db = admin.firestore();
module.exports = { admin, auth, db };
