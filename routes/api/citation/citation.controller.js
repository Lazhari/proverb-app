'use strict';

const Citation = require('../../../models/citation');

// Get all Citations
exports.getCitations = (req, res) => {
    Citation.find({}).exec((err, citations) => {
        if(err) {
            return res.send(500, {message: err.message});
        }

        return res.send(200, citations);
    });
};

// Get One proverb
exports.getCitationById = (req, res) => {
    let id = req.params.id;
    Citation.findOne({_id: id}).exec((err, citation) => {
        if(err) return res.send(500, {message: err.message});
        if(!citation) return res.send(404, {message: 'Citation not found'});
        return res.send(200, citation);
    });
};

// Create new Proverb
exports.newCitation = (req, res) => {
    let author = req.body.author || '';
    let quote = req.body.quote;

    if(!quote) {
        return res.send(402, {message: 'The citation quote is required '});
    } else {
        let citation = new Citation(req.body);

        citation.save((err, citation) => {
            if(err) return res.send(500, {message: err.message});

            return res.send(200, citation);
        });
    }
};

// Put Proverb
exports.updateCitation = (req, res) => {
    let id = req.params.id;

    Citation.findOne({_id: id}).exec((err, citation) => {
        if(err) return res.send(500, {message: err.message});
        if(!citation) return res.send(404, {message: 'Citation not found'});
        citation.author = req.body.author || citation.author;
        citation.quote = req.body.quote || citation.quote;

        citation.save((err, citation) => {
            if(err) return res.send(500, {message: err.message});

            return res.send(200, citation);
        });
    });
};

// Delete Proverb
exports.deleteCitation = (req, res) => {
    let id = req.params.id;

    Citation.remove({_id: id}).exec((err, citation) => {
        if(err)
            return res.send(500, {message: err.message});
        if(!citation)
            return res.send(404, {message: 'Citation not found'});
        return res.send(200, citation);
    });
};

exports.getCitationAuthors = (req, res) => {
    Citation.distinct('author', (err, authors) => {
        if(err) {
            return res.send(500, {message: err.message});
        }
        return res.send(200, authors);
    });
};
