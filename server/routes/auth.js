const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken");
const pool = require("../db/pool")
const bcrypt = require('bcryptjs');
const salt = "$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu"



console.log("salt is validated:", bcrypt.hashSync("password", salt))


router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await isUserExist(email, password);
        if (!user) return res.status(401).send("ERROR LOGIN");

        const currentUser = { ...user, password: null };
        const jwtToken = await getJwt(currentUser)
        return res.json({ token: jwtToken, user: currentUser, redirect: true })
    } catch (ex) {
        if (!user) return res.status(401).send("ERROR LOGIN")
    }

})


router.post("/register", async (req, res, next) => {
    const { email, password } = req.body
    const user = await isUserExist(email);
    if (user) return res.json({ message: "user already exist" })

    const insertId = await saveUser(req.body)
    if (insertId) return res.json({ message: "user saved!", redirect: true })
    return res.json({ message: "error!" })

})


router.get("/verify", async (req, res, next) => {
    try {
        setTimeout(() => {
            const { authorization } = req.headers


            jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
                if (err) return res.json({ status: false })
                if (decoded.user_type === "admin") { return res.json({ status: true, admin: true, userId: decoded.id }) } else {
                    return res.json({ status: true, admin: false, userId: decoded.id })
                }
            })
        }, 2000);
    } catch (ex) {
        return res.json({ status: false })
    }

})

module.exports = router;



function getJwt(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) reject("error")
            resolve(token)
        })
    })
}



async function isUserExist(email, password = null) {
    // const saltQuery = getUserExistSaltQuery()
    const payload = password ? [email, bcrypt.hashSync(password, salt)] : [email]
    // const salt2 = await pool.execute(saltQuery, payload)
    const query = password ? getUserPasswordExistQuery() : getUserExistQuery()
    const [result] = await pool.execute(query, payload)
    const [firstUser] = result;
    return firstUser;
}


async function saveUser(payload) {
    const { email, password, firstName, lastName } = payload
    const [result] = await pool.execute(getUserInsertionQuery(), [email, bcrypt.hashSync(password, salt), firstName, lastName, salt])
    return result.insertId
}

function getUserExistSaltQuery() {
    return "SELECT salt FROM `vacations_data`.`users` where email = ?";
}


function getUserExistQuery() {
    return "SELECT * FROM `vacations_data`.`users` where email = ?";
}

function getUserPasswordExistQuery() {
    return "SELECT * FROM `vacations_data`.`users` where email = ? and password = ?";
}
function getUserInsertionQuery() {
    return "INSERT INTO `vacations_data`.`users` (`email`, `password`, `first_name`, `last_name`,`salt`) VALUES (?,?,?,?,?)"

}