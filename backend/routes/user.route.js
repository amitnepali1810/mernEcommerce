const express = require("express");
const { registerUser, loginUser, forgotPassword, resetPassword, logoutUser, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, deleteUser, updateUserRole } = require("../controllers/user.controller");
const router = express.Router();
const {isAuthenticateUser, authorizeRoles} = require("../middleware/auth");


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticateUser, getUserDetails);

router.route("/password/update").put(isAuthenticateUser, updatePassword);
router.route("/me/update").put(isAuthenticateUser, updateProfile);

router.route("/admin/users")
.get(isAuthenticateUser, authorizeRoles("admin"), getAllUsers);

router.route("/admin/user/:id")
.get(isAuthenticateUser, authorizeRoles("admin"), getSingleUser)
.delete(isAuthenticateUser, authorizeRoles("admin"), deleteUser)
.put(isAuthenticateUser, authorizeRoles("admin"), updateUserRole)

module.exports = router;