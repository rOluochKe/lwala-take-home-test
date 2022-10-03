const db = require('../models')
const Commodity = db.rest.models.commodity

exports.createCommodity = async (req, res) => {
  const { malaria, familyPlanning, zincTablet } = req.body

  if (!malaria) {
    return res.status(400).send({
      message: 'Please provide number of malaria drugs to create a commodity!',
    })
  }

  if (!familyPlanning) {
    return res.status(400).send({
      message: 'Please provide number of family planning items to create a commodity!',
    })
  }

  if (!zincTablet) {
    return res.status(400).send({
      message: 'Please provide number of zinc tablets to create a commodity!',
    })
  }

  try {
    let newCommodity = await Commodity.create({
      malaria,
      familyPlanning,
      zincTablet
    })
    return res.send(newCommodity)
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
}