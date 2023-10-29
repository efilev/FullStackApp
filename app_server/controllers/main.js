const index = (req, res) => {
    res.render('index', {title: 'Traveler Getaways'});
};

module.exports = {
    index
}