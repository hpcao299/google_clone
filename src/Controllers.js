const axiosClient = require('./axiosClient');
const { numberWithCommas } = require('./utils');

exports.searchResults = async (req, res) => {
    const q = req.query.q;

    try {
        const { data } = await axiosClient.get(`/search/q=${q.split(' ').join('+')}&num=20`);

        res.render('search', {
            query: q,
            results: data.results,
            totalResults: numberWithCommas(data.total),
        });
    } catch (error) {
        res.status(400).json({ code: 400, message: error.message });
    }
};

exports.searchImages = async (req, res) => {
    const q = req.query.q;

    try {
        const { data } = await axiosClient.get(`/image/q=${q.split(' ').join('+')}&num=20`);

        res.render('image', { query: q, results: data.image_results });
    } catch (error) {
        res.status(400).json({ code: 400, message: error.message });
    }
};

exports.searchNews = async (req, res) => {
    const q = req.query.q;

    try {
        const { data } = await axiosClient.get(`/news/q=${q.split(' ').join('+')}&num=20`);

        res.render('new', { query: q, totalResults: data.entries.length, results: data.entries });
    } catch (error) {
        res.status(400).json({ code: 400, message: error.message });
    }
};

exports.searchVideos = async (req, res) => {
    const q = req.query.q;

    try {
        const { data } = await axiosClient.get(`/video/q=${q.split(' ').join('+')}&num=20`);

        res.render('video', { query: q, results: data.results, totalResults: data.total });
    } catch (error) {
        res.status(400).json({ code: 400, message: error.message });
    }
};
