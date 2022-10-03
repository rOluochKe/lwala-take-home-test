const db = require('../models')
const UserRequest = db.rest.models.userRequest

// exports.getUserRequests = async (req, res) => {
//   let userRequests = []

//   if (req.query && req.query.limit && req.query.offset) {
//     // paginate
//     const { limit, offset } = req.query
//     const page = parseInt(offset)
//     const perPage = parseInt(limit)
//     const offsetIndex = (page - 1) * limit

//     todos = await Todo.findAll({
//       limit: perPage,
//       offset: offsetIndex,
//     })
//   } else if (req.query && req.query.limit) {
//     const { limit } = req.query
//     // chunk
//     todos = await Todo.findAll({
//       limit: parseInt(limit),
//     })
//   } else {
//     // all returned
//     todos = await Todo.findAll()
//   }

//   if (!todos) {
//     return res.status(400).send({
//       message: 'No todos were found, create some',
//     })
//   }

//   res.send({ todos })
// }

exports.createUserRequest = async (req, res) => {
  const { chw, cha, malaria, familyPlanning, zincTablet } = req.body

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

  if (!malaria) {
    return res.status(400).send({
      message: 'Please provide number of malaria drugs to create a request!',
    })
  }

  if (!familyPlanning) {
    return res.status(400).send({
      message: 'Please provide number of family planning items to create a request!',
    })
  }

  if (!zincTablet) {
    return res.status(400).send({
      message: 'Please provide number of zinc tablets to create a request!',
    })
  }

  try {
    let newUserRequest = await UserRequest.create({
      chw,
      cha,
      malaria,
      familyPlanning,
      zincTablet,
    })
    return res.send(newUserRequest)
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
}