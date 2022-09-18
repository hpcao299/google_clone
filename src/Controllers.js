const axiosClient = require('./axiosClient');
const { numberWithCommas } = require('./utils');

class Controllers {
    static async searchResults(req, res) {
        const q = req.query.q;

        try {
            if (q) {
                const { data } = await axiosClient.get(`/search/q=${q.split(' ').join('+')}`);

                res.render('search', {
                    query: q,
                    results: data.results,
                    totalResults: numberWithCommas(data.total),
                });
            } else {
                res.render('home');
            }
        } catch (error) {
            res.status(400).json({ code: 400, message: error.message });
        }
    }
}

module.exports = Controllers;
