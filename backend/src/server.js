const express = require("express");
const app = express();

app.use(express.json());
const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Teebay" });
});

app.listen(PORT, () => {
  console.log(`🚀 Express Server ready at port: ${PORT}`);
});
