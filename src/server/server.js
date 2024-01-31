const express = require("express");
const app = express();
const port = 3002;
const cors = require("cors");
app.use(cors());
const token = "QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv";
app.get("/data", async (req, res) => {
  try {
    const response = await fetch("https://aio.server9.nelios.com/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
