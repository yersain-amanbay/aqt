exports.start = function (req, res) {
    const {name} = req.query;
    res.render('./pages/invite', {title: 'Invite Me:)', name})
};