const express = require("express");
const app = express();
// write your middleware here
const checkingWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 19) {
        next();
    } else {
        res.send('This application is only available during working hours (Mon-Fri, 9-19).');
    }
};
app.use(checkingWorkingHours);

// home page route here => path : /
app.get('/', (req, res) => {
    res.send('Welcome to the Home page!');
});

// services page route here => path : /services
app.get('/services', (req, res) => {
    res.send('Our Services page');
});

// contact page route here => path : /contact
app.get('/contact', (req, res) => {
    res.send('Contact us page');
});

// listen to your application here
app.listen(5000, () => {
    console.log('This application is running on port 5000');
});
