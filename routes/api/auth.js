const express = require("express");

const { validateBody } = require("../../middlewares");
const { authenticate } = require("../../middlewares");
const { upload } = require("../../middlewares");


const {schemas} = require("../../models/user");

const router = express.Router();

const ctrl = require("../../controllers/auth");


router.post("/register", validateBody(schemas.registerSchema), ctrl.register );

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail)

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;