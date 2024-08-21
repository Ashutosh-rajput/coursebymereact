# Course Management System - Frontend

This repository contains the frontend of the Course Management System, built using React. The frontend interacts with the backend RESTful API to manage courses and their delivery instances. It provides a user-friendly interface for performing CRUD operations on courses and instances.


## How to start

- Clone this repository to your local machine and Use Docker Compose to build and run the frontend container.
- I have added a CORS configuration for all headers, so don't worry about it. It will work on every browser with any type of POST request.
- The docker-compose file has configurations for Spring Boot on port 8080, React on port 3001, and MySQL on port 3307.
- You can't delete a course before deleting a delivery instance. However, I have added an exception to handle it so it can't cause an error.

## Running the Application

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

