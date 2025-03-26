import { Router } from "express"
import AuthController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import ChatGroupController from "../controllers/chatGroup.controller.js";

//  Express (`express()`)
// - Acts as the main server that listens for incoming requests.
// - Manages global middleware, configurations, and application-wide settings.
// - Handles all routes and functionalities in a single place.
// - Suitable for small projects where everything can be kept together.

//Router (`Router()`)
// - Helps break down routes into smaller, manageable modules.
// - Keeps different features (like auth, users, posts) in separate files.
// - Makes the codebase cleaner and easier to maintain.
// - Essential for large applications where organization is key.

const router = Router()

// Auth Routes
router.post('/auth/login', AuthController.login);

// Chat Group Routes
router.post('/chat-group', authMiddleware, ChatGroupController.store);

export default router;