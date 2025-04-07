const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM task WHERE completed = FALSE ORDER BY created_at DESC LIMIT 5"
  );
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const [result] = await db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({ id: result.insertId });
});

router.put("/:id/done", async (req, res) => {
  await db.query("UPDATE task SET completed = TRUE WHERE id = ?", [
    req.params.id,
  ]);
  res.sendStatus(200);
});

module.exports = router;
