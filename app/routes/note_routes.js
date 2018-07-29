// app/routes/note_routes.js 

module.exports = (app, db) => {
    app.post('./notes', (req, res) => {
        // You will create notes;
        res.send('Hello');
    });
};