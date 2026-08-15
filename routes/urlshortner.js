import express from "express";
import { nanoid } from "nanoid";
import Url from "../Model/Url.js";
import { isValidURL } from "../isValidURL.js";

const url_shortner = express.Router();

url_shortner.post("/", isValidURL, async (req, res) => {
  try {
    console.log("req recieved")
    const existingUrl = await Url.findOne({
      where: { originalUrl: req.body.org_URL },
    });
    if (existingUrl) {
      return res.json({ short_URL: existingUrl.shortend_url });
    }
    const { org_URL } = req.body;

    let short_URL = nanoid(6);
    const existing_shortURL = await Url.findOne({
      where: { shortend_url: short_URL },
    });
    if (existing_shortURL) {
      short_URL = nanoid(7);
    }
    const newUrl = await Url.create({
      originalUrl: org_URL,
      shortend_url: short_URL,
    });
    res.json({ short_URL: newUrl.shortend_url });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

url_shortner.get("/:short_URL", async (req, res) => {
  const { short_URL } = req.params;
  const url = await Url.findOne({ where: { shortend_url: short_URL } });
  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

export default url_shortner;
