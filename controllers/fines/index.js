module.exports.getAllFines = (req, res) => {
  res.status(200).send({
    message: 'Your fines',
  });
};
