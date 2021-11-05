const getLicense = (req, res) => {

  console.log(req.body);

  res.status(200).json({
    assetId: "prueba-widevine",
    profile: {
      purchase: {}
    },
  })
}

module.exports = getLicense;