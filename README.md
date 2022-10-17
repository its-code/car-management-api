# car-management-api
Developed an application which uses the Express.JS framework to expose a RESTful API to manage cars.

# Tech Stack 
Express.js, Node.js, MongoDB, Mongoose, AJV, http-status, env, Eslint, Docker, Postman

- Express.js for Server.
- Node.js for API development.
- MongoDB for Database (NoSQL).
- Mongoose ODM for data queries and connection.
- AJV(Npm Package) for schema validation (JSON validation).
- http-status(Npm Package) for status code on failure and success of API.
- env(Npm Package) for environment variables and also it can be used to secure the API keys.
- Eslint for using standard appraoch for all coding style and Variables. 
- Docker is used for getting all the dependices at one place and dockerizing the whole application.
- Postman is used to hit the API's and also used for the documentation.
- Robo 3T is the GUI for Mongo Database, you can create the connection with that.

# How to Run the Application

=> Steps to Follow:-
( Make Sure you have the docker installed in your machine. Download Link: https://www.docker.com/products/docker-desktop )

1. First you need to clone or download the Zip file in your local machine.
2. After downloading the Zip file open it on any IDE which supports JavaScript.
   i. For Instance im using Visual Studio Code. Download Link: https://code.visualstudio.com/download 
3. After opening the project on VS Code, make sure you have enable the EsLint and (Select End of Line Sequence should be LF not CRLF). Also Delete the **Data** Folder, you don't    need it right now.
4. As i mentioned above that this Application is Dockerized, it means you don't need to set up the Project Environment or to install all dependices.
   Docker will do that for YOU :), 
5. You need to run this command in your terminal ( `docker pull asadraza270/cognigy_car_api:latest` ) to pull/install the image in your docker or working directory                    from my public docker hub repository.
6. Then check wether you have installed the image or not by ( `docker images` )
7. As i have already push my API image on docker hub now you don't need to make the build again.
8. For MongoDB i used **mongo official image of Docker Hub**.
9. Run this command in your terminal ( `docker-compose up` )
   (Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services.               Then, with a single command, you create and start all the services/containers from your configuration.)
    **For me one service is our Node api and the other service is MongoDB.**
10. Now just sit relax and docker will do everything for YOU.
11. When its create the connection and shows ( Running on Port 3000 and Connected MongoDB )
12. It means you all set.
13. You can check wether your docker container is up running or not by opening other terminal and use this command `docker ps` and `docker ps -a` for available                       running  containers.
14. Now open Robo 3T and creates the connection by setting these port **27017** and Address = **localhost**
15. When connected successfully, now you can hit the API's on Postman using ( http://localhost:3000/cars )
    I will also provide you the postman collection file which you can import in your Postman directly.
    Heres the link (https://drive.google.com/file/d/1s3s2cCf2rgts_5tbUPNT8vDJzAZedZlX/view?usp=sharing)
16. If you face any problem related to setting up the project please write the query.   

Thanks for your time.
   
# That's it.
    
