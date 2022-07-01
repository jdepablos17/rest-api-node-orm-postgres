import { Router } from "express";

const router = Router();

import {
    updateOs,
    updateUser,
    getItems,
    createItem,
    createUser,
    getCountryWithUser, 
    getCountryWithUserGrouped
} from "../controllers/index.js";

// Routes
router.put("/os/:id", updateOs);
router.put("/user/:id", updateUser);
router.get("/items", getItems);
router.get("/countrywithuser", getCountryWithUser);
router.get("/countrywithusergrouped", getCountryWithUserGrouped);
router.post("/item", createItem);
router.post("/user", createUser);

export default router;
