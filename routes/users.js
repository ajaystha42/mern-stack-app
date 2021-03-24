const express = require("express");

const router = express.Router();
const User = require("./../models/user");
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "./../public/index.html"));
});

router.post("/user", (req, res, next) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
  });

  console.log(user);

  user.save().then((newUser) => {
    res.status(201).json({
      message: "User added successfully!",
      newUser,
    });
  });
});

router.get("/users", (req, res, next) => {
  User.find().then((fetchedUsers) => {
    res.status(201).json({
      message: "All Users fetched Successfully.",
      users: fetchedUsers,
    });
  });
});

// router.get("/user/:id", checkAuth, (req, res, next) => {
//   User.findById(req.params.id).then((user) => {
//     if (user) {
//       res.status(200).json({
//         user: user,
//         message: "User Found",
//       });
//     } else {
//       res.status(404).json({
//         message: "User not found",
//         user: null,
//       });
//     }
//   });
// });

module.exports = router;
