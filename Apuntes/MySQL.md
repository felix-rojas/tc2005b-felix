# XAMPP

**XAMPP IS ALWAYS ROOT BECAUSE IT IS ONLY MEANT FOR DEVELOPMENT**

Other services gice you cloud services using a fake user that doesn't actually have root

**DO not remove the default databases, the program needs these**

## Apache

Apache is a web server, most servers use Apache

When we make the http module require and listen it automatically generates the server

Apache has to be enabled within XAMPP

Apache has Unix architecture and the configuration comes in the const folder within /etc

### Disadvantages

Whn you work locally it's p nice but whne you push it to the server config. You have to continously make config fles and identify the differences between local and remote.

Package.json with npm within node allows us to config itself so we dont have to do it EVERY time.

## node

Node has the configuration within the same file

## phpmyadmin

This is the web application to manage the SQL queries and database. 
>made entirely in php (oh dear god)

### Table creation
|Name|Type|Length|Default|Collation|Attributes|Comments|Virtuality|Move column|Media type| Browser display transformation|Browser display transformation options|
|--|--|--|--|--|--|--|--|--|--|--|--|
Name of the variable to store data|


## MySQL

Uses the port 3306 by default
MySQL is such a good competitor that Oracle bought MySQL

This was then forked into MariaDB

# Working with a local database

## Storage motors

We will be using InnoDB because it has referential integrity

## Steps

1. Create database OR import data
   1. You can import either the data, the structure or both
2. Open said DB
3. Create the tables.

## Recommendations

* Make versions of your database scripts 
* Do *not* save images. Databases grow exponentially. 
* Save the images in another server or in an image.
* Save the url as VARCHAR so you can just extract it. 
* Create a root user that modifies structure
* Create a root user that connects with our system that manipulates data
* 

### Ways to save FK's

1. Using code
Foreign keys can be defined with code (usually better)

2. Using designer view
Designer view  

3. Using relation view
Relation view



## Developing frameworks

Django stores the changes in the scripts to create the dataase and allows us to keep the historical versions 

