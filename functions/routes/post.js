const admin = require('firebase-admin')
const firestore = admin.firestore()

module.exports = (req, res) => {

    admin.initializeApp()
    const { lat, lng, animal } = req.body;
    const curData = [];

    db
        .collection('endangered_animals')
        .doc('endangered')
        .get()
        .then(snap => {
            curData = snap.data().animals
        })

    const newArray = curData.push({ lat: lat, lng: lng, animal: animal})

    firestore
        .collection('endangered_animals')
        .doc('endangered')
        .set({
            animals: newArray
        })
}