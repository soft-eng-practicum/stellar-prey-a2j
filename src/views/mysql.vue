/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clan`
--

DROP TABLE IF EXISTS `clan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(32) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clan`
--

LOCK TABLES `clan` WRITE;
/*!40000 ALTER TABLE `clan` DISABLE KEYS */;
INSERT INTO `clan` VALUES (1,'Test!','cba',NULL),(2,'Test','guts',NULL);
/*!40000 ALTER TABLE `clan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clan_community`
--

DROP TABLE IF EXISTS `clan_community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clan_community` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clan_id` int(11) NOT NULL,
  `community_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clan_community_FI_1` (`clan_id`),
  KEY `clan_community_FI_2` (`community_id`),
  KEY `clan_community_FI_3` (`status_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clan_community`
--

LOCK TABLES `clan_community` WRITE;
/*!40000 ALTER TABLE `clan_community` DISABLE KEYS */;
INSERT INTO `clan_community` VALUES (1,1,1,3,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(2,2,1,3,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(3,2,2,2,'2010-10-20 13:51:23','2010-10-20 13:51:23');
/*!40000 ALTER TABLE `clan_community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clan_user`
--

DROP TABLE IF EXISTS `clan_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clan_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clan_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clan_user_FI_1` (`clan_id`),
  KEY `clan_user_FI_2` (`user_id`),
  KEY `clan_user_FI_3` (`status_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clan_user`
--

LOCK TABLES `clan_user` WRITE;
/*!40000 ALTER TABLE `clan_user` DISABLE KEYS */;
INSERT INTO `clan_user` VALUES (1,1,1,6,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(2,2,1,3,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(3,2,2,5,'2010-10-20 13:51:23','2010-10-20 13:51:23');
/*!40000 ALTER TABLE `clan_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community`
--

DROP TABLE IF EXISTS `community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `community` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(32) DEFAULT NULL,
  `description` text,
  `community_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `community_FI_1` (`community_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community`
--

LOCK TABLES `community` WRITE;
/*!40000 ALTER TABLE `community` DISABLE KEYS */;
INSERT INTO `community` VALUES (1,'Argentina','arg',NULL,2),(2,'Brasil','br',NULL,1);
/*!40000 ALTER TABLE `community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_server`
--

DROP TABLE IF EXISTS `community_server`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `community_server` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `community_id` int(11) NOT NULL,
  `server_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `community_server_FI_1` (`community_id`),
  KEY `community_server_FI_2` (`server_id`),
  KEY `community_server_FI_3` (`status_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_server`
--

LOCK TABLES `community_server` WRITE;
/*!40000 ALTER TABLE `community_server` DISABLE KEYS */;
INSERT INTO `community_server` VALUES (1,1,1,3,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(2,1,2,2,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(3,2,1,2,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(4,2,2,1,'2010-10-20 13:51:23','2010-10-20 13:51:23');
/*!40000 ALTER TABLE `community_server` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_type`
--

DROP TABLE IF EXISTS `community_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `community_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_type`
--

LOCK TABLES `community_type` WRITE;
/*!40000 ALTER TABLE `community_type` DISABLE KEYS */;
INSERT INTO `community_type` VALUES (1,'Public','P'),(2,'Public With Mentoring','M'),(3,'Private','V');
/*!40000 ALTER TABLE `community_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_user`
--

DROP TABLE IF EXISTS `community_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `community_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `community_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `mentor_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `community_user_FI_1` (`community_id`),
  KEY `community_user_FI_2` (`user_id`),
  KEY `community_user_FI_3` (`status_id`),
  KEY `community_user_FI_4` (`mentor_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_user`
--

LOCK TABLES `community_user` WRITE;
/*!40000 ALTER TABLE `community_user` DISABLE KEYS */;
INSERT INTO `community_user` VALUES (1,1,1,6,NULL,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(2,1,2,3,NULL,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(3,2,1,2,NULL,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(4,2,2,6,NULL,'2010-10-20 13:51:23','2010-10-20 13:51:23');
/*!40000 ALTER TABLE `community_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `explosions_stats`
--

DROP TABLE IF EXISTS `explosions_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `explosions_stats` (
  `granade_kills` int(11) DEFAULT NULL,
  `game_player_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `explosions_stats_FI_1` (`game_player_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `explosions_stats`
--

LOCK TABLES `explosions_stats` WRITE;
/*!40000 ALTER TABLE `explosions_stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `explosions_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` varchar(255) DEFAULT NULL,
  `mapname` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `sts` int(11) DEFAULT NULL,
  `server_id` int(11) NOT NULL,
  `game_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `game_unique` (`gameid`),
  KEY `game_FI_1` (`server_id`),
  KEY `game_FI_2` (`game_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_player`
--

DROP TABLE IF EXISTS `game_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_player` (
  `score` int(11) DEFAULT NULL,
  `avg_ping` int(11) DEFAULT NULL,
  `server_time` int(11) DEFAULT NULL,
  `game_time` int(11) DEFAULT NULL,
  `login` int(11) DEFAULT NULL,
  `team` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `guid` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `game_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guid_userid_gameid_unique` (`game_id`,`guid`),
  KEY `game_player_FI_1` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_player`
--

LOCK TABLES `game_player` WRITE;
/*!40000 ALTER TABLE `game_player` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_stat`
--

DROP TABLE IF EXISTS `game_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime DEFAULT NULL,
  `players` int(11) DEFAULT NULL,
  `cpu_perc` int(11) DEFAULT NULL,
  `mem_kb` int(11) DEFAULT NULL,
  `game_id` int(11) NOT NULL,
  `server_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `gameid_time_unique` (`game_id`,`time`),
  KEY `game_stat_FI_2` (`server_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_stat`
--

LOCK TABLES `game_stat` WRITE;
/*!40000 ALTER TABLE `game_stat` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_type`
--

DROP TABLE IF EXISTS `game_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rel` int(11) DEFAULT NULL,
  `mnemonic` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_type`
--

LOCK TABLES `game_type` WRITE;
/*!40000 ALTER TABLE `game_type` DISABLE KEYS */;
INSERT INTO `game_type` VALUES (1,0,'FFA','Free For All'),(2,3,'TDM','Team Death Match'),(3,4,'TS','Team Survivor'),(4,5,'FTL','Follow the Leader'),(5,6,'CNH','Capture and Hold'),(6,7,'CTF','Capture The Flag'),(7,8,'BOMB','Bombmode');
/*!40000 ALTER TABLE `game_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `melee_stats`
--

DROP TABLE IF EXISTS `melee_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `melee_stats` (
  `alevel0_kills` int(11) DEFAULT NULL,
  `alevel1_kills` int(11) DEFAULT NULL,
  `alevel1_upg_kills` int(11) DEFAULT NULL,
  `alevel2_kills` int(11) DEFAULT NULL,
  `alevel2_upg_kills` int(11) DEFAULT NULL,
  `alevel3_kills` int(11) DEFAULT NULL,
  `alevel3_upg_kills` int(11) DEFAULT NULL,
  `alevel4_kills` int(11) DEFAULT NULL,
  `game_player_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `melee_stats_FI_1` (`game_player_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `melee_stats`
--

LOCK TABLES `melee_stats` WRITE;
/*!40000 ALTER TABLE `melee_stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `melee_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_status`
--

DROP TABLE IF EXISTS `membership_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membership_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(32) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_status`
--

LOCK TABLES `membership_status` WRITE;
/*!40000 ALTER TABLE `membership_status` DISABLE KEYS */;
INSERT INTO `membership_status` VALUES (1,'Banned','B',NULL),(2,'Wannabe','W',NULL),(3,'Member','M',NULL),(4,'Admin','A',NULL),(5,'Captain','C',NULL),(6,'Owner','O',NULL);
/*!40000 ALTER TABLE `membership_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `misc_stat`
--

DROP TABLE IF EXISTS `misc_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `misc_stat` (
  `environmental_deaths` int(11) DEFAULT NULL,
  `suicides` int(11) DEFAULT NULL,
  `game_player_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `misc_stat_FI_1` (`game_player_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `misc_stat`
--

LOCK TABLES `misc_stat` WRITE;
/*!40000 ALTER TABLE `misc_stat` DISABLE KEYS */;
/*!40000 ALTER TABLE `misc_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server`
--

DROP TABLE IF EXISTS `server`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `description` text,
  `ip` varchar(15) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `dirty` int(11) DEFAULT NULL,
  `last_download_at` datetime DEFAULT NULL,
  `server_key` varchar(255) DEFAULT NULL,
  `server_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `server_FI_1` (`server_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server`
--

LOCK TABLES `server` WRITE;
/*!40000 ALTER TABLE `server` DISABLE KEYS */;
INSERT INTO `server` VALUES (1,'CBA! by CodWar','CBA!',NULL,'200.61.174.170',27960,NULL,NULL,NULL,3),(2,'Argentina A','serverA',NULL,'200.41.42.201',27960,NULL,NULL,NULL,2);
/*!40000 ALTER TABLE `server` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_type`
--

DROP TABLE IF EXISTS `server_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_type`
--

LOCK TABLES `server_type` WRITE;
/*!40000 ALTER TABLE `server_type` DISABLE KEYS */;
INSERT INTO `server_type` VALUES (1,'Private','P','Only users in server'),(2,'Community','C','Only users in the community'),(3,'Community public','CP','Everybody may enter, community have more provileges'),(4,'Public','P','Everybody may enter, no restrictions to anybody');
/*!40000 ALTER TABLE `server_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_user`
--

DROP TABLE IF EXISTS `server_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `server_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `server_user_FI_1` (`server_id`),
  KEY `server_user_FI_2` (`user_id`),
  KEY `server_user_FI_3` (`status_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_user`
--

LOCK TABLES `server_user` WRITE;
/*!40000 ALTER TABLE `server_user` DISABLE KEYS */;
INSERT INTO `server_user` VALUES (1,1,1,6,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(2,1,2,4,'2010-10-20 13:51:23','2010-10-20 13:51:23'),(3,2,2,1,'2010-10-20 13:51:23','2010-10-20 13:51:23');
/*!40000 ALTER TABLE `server_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `about_me` text,
  `validator` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jenizaro','24FD5832FDF224F4FF589CF0E66E0A6096FDF55743700767','aguirrel@xuar.com.ar',NULL,NULL,1),(2,'jenizaro2','24FD5832FDF224F4FF589CF0E66E0A6096FDF55743700767','aguirrel2@xuar.com.ar',NULL,NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapon`
--

DROP TABLE IF EXISTS `weapon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weapon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `mnemonic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapon`
--

LOCK TABLES `weapon` WRITE;
/*!40000 ALTER TABLE `weapon` DISABLE KEYS */;
INSERT INTO `weapon` VALUES (1,'BLASTER','BL'),(2,'MACHINEGUN','MC'),(3,'PAINSAW','PS'),(4,'SHOTGUN','SH'),(5,'LASGUN','LG'),(6,'MASSDRIVER','MD'),(7,'CHAINGUN','CG'),(8,'PULSERIFLE','PR'),(9,'FLAMER','FL'),(10,'LUCIFERCANNON','LC'),(11,'GRENADE','GR'),(12,'LOCKBLOB_LAUNCHER','LL');
/*!40000 ALTER TABLE `weapon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapon_stat`
--

DROP TABLE IF EXISTS `weapon_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weapon_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fired` int(11) DEFAULT NULL,
  `fired_hit` int(11) DEFAULT NULL,
  `fired_hit_team` int(11) DEFAULT NULL,
  `fired_missed` int(11) DEFAULT NULL,
  `kills` int(11) DEFAULT NULL,
  `deads` int(11) DEFAULT NULL,
  `damage_done` int(11) DEFAULT NULL,
  `damage_to_team` int(11) DEFAULT NULL,
  `hit_head` int(11) DEFAULT NULL,
  `hit_torso` int(11) DEFAULT NULL,
  `hit_legs` int(11) DEFAULT NULL,
  `hit_arms` int(11) DEFAULT NULL,
  `damage_taken` int(11) DEFAULT NULL,
  `damage_taken_from_team` int(11) DEFAULT NULL,
  `damage_taken_head` int(11) DEFAULT NULL,
  `damage_taken_torso` int(11) DEFAULT NULL,
  `damage_taken_legs` int(11) DEFAULT NULL,
  `damage_taken_arms` int(11) DEFAULT NULL,
  `weapon_id` int(11) NOT NULL,
  `game_player_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `weapon_stat_FI_1` (`weapon_id`),
  KEY `weapon_stat_FI_2` (`game_player_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapon_stat`
--

LOCK TABLES `weapon_stat` WRITE;
/*!40000 ALTER TABLE `weapon_stat` DISABLE KEYS */;
/*!40000 ALTER TABLE `weapon_stat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2010-10-20 13:53:23
