import { Request } from "../models/Request.js";

// get all requests
export async function getRequests(req, res) {
  try {
    const requests = await Request.findAll({
      atributes: ["id", "chw", "cha", "malariaDrugs", "familyPlanning", "zincTablets"],
      order: [["id", "DESC"]],
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// create a request
export async function createRequest(req, res) {
  const { chw, cha, malariaDrugs, familyPlanning, zincTablets, requestDate } = req.body;

  if (!chw) {
    return res.status(400).send({
      message: 'Please select a CHW to create a request!',
    })
  }

  if (!cha) {
    return res.status(400).send({
      message: 'Please select a CHA to create a request!',
    })
  }

  if (malariaDrugs >= 100) {
    return res.status(400).send({
      message: 'Please provide a number of malaria drugs less than 100 per request!',
    })
  }

  if (familyPlanning >= 100) {
    return res.status(400).send({
      message: 'Please provide a number of family planning items less than 100 per request!',
    })
  }

  if (zincTablets >= 100) {
    return res.status(400).send({
      message: 'Please provide a number of zinc tablets less than 100 per request!',
    })
  }

  try {
    let newRequest = await Request.create(
      {
        chw,
        cha,
        malariaDrugs,
        familyPlanning,
        zincTablets,
        requestDate: new Date(requestDate).getTime()
      },
      {
        fields: ["chw", "cha", "malariaDrugs", "familyPlanning", "zincTablets", "requestDate"],
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