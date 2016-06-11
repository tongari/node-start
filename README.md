# node-start

##シンプルな掲示板をDBに保存する

### 準備:DBを用意するためにMySQLでDBを構築する

HomebrewでMySQLをインストール
```bash
brew install mysql
```
MySQLを起動
```bash
mysql.server start
```
MySQLにログイン
```bash
mysql -u root
```
パスワードは未入力でOK
<br>
<br>
<br>
「bulletin_board」というDBを作成
```bash
create database bulletin_board character set utf8;
```
DBが作成されているか確認
```bash
show databases;
```
「bulletin_board」DBに切り替え
```bash
use bulletin_board;
```

「boards」というテーブルを作成
```bash
CREATE TABLE `boards` (
  `board_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```
「messages」というテーブルを作成
```bash
CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

作成したテーブルを確認
```bash
show tables;
```
「boards」デーブルの中身を確認
```bash
show columns from boards;
```
「messages」デーブルの中身を確認
```bash
show columns from messages;
```

アプリを立ち上げて確認
```bash
npm run dev
```

ブラウザでアクセス
```
localhost:3000
```
<br>
<br>

------
必要なければDBを削除
```bash
drop database bulletin_board;
```

MySQLからログアウト
```bash
exit;
```

MySQLを停止
```bash
mysql.server stop
```





