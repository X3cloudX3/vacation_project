
const moment = require("moment");
const axios = require("axios");
const fs = require("fs");
const pool = require("../db/pool")
async function countries() {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    return data;
}
const vacationArray = require('./vacationImages.json')

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function seedFlights(NOF) {
    const c = await countries();
    const flights = [];
    for (let index = 0; index < NOF; index++) {
        const randomIndex = Math.round(Math.random() * 120);
        flights.push(new Flight(c[randomIndex]));
    }
    return flights;
}

function Flight(from) {

    this.capital = from.capital;
    this.country = from.name;
    this.starts = moment()
        .add(Math.round(Math.random() * 2) + 200, "hours")
        .format("DD-MM-YYYY hh:mm:ss");
    this.ends = moment()
        .add(Math.round(Math.random() * 10) + 300, "hours")
        .format("DD-MM-YYYY hh:mm:ss");
    this.description = `live the beauty of ${from.name}'s ${from.capital} for the cheapest price there is`;
    this.price = `${getRandomArbitrary(200, 2000)}$`;
    const random = Math.floor(Math.random() * 11)
    this.image = vacationArray.images[random];
}

seedFlights(10).then(res => {
    // console.log(res);
    res.map(country => {
        saveVacation(country);

    }),
        // saveVacation(res),
        // fs.writeFile("./data/flights.json", JSON.stringify({ flights: res }),
        err =>
            console.log(err)

});

async function saveVacation(payload) {
    try {
        const { capital, country, description, price, image } = payload
        const [result] = await pool.execute(insertToDbVacations(), [capital, country, starts, ends, description, price, image])
        return result.insertComment
    } catch (error) {
        console.log(error);

    }

}

function insertToDbVacations() {
    return "INSERT INTO `vacations_data`.`vacations` (`capital`, `name`, `description`, `price`,`imageURL`) VALUES (?,?,?,?,?)"

}

module.exports = { seedFlights };


