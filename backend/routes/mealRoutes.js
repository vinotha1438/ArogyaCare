const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(
  __dirname,
  "../data/meals.json"
);

router.get("/", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  const meals = JSON.parse(data);

  res.json(meals);
});

router.post("/", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  const meals = JSON.parse(data);

  meals.push(req.body);

  fs.writeFileSync(
    filePath,
    JSON.stringify(meals, null, 2)
  );

  res.json({
    success: true,
    message: "Meal saved successfully",
  });
});

router.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);

  const data = fs.readFileSync(filePath, "utf8");
  const meals = JSON.parse(data);

  meals.splice(index, 1);

  fs.writeFileSync(
    filePath,
    JSON.stringify(meals, null, 2)
  );

  res.json({
    success: true,
    message: "Meal deleted successfully",
  });
});

module.exports = router;
