const { db } = require('../admin/admin');

exports.getTodos = (req, res) => {
    console.log("Staring...")
    db
        .collection('animals')
        .doc('endangered')
        .get()
        .then(snap => {
            if(snap.exists) {
                const data = snap.data()
                return res.json(data)
            } else {
                return res.send('No Data in Database')
            }
        })
    res.json(animals)
}