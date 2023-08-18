const express = require('express');

const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index');
});
app.post('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})


const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});