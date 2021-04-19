import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuario Salvo" });
});

app.listen(3333, () => console.log("Server running on port 3333"));
