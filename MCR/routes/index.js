const router = require("express").Router();
const page = require("../controllers/pageController");
const auth = require("../controllers/authController");
const passport = require('../lib/passport');



router.get("/", page.home);

router.get("/login", page.login);
router.post('/login', auth.login)


router.get("/logout", page.logout);

router.get("/register", page.register);
router.post('/register' , auth.register);

router.get("/gamesuit", auth.gamesuit);
router.get("/dashboard", page.dashboard);

router.get("/edit/:id", page.edit);

router.post("/update/:id", page.edit);
router.post("/delete/:id", page.edit);


module.exports = router;