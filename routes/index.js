var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

// GET action
router.get('/', function(req, res, next) {
  var query = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM boards';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'node start',
      boardList: rows
    });
  });
});

//Post action
router.post('/', function(req, res, next) {
  var sendTitle = req.body.title;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

  connection.query('INSERT INTO boards SET ?', {title: sendTitle,created_at:createdAt},function(err, rows) {
    res.redirect('/');
  });

});

module.exports = router;
