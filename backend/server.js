import express from "express";
import cors from "cors";

const PORT = process.env.APP_PORT || 4000;
const APP_NAME = process.env.APP_NAME || "Backend";
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || "Bonjour";

const app = express();
app.use(cors());
app.use(express.json());

// "Base de données" en mémoire pour l'examen
let students = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "name et email sont requis" });
  }
  const newStudent = {
    id: students.length + 1,
    name,
    email
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ICI on utilise la config
app.get("/", (req, res) => {
  res.send(`${APP_NAME} OK - ${WELCOME_MESSAGE}`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} en écoute sur le port ${PORT}`);
});
