import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/foo": "http://localhost:4567",

      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
      // Using the proxy instance
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      "/socket.io": {
        target: "ws://localhost:5174",
        ws: true,
      },
    },
  },
});

// import express from "express";

// export default {
//   configureServer: ({ app }) => {
//     const router = express.Router();

//     router.post("/labels", (req, res) => {
//       const url =
//         "https://script.google.com/macros/s/AKfycbzMvuEKUZQUOTFxJFH0c3XzSPzGKLq6fjknGZ9B8XuJuwnuYjydVxegYM80uMM6TqlrBw/exec";
//       // Here you can use a library such as 'node-fetch' or 'axios' to make the request to the URL
//       // and handle the response
//       // ...
//       res.send("Request received");
//     });

//     app.use(router);
//   },
// };
