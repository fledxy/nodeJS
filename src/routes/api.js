const express = require('express');
const { getAllUser, createUser, updateUser,deleteUser } = require('../controller/APIController');

const router = express.Router();

const initAPIRoute = (app) => {
    router.get("/users",getAllUser)
    router.post('/create_users',createUser)
    router.put('/update_user',updateUser)
    router.delete('/delete_user',deleteUser)

    // return app.use('/api/v1/', router)
}

// export default initAPIRoute
// khai bao route
router.get('/users',getAllUser)
router.post('/create_users',createUser)
router.put('/update_user',updateUser)
router.delete('/delete_user',deleteUser)

module.exports = initAPIRoute;
module.exports = router; //export default