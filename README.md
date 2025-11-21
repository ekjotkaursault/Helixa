# Helixa – Frontend Prototype (Capstone Project)

## Project Overview
Helixa is a modern, user-friendly web application prototype developed as part of a capstone project. This project focuses on creating an intuitive frontend interface that allows users to interact with the system easily. The goal of this prototype is to demonstrate the user experience, navigation, and basic functionality of the application.

This version represents the **frontend prototype stage** of the project.

---

## Purpose of the Project
The purpose of this project is to:
- Build a working frontend prototype
- Design user-friendly interfaces
- Demonstrate real-time interaction through chat UI
- Practice modern web development skills as part of a capstone milestone

---

##  Technologies Used
- React.js
- HTML5
- CSS3
- JavaScript (ES6)
- Node.js (development environment)
- Git & GitHub
- VS Code

---

##  Features Implemented

 1. Welcome / Landing Page UI  
 2. Login Page with form validation  
 3. Navigation between pages  
 4. Chat Interface (User & Bot messages)  
 5. Input field with Send button  
 6. Clean and responsive design  

---

## Project Structure

### Root Folder: client

This is the main frontend folder of your React project. Everything related to the UI lives inside here.

###  node_modules/

This folder contains all the libraries and dependencies installed by npm install

You never edit this folder manually

###  public/

Contains static files like:

index.html

icons

images

This is the file React loads first when your app starts

###  src/

This is the main working folder where you write your code.

###  components/

This is where reusable UI components live

Example: buttons, headers, footers, avatars, message bubbles

###  pages/

This contains full pages/screens of your project:

| File           | Purpose                            |
| -------------- | ---------------------------------- |
| `Home.jsx`     | Welcome / landing page UI          |
| `Home.css`     | Styling for Home page              |
| `login.jsx`    | Login screen UI                    |
| `Register.jsx` | Registration screen                |
| `Chat.jsx`     | Chat UI screen                     |
| `Chat.css`     | Styling for chat page              |
| `Auth.css`     | Common styles for login & register |

## Important Files in src/

| File        | Purpose                         |
| ----------- | ------------------------------- |
| `App.js`    | Main controller of routes/pages |
| `App.css`   | Global app styling              |
| `index.js`  | Entry point of your React app   |
| `index.css` | Global CSS styles               |

### Other Important Files

| File                | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `.gitignore`        | Tells Git what files NOT to upload (like node_modules) |
| `package.json`      | List of dependencies + scripts                         |
| `package-lock.json` | Exact version lock for packages                        |
| `README.md`         | Project documentation                                  |


---

##  How to Run the Project Locally ?

To run this project on your system:

1. Clone the repository: git clone https://github.com/ekjotkaursault/Helixa.git

2. Navigate to the project folder: cd client

3. Install dependencies: npm install

4. Start the development server: npm start

5. Open in browser: http://localhost:3000

---

### Testing Details:

The prototype has been tested for:

--- UI responsiveness

--- Button and navigation functionality

--- Chat message flow

--- Future testing will include:

--- User authentication validation

--- API integration

--- Performance testing

---

##  Disclaimer

This project is developed as an academic prototype for learning and demonstration purposes only.
