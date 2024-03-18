const express = require("express");
const router = express.Router();
const { handleGetAllUsers ,
        handlegetUserById ,
        handleupdateUserById ,
        handleDeleteUserById ,
        handleCreateNewUser ,
    } = require('../controllers/user')


router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)

router.route('/:id')
    .get(handlegetUserById)
    .patch(handleupdateUserById)
    .delete(handleDeleteUserById);

module.exports=router;