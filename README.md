## EUROMO-THESIS

This is app I made with React for the constructive part of my thesis. App is still in progress.  
<br/>
At starting point there was a wish of a website that anyone can use and get some nice visualizations of data in Neo4j graph database. Data is collected as a part of a research in Europe, https://media-ownership.eu/. 
All data is public information of media ownerships in Europe. 

## About
- Neovis.js is used to visualize data from database (https://github.com/neo4j-contrib/neovis.js)
- Used node version 16.13.2 
- Used npm version 8.15.1
- e2e tests with Cypress

#### What have I learned?
- Project working 
- To cut project in the small pieces
- Persistence to learn new things
- Ways to learn completely new tool

#### Future development areas in project
- Learning more about how make components re-usable
- Developing even better accessibility
- Notifications to user: success and error notifications
- Layout of the app is in progress and waiting instructions 
- More testing, unit tests and cypress

![neovisexample](https://user-images.githubusercontent.com/78361679/205669030-4b256d98-bd93-46a1-a416-02d7db4014ce.png)

## To get the project work
To get project work, Neo4j database is needed. These instructions can be applied with correct database. 

1. First copy this repo. 
2. Then "npm install" at the root of the project. 
3. Create .env file on the root and fill in info of your database. Instructions below.
4. 'Then "npm start". 
5. You can search by last names of humans or names of different outlet or companys behind outlets. If you don't know exact name, you can use substring search under "Basic search". That way you can find out full names. 


## Connection works with AuraDb or Neo4j Desktop

### AuraDB:
Create .env file, where you put following info
of your database:

REACT_APP_NEO4J_URI = writehere  
REACT_APP_NEO4J_USER = writehere  
REACT_APP_NEO4J_PASSWORD = writehere  

### Neo4j Desktop / localhost
When using desktop version, put info below 
to your .env file. Uri is using bolt protocol. 
Also when using localhost, hide also two rows in file VisualGraph.js (marked there).

REACT_APP_NEO4J_URI = writehere  
REACT_APP_NEO4J_USER = writehere  
REACT_APP_NEO4J_PASSWORD = writehere  
