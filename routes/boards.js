var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

//Get action
router.get('/:board_id', function(req, res, next) {
  var boardId = req.params.board_id;
  var getBoardQuery = 'SELECT * FROM boards WHERE board_id = ' + boardId;
  var getMessagesQuery = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM messages WHERE board_id = ' + boardId;

  connection.query(getBoardQuery, function(err, board) {

    connection.query(getMessagesQuery, function(err, messages) {
      res.render('board', {
        title: board[0].title,
        board: board[0],
        messageList: messages
      });
    });

  });
});

//Post action
router.post('/:board_id',function (req,res,next) {
  var boardId = req.params.board_id;
  var sendMessage = req.body.message;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

  connection.query('INSERT INTO messages SET ?',{board_id:boardId,message:sendMessage,created_at:createdAt},function (err,rows) {
    res.redirect('/boards/'+boardId);
  })
});

module.exports = router;
