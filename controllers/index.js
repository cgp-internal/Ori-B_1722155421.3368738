module.exports = {
  getIndex: async (req, res) => {
    try {
      res.render('index', { title: 'Home' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
}