import { Commodity } from "../models/Commodity.js";

// create commodity
export async function createCommodity(req, res) {
  try {
    const { malariaDrugs, familyPlanning, zincTablets } = req.body;

    const newCommodity = await Commodity.create({
      malariaDrugs,
      familyPlanning,
      zincTablets,
    });

    res.json(newCommodity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// get all commodities
export async function getCommodities(req, res) {
  try {
    const commodities = await Commodity.findAll({
      attributes: ["id", "malariaDrugs", "familyPlanning", "zincTablets"],
      order: [["id", "DESC"]],
    });
    res.json(commodities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

