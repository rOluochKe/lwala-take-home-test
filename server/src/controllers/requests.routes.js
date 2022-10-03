import { Request } from "../models/Request.js";

export async function getRequests(req, res) {
  try {
    const requests = await Request.findAll({
      atributes: ["id", "chw", "cha", "malariaDrugs", "familyPlanning", "zincTablets"],
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createRequest(req, res) {
  const { chw, cha, malariaDrugs, familyPlanning, zincTablets } = req.body;

  try {
    let newRequest = await Request.create(
      {
        chw,
        cha,
        malariaDrugs,
        familyPlanning,
        zincTablets,
      },
      {
        fields: ["chw", "cha", "malariaDrugs", "familyPlanning", "zincTablets"],
      }
    );
    return res.json(newRequest);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}