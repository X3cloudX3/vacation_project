const express = require("express")
const router = express.Router();
const pool = require("../db/pool")


router.get("/allvacations", async (req, res, next) => {
    const result = await pool.execute(getVacations());
    res.json(result[0])
})

router.post("/addVacation", async (req, res) => {
    const { imageURL, capital, description, price } = req.body
    const [result] = await pool.execute(insertToDbVacations(), [capital, description, price, imageURL])
    console.log(result);

})

router.post("/deleteVacation", async (req, res) => {
    const { id } = req.body
    console.log(id);
    pool.execute(deleteFromDbVacations(), [id])

})
router.post("/editVacation", async (req, res) => {
    const { id, capital, description, price, imageURL, startDate, endDate } = req.body
    console.log(req.body);
    pool.execute(editVacations(), [capital, description, price, imageURL, startDate, endDate, id])
})

router.post("/addToFavorites", async (req, res) => {
    const { id, userId } = req.body
    console.log(req.body);
    pool.execute(insertToDbFavVacations(), [userId, id])
})

router.post("/removeFromFavorites", async (req, res) => {
    const { id, userId } = req.body
    console.log(req.body);
    pool.execute(deleteFromFavDbVacations(), [userId, id])
})


module.exports = router;

function getVacations() {
    return "SELECT * FROM `vacations_data`.`vacations`";
}

function insertToDbVacations() {
    return "INSERT INTO `vacations_data`.`vacations` (`capital`, `description`, `price`,`imageURL`) VALUES (?,?,?,?)"

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