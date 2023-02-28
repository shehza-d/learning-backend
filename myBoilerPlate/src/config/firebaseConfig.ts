//for firebase storage bucket
import admin from "firebase-admin";

const serviceAccount = process.env.serviceAccountFB || {};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://deletethis.firebaseio.com",
});
const bucket = admin.storage().bucket("gs://deletethis.appspot.com");

export default bucket;