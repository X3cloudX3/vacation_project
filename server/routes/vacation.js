const express = require("express")
const router = express.Router();
const pool = require("../db/pool");

const isAdmin = require('../middlewares/isAdmin')

const jwt = require('jsonwebtoken')


router.use((req, res, next) => {
    try {
        console.log('req', req.headers)
        const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.log('auth validate ', err.message)
        res.status(401).json({
            err: 'unauthorized',
            message: 'not valid user'
        })
    }
})

router.get("/allvacations", async (req, res, next) => {
    try {

        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        console.log('all vacations err', err.message);
        res.status(500).json({ err: 'error' })
    }
})

router.post("/addVacation", isAdmin, async (req, res) => {
    try {
        const { capital, description, price, imageURL, startDate, endDate } = req.body
        await pool.execute(insertToDbVacations(), [capital, description, price, imageURL, startDate, endDate])
        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }

})

router.post("/deleteVacation", async (req, res) => {
    try {
        const { id } = req.body
        await pool.execute(deleteFromDbVacations(), [id])
        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }
})
router.post("/editVacation", async (req, res) => {
    try {
        const { id, capital, description, price, imageURL, startDate, endDate } = req.body
        await pool.execute(editVacations(), [capital, description, price, imageURL, startDate, endDate, id])
        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }
})

router.post("/addToFavorites", async (req, res) => {
    try {
        const { id, userId } = req.body
        await pool.execute(insertToDbFavVacations(), [userId, id]);
        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }
})

router.post("/removeFromFavorites", async (req, res) => {
    try {
        const { id, userId } = req.body
        await pool.execute(deleteFromFavDbVacations(), [userId, id])
        const result = await pool.execute(getAllSelectedVacations(), [req.user.id]);
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }
})

router.post("/likedVacationNumber", async (req, res) => {
    try {
        const { id } = req.body
        const result = await pool.execute(getNumberOfSelectedOnSpecificVacation(), [id])
        res.json(result[0])
    } catch (err) {
        res.status(500).json({ err: 'error' })
    }
})

router.get("/likedVacationReport", async (req, res, next) => {
    try {

        const result = await pool.execute(getAllCountedSelectedVaction());
        res.json(result[0])
    } catch (err) {
        console.log('liked', err.message);
        res.status(500).json({ err: 'error' })
    }
})

module.exports = router;



function insertToDbVacations() {
    return "INSERT INTO `vacations_data`.`vacations` (`capital`, `description`, `price`,`imageURL`,`start_date`,`end_date`) VALUES (?,?,?,?,?,?)"
}


function insertToDbFavVacations() {
    return "INSERT INTO `vacations_data`.`fav_vacations` (`user_id`, `vacation_id`) VALUES (?,?)"
}
function deleteFromFavDbVacations() {
    return "delete from `vacations_data`.`fav_vacations` where `user_id`=? && `vacation_id`=?  "
}

function deleteFromDbVacations() {
    return "delete from `vacations_data`.`vacations` where `id`=? "
}

function editVacations() {
    return "UPDATE `vacations_data`.`vacations` SET `capital`=?, `description`=?, `price`=? ,`imageURL`=?,`start_date`=?,`end_date`=?  WHERE `id`=?";
}

function getAllSelectedVacations() {
    return `SELECT vacations.*, fav_vacations.id as fav_id, fav_vacations.user_id as isLiked
FROM vacations_data.vacations 
left join vacations_data.fav_vacations 
on vacations.id =  fav_vacations.Vacation_id and fav_vacations.user_id = ?`
}

function getAllCountedSelectedVaction() {
    return `SELECT 
    count(*) as liked,vacations.name
  FROM
      vacations_data.vacations
          INNER JOIN
      vacations_data.fav_vacations ON fav_vacations.Vacation_id = vacations.id
  group by vacations.id`
}

function getNumberOfSelectedOnSpecificVacation() {
    return `SELECT 
    count(*) as 'liked'
  FROM
      vacations_data.vacations
          INNER JOIN
      vacations_data.fav_vacations ON fav_vacations.Vacation_id = vacations.id
  where vacations.id=?`
}