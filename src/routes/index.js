import { Router } from "express";

const router = Router();

import {
    updateOs,
    updateUser,
    getItems,
    createItem
} from "../controllers/index.js";

// Routes
router.put("/os/:id", updateOs);
router.put("/user/:id", updateUser);
router.get("/items", getItems);
router.post("/item", createItem);

export default router;
