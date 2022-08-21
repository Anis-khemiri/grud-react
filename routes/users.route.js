const express = require('express');
const { AddUser, FindAllUser, FindSinglUser, UpdateUser, DeleteUser } = require('../controllers/users.controllers');
const router = express.Router();


// router.get('/api', (req,res)=>{
//     res.send('work')
// })


/*add user */

router.post('/users', AddUser)

/*find all user */

router.get('/users', FindAllUser)

/*find single user */

router.get('/users/:id', FindSinglUser)

/*update user */

router.put('/users/:id', UpdateUser )

/*delete user */

router.delete('/users/:id', DeleteUser)


module.exports = router;