import { Router } from "express";

const router = Router();

import {
    updateOs
    //updateDevice
} from "../controllers/os.controller.js";

// Routes
router.put("/os/:id", updateOs);
//router.put("/device/:id", updateDevice);

export default router;