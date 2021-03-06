const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.post("/register", (req, res) => {
  console.log(req.body);

  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor funcionando");
});

app.post("/login", (req, res) => {
  console.log(req.body);

  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.listen(3000, () => {
  console.log("El servidor corriendo en el puerto 3000");
});
