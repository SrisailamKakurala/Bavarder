import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";
const app: Application = express();
const PORT = process.env.PORT || 7000;

//  Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Notes on `express.urlencoded({ extended: false })`
// ✅ Parses incoming form data (URL-encoded) and makes it available in `req.body`.
// ✅ `extended: false` allows only simple key-value pairs, while `extended: true` supports nested objects.
// ✅ Used for handling form submissions in `POST` requests.

// Example:
// If a form sends `name=John&age=25`, `req.body` will be:
// { name: 'John', age: '25' }

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// Routes
app.use('/api', router);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
