## Starting and stopping MySQL service

### Linux

```shell
sudo service mysql start
sudo service mysql stop
```

### Mac

```shell
brew services mysql start
brew services mysql stop
```

or

```shell
mysql.server start
mysql.server stop
```


## Setting up MySQL

Login as root

```shell
mysql -u root -p
```

Create Database, Create user, grant rights -

```sql
CREATE DATABASE dbone;
CREATE USER userone IDENTIFIED BY 'passone';
USE dbone;
GRANT ALL PRIVILEGES ON * TO userone@'%';
EXIT
```

Login as the new user

```shell
mysql -u userone -p
```

Verify you have access

```sql
SHOW DATABASES;
USE dbone;
```