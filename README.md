# Todo-App
A small backend project build using Nodejs,Express and Postman
# Functions of App
This App has several API's for different task:-
1) Create a Todo  
   - (POST request) 
   - **/api/todo**
2) Get all created todos  
   - (GET request)  
   - **/api/todos**
3) Get a particular todo according to id  
   - (GET request with query parameter) 
   - **/api/todo?id=1**
4) Update the Status of Todo from Pending to Done
   - (PUT request with query parameter)
   - **/api/todo?id=1**
5) Delete a Todo
   - (DELETE request with query parameter)
   - **/api/todo?id=1**

Note:- This project dont use any database like mongoDB or MYSQL instead it has an in-memory array to store todos

# How to Run this App in VSCODE
REQUIREMENT:  NODEJS,VSCODE
1) Clone this Repo in VSCODE.
2) Open the terminal in VScode.
3) Run following command in terminal to install all dependecies.\
   **npm install**
4) Now install one package **nodemon** to refresh the app whenever something has changed in App.Use following command
   **npm install nodemon**
5) Now open Postman in chrome or you can download postman as per your system OS.
6) With postman hit the different endpoints provided above of the the App.
**Note- to create a todo pass json object inside body example :-
- { \
    "id":1,\
    "todo":"CALL JOHN",\
    "status":"Pending"\
 }
