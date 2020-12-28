import express from "express";

import {
  getDictionary,
  getDictionaryByText,
  createDictionary,
} from "../controllers/dictionary.js";
const router = express.Router();

// http://localhost:5000/dictionary

router.get("/", getDictionary);
router.get("/:text", getDictionaryByText);
router.post("/", createDictionary);

export default router;
