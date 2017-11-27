important steps for mongodb

C:\>md data
C:\md data\db

If you have to install the MongoDB at a different location, then you need to specify an 
alternate path for \data\db by setting the path dbpath in mongod.exe. For the same, issue the following commands.

D:\set up\mongodb\bin>mongod.exe --dbpath "d:\set up\mongodb\data" 
D:\set up\mongodb\bin>mongo.exe

http://technoon.github.io/lessons/mongodb-nodejs

http://www.transistor.io/getting-started-with-node-express-and-mongodb.html