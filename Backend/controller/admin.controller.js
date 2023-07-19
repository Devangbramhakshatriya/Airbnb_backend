const { AdminModel } = require("../model/admin.model")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const registerAdmin = async (req, res) => {
    try {
        let user = req.body
        let exixuser = await AdminModel.findOne({where:{ email: user.email }})  //checking whether user already exists or not
        if (exixuser) {
            return res.status(201).send({ msg: "User Is already exist" })
        }

        bcrypt.hash(user.password, 3, async (err, hash) => {
            user.password = hash
            let userRegister = new AdminModel(user)
            await userRegister.save()
            res.status(200).send({ msg: "User Hans been registerd" })
        })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
}



const signInAdmin = async (req, res) => {
    try {
        let credentials = req.body

        //taking userInfo from DB
        let userInDb = await AdminModel.findOne({where:{ email: credentials.email }})

        //checking whether user exist on db
        if (!userInDb) {
            return res.status(400).send({ msg: 'user not found' })
        }

        //comparing the hashed password and recieved password
        bcrypt.compare(
            credentials.password,
            userInDb.password,
            function (err, result) {
                if (result) {
                    //creating the token
                    let token = jwt.sign(
                        { userId: userInDb._id },
                        `${process.env.secret_key}`
                    )
                    res.status(200).send({ msg: 'login successful', token: token, userInDb })
                } else {
                    res.status(400).send({ msg: 'login failed' })
                }
            }
        )
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
}
module.exports = { registerAdmin, signInAdmin }