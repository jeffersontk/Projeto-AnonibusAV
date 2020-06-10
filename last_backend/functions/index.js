const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();

//const userId = null;

let db = admin.firestore();


exports.sendMessage = functions.https.onRequest((request, response) => {

  let queryConnection = db.collection('chat')
    .doc('sala_1').collection('mensagem').doc();

  queryConnection.set({
    mensagem: request.body.mensagem,
    user: request.body.user,
    profilePic: request.body.profilePic,
    imagem: request.body.imagem
  }).then(function(){
    response.json({ "ok": true })
  }).catch(function(err){
    response.json({ "error": true })
  });
})

 exports.getUserId = functions.auth.user().onCreate((user) => {
   userId = user.uid
   console.log(userId)
})



exports.sendProfileData = functions.https.onRequest((request, response) => {
  let queryConnection = db.collection('profile')
    .doc('users').collection('data').doc(userId);

  queryConnection.set({
    userCustomName: request.body.userCustomName,
    customProfilePic: request.body.customProfilePic,
  }).then(function(){
    response.json({ "ok": true })
  }).catch(function(err){
    response.json({ "error": true })
  });
})
