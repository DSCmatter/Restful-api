const express = require('express');
const app = express(); 
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT, 
    () => console.log('Server is alive on http://localhost:8080')
);

app.get('/home', (req, res) => {
    res.status(200).send({
        home: 'home',
        size: 'large'
    });
});

app.post('/home/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        return res.status(418).send({ message: 'We need a logo!' });
    }

    res.send({
        home: `logo with ${logo} and ID of ${id}`,
    });
});
