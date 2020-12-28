import express from "express";
import mongoose from "mongoose";
import { calculateLimitAndOffset, paginate } from "paginate-info";

import DictionaryFr from "../models/dictionary_fr.js";
import DictionaryEn from "../models/dictionary_en.js";

const router = express.Router();

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

export const getDictionary = async (req, res) => {
  try {
    var { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const dictionaryData = await DictionaryFr.paginate({}, { offset, limit });

    res.status(200).json(dictionaryData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDictionaryByText = async (req, res) => {
  const { text } = req.params;
  var { page, size, lang } = req.query;

  page = page ? +page : 1;
  size = size ? +size : 10;
  const { limit, offset } = calculateLimitAndOffset(page, size);

  if (lang === "fr") {
    const dictionaryData = await DictionaryFr.find({
      "headword.text": text,
    });

    if (!dictionaryData.length) {
      res.status(404).send({
        message: `${text} does not exist in the dictionary!`,
      });
    } else {
      const sensesResult = [];

      dictionaryData.forEach((element) => {
        element.senses.forEach((data) => {
          sensesResult.push(data.definition);
        });
      });
      const paginatedData = sensesResult.slice(offset, offset + limit).sort();
      res.status(200).json(paginatedData);
    }
  } else if (lang === "en") {
    const dictionaryData = await DictionaryEn.find({
      "headword.text": text,
    });

    if (!dictionaryData.length) {
      res.status(404).send({
        message: `${text} does not exist in the dictionary!`,
      });
    } else {
      const sensesResult = [];

      dictionaryData.forEach((element) => {
        element.senses.forEach((data) => {
          sensesResult.push(data.definition);
        });
      });
      const paginatedData = sensesResult.slice(offset, offset + limit).sort();
      res.status(200).json(paginatedData);
    }
  } else {
    res
      .status(404)
      .json({ message: `Sorry we don't have ${lang} dictionary!` });
  }
};

export const createDictionary = async (req, res) => {
  const { id, language, headword, senses } = req.body;

  if (language === "fr") {
    const newDictionary = new DictionaryFr({
      id,
      language,
      headword,
      senses,
    });

    try {
      await newDictionary.save();

      res.status(201).json(newDictionary);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    const newDictionary = new DictionaryEn({
      id,
      language,
      headword,
      senses,
    });

    try {
      await newDictionary.save();

      res.status(201).json(newDictionary);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

export default router;
