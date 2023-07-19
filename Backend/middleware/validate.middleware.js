const validateDetails = (req, res, next) => {
    const { email, password, userName} = req.body
    if (!email || !password || !userName) {
      return res.status(400).send({ msg: 'incomplete details' })
    }
    next()
  }

  const validateAdminDetails = (req, res, next) => {
    const { email, password, adminName, isAdmin, image} = req.body
    if (!email || !password || !adminName || !isAdmin || !image) {
      return res.status(400).send({ msg: 'incomplete details' })
    }
    next()
  }
  module.exports = { validateDetails, validateAdminDetails }