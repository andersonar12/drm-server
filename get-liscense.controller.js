const getLiscense = (req, res) => {

  res.status(200).json({
    storeLicense: true,
    profile: {
      purchase: {}
    },
    outputProtection: {
      digital: true,
      analogue: true,
      enforce: false,
    },
  })
}

module.exports = getLiscense;