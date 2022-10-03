import { Commodity } from "../models/Commodity.js";

export async function createCommodity(req, res) {
  try {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({
      projectId,
      name,
      done,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

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

