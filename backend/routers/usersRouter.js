const express = require("express"); 
const usersRouter = express.Router();
const models = require('../Models');

usersRouter.get('/', (req, res) => {
    models.User.find({}, (err, results) => {
        if(err) res.status(500).send('error');

        res.status(200).send(results); 
    });
});

usersRouter.get('/:id', async (req, res) => {
    let id = req.params.id
    let user = await models.User.findById(id);
    res.status(200).send(user);
});

usersRouter.post('/', (req, res) => {
    const {login, password, fullName} = req.body;

    const user = new models.User(
        {
            login: login, 
            password: password, 
            fullName: fullName, 
            cars: []
        });

    user.save(err => {
        if(err) res.status(500).send('error');
        
        res.status(200).send("User saved");
    })
});

usersRouter.post("/addCar", async (req, res) => {
    const {userId, car} = req.body;
    
    let user = await models.User.findById(userId);
    user.cars.push(car);

    await models.User.findByIdAndUpdate(userId, user);
    res.status(200).send("car added");
});

module.exports = usersRouter;