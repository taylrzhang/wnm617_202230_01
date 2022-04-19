CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Goodwin Fisher','user1','user1@gmail.com',md5('pass'),'https://via.placeholder.com/400/978/fff/?text=user1','2022-01-13 01:27:36'),
(2,'Marta Benton','user2','user2@gmail.com',md5('pass'),'https://via.placeholder.com/400/957/fff/?text=user2','2022-03-31 01:44:21'),
(3,'Aisha Sellers','user3','user3@gmail.com',md5('pass'),'https://via.placeholder.com/400/742/fff/?text=user3','2022-01-01 04:06:47'),
(4,'Reyes Banks','user4','user4@gmail.com',md5('pass'),'https://via.placeholder.com/400/899/fff/?text=user4','2022-02-01 11:57:13'),
(5,'Garner Albert','user5','user5@gmail.com',md5('pass'),'https://via.placeholder.com/400/973/fff/?text=user5','2022-01-12 07:14:23'),
(6,'Johanna Black','user6','user6@gmail.com',md5('pass'),'https://via.placeholder.com/400/701/fff/?text=user6','2022-01-20 10:58:02'),
(7,'Bertie Gentry','user7','user7@gmail.com',md5('pass'),'https://via.placeholder.com/400/885/fff/?text=user7','2022-04-06 06:09:17'),
(8,'Stout Mooney','user8','user8@gmail.com',md5('pass'),'https://via.placeholder.com/400/849/fff/?text=user8','2022-02-20 07:00:34'),
(9,'Kayla Browning','user9','user9@gmail.com',md5('pass'),'https://via.placeholder.com/400/842/fff/?text=user9','2022-01-27 09:15:35'),
(10,'Nadia Brewer','user10','user10@gmail.com',md5('pass'),'https://via.placeholder.com/400/758/fff/?text=user10','2022-01-09 03:21:04');