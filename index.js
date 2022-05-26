const express = require('express');
// This document is a JSON file with student data that will serve as a fake API for the exercises
const fakeApi = require('./data');

const app = express();

/* Your code goes here */
app.get('/', (request, res, next) => {
    res.send('<h1>Hello world</h1>');
})

app.get('/loan', (request, res, next) => {
    const filteredStudents = fakeApi.filter((elem) => elem.hasLoan === true);
    res.json(filteredStudents);
})

app.get('/score', (request, res, next) => {

    const total = fakeApi.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.avgScore;
    }, 0);
    const avg = (total / fakeApi.length).toFixed(2);
    res.send(`<h2>The group's average score is ${avg}</h2>`);
})


// Server listening
app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));