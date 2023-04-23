import { fileURLToPath } from "url";
import { createServer } from "vite";
import express from "express";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();

// Parse JSON bodies (as an alternative to body-parser)
app.use(express.json());

// Route handler for POST /labels
app.post("/labels", (req, res) => {
  // Process the form data here
  const { name, description, color } = req.body.label;
  console.log(`Received new label: name=${name}, description=${description}, color=${color}`);

  // Send a response
  res.status(200).send("Label created successfully");
});

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: __dirname,
    server: {
      port: 8000,
      middlewareMode: true,
    },
  });

  await server.listen();

  server.printUrls();
})();
