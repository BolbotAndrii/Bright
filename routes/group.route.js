const {Router} = require('express')
const {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    removeGroup
} = require('../controllers/group.controller')
const router = Router()

router.get(
    '/',
    getGroups
    )
router.get(
    ':id',
    getGroupById
)

router.post(
    '/',
    createGroup
)

router.put(
    '/',
    updateGroup
)

router.delete(
    '/',
    removeGroup
)


module.exports = router
