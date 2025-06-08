# BaseCamp Code Projects

This repository is a collection of foundational projects I built while learning React, Express, and MongoDB. Each project is designed to solidify core concepts and gradually build toward more advanced applications. These projects serve as stepping stones in my development journey.

---

## Projects Overview

### 1. **Counter App** - ✔
   - **Description**: A basic React application with buttons to increase, decrease, and reset a counter.  
   - **Tech Stack**: React.  
   - **Key Features**:  
     - Increment and decrement counter values.  
     - Reset the counter to its initial state.  
   - **Learning Outcomes**:  
     - State management with `useState`.  
     - Handling events and updating the UI dynamically.

### 2. **Todo List** ✔
   - **Description**: A simple task management application where users can add, edit, delete, and mark tasks as complete.  
   - **Tech Stack**: React.  
   - **Key Features**:  
     - Add new tasks.  
     - Edit existing tasks.  
     - Delete tasks.  
     - Mark tasks as complete or incomplete.  
   - **Learning Outcomes**:  
     - Working with arrays and state updates.  
     - Conditional rendering in React.  
     - Form handling.

### 3. **Weather App** ✔
   - **Description**: A weather application that fetches and displays weather data based on user input.  
   - **Tech Stack**: React, OpenWeather API.  
   - **Key Features**:  
     - Search for a city's weather.  
     - Display current temperature, weather conditions, and additional details.  
   - **Learning Outcomes**:  
     - Fetching data from an API using `fetch` or `axios`.  
     - Handling API responses and managing asynchronous operations.  
     - Managing component state and props.

### 4. **Simple Authentication** ✔
   - **Description**: A basic user authentication system built using Express and MongoDB.  
   - **Tech Stack**: Express.js, MongoDB, React (optional for frontend).  
   - **Key Features**:  
     - Login form for user authentication.  
     - Password validation and secure storage using bcrypt.  
     - User session management (optional).  
   - **Learning Outcomes**:  
     - Setting up and managing a MongoDB database.  
     - Handling user data securely.  
     - Creating and managing RESTful APIs with Express.

---

## Getting Started

### Prerequisites
- **Node.js** and **npm**: Install [Node.js](https://nodejs.org/) to run JavaScript on your machine.  
- **MongoDB**: Install and set up [MongoDB](https://www.mongodb.com/try/download/community).  
- A basic understanding of JavaScript and React.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mohfazam/basecamp-code.git
   cd basecamp-code




### More to do:
---

### **Beginner Projects**
1. **Counter App**  - ✔
   - Features: Increment, decrement, reset button.  
   - Goal: Practice state management.

2. **Digital Clock**  - ✔
   - Features: Display current time with automatic updates.  
   - Goal: Learn React hooks like `useEffect`.

3. **Color Picker** - ✔
   - Features: Choose colors and display their HEX/RGB codes.  
   - Goal: Practice event handling and basic CSS.

4. **Tip Calculator**  - ✔
   - Features: Calculate tip based on bill amount and percentage.  
   - Goal: Focus on simple math logic and React forms.

5. **BMI Calculator**  - ✔
   - Features: Input weight and height to calculate BMI.  
   - Goal: Practice conditional rendering and forms.

---

### **Intermediate Projects**
6. **Todo App**  
   - Features: Add, edit, delete, and mark tasks as complete.  
   - Goal: Introduce CRUD operations and local storage.

7. **Weather App**  
   - Features: Fetch weather data from OpenWeather API.  
   - Goal: Learn API integration and error handling.

8. **Notes App**  
   - Features: Save, edit, delete notes with categories.  
   - Goal: Practice CRUD with MongoDB.

9. **Authentication System**  
   - Features: Login, signup, and JWT authentication.  
   - Goal: Learn user authentication with Express and MongoDB.

10. **Movie Search App**  
    - Features: Fetch movie details from an API like OMDB.  
    - Goal: Learn debouncing and pagination.

---

### **Advanced Intermediate Projects**
11. **Blog Platform**  
    - Features: Create, edit, and comment on blog posts.  
    - Goal: Introduce relationships in MongoDB.

12. **Expense Tracker**  
    - Features: Track income and expenses, with graphs.  
    - Goal: Learn chart libraries like Chart.js.

13. **Shopping Cart**  
    - Features: Add/remove products, calculate totals.  
    - Goal: Learn state management for complex UIs.

14. **Chat Application**  
    - Features: Real-time messaging using WebSocket.  
    - Goal: Learn WebSocket and advanced Express routing.

15. **Task Management System**  
    - Features: Assign tasks, set deadlines, track progress.  
    - Goal: Introduce user roles and permissions.

---

### **Advanced Projects**
16. **E-Commerce Platform**  
    - Features: User authentication, product listings, cart, and payment gateway.  
    - Goal: Build a full-stack app integrating React, Express, and MongoDB.

17. **Social Media App**  
    - Features: User profiles, posts, likes, comments, and followers.  
    - Goal: Implement advanced database relationships.

18. **Online Learning Platform**  
    - Features: Courses, quizzes, progress tracking.  
    - Goal: Handle large-scale data and conditional rendering.

19. **Job Board**  
    - Features: Post jobs, apply, and track applications.  
    - Goal: Practice file uploads (resumes) and search functionality.

20. **Real-Time Collaboration Tool**  
    - Features: Share text/code in real-time, with user permissions.  
    - Goal: Advanced WebSocket usage and database optimization.

21. **Personal Finance Dashboard**  
    - Features: Budgeting, transaction analysis, and insights.  
    - Goal: Introduce data visualization and RESTful API design.

---

### **Freelance-Level Projects**
22. **CRM System**  
    - Features: Manage clients, leads, and sales.  
    - Goal: Build scalable apps with robust routing and state management.

23. **Freelance Marketplace Clone**  
    - Features: Profile creation, job postings, bids, and messaging.  
    - Goal: Implement payment systems and notifications.

24. **Inventory Management System**  
    - Features: Track stock levels, orders, and suppliers.  
    - Goal: Advanced CRUD and data filtering.

25. **Project Management Tool**  
    - Features: Task assignments, deadlines, Gantt charts.  
    - Goal: Master UI libraries and backend scalability.

26. **Healthcare App**  
    - Features: Appointment booking, doctor-patient chat.  
    - Goal: Handle sensitive data securely.

27. **Online Store with Admin Panel**  
    - Features: Admin dashboard for managing products, orders, and users.  
    - Goal: Full-stack project with a focus on admin tools.

---

#26 may 2025(AZ M)
---






-`npm init -y`  
-`npm i typescript`  
-`npx tsc --init`  

---
npm install prisma(Installing Prisma)  
npx prisma init(Initializing prisma in the project)  
npx prisma migrate dev(To migrate the database)  
npx prisma generate(to generate the Provider/Client)  

---
#removing .env when pushed:  
git rm -r --cached .env  
git add .  
git commit -m "Commit Msg"  
git push origin main (or) git push -u origin main  
---
###AWS

Navigate to the .pem file folder
Connect through SSH -`ssh -i private.pem root@instanceid`  
Change the TOO open permission -` chmod 700 private.pem`   

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  

1: .pem properties -> security -> advanced -> disable inheritence -> for all object  
2: Run this commands in the .epm folder  
-`icacls AIDUCATE_Sarwar.pem /inheritance:r`  
-`icacls AIDUCATE_Sarwar.pem /grant:r "%USERNAME%:R"`  
3: SSH into the VM



---
###REVERSE(PROSXY NGINX)


-`sudo apt update`  
-`sudo apt install nginx`  


---

See all the processes running on all the ports: -`lsof`   
To see a specific process on any port -`lsof -i :3000`{replace the 3000 with your port number}    
---
Install pm2 -`sudo npm i -g pm2`    
Start Pm2 -`pm2 start script.js`  
Status of Pm2 -`pm2 status`   

---
### **Initializing TurboRepo**

# 🧱 Turborepo Initialization – Step-by-Step Setup Guide

## ✅ Initial Setup

1. **Initialize an empty turborepo**  
   Use `npx create-turbo@latest` or manually configure using a monorepo structure.

2. **Delete unnecessary apps**  
   Removed the `docs` app to clean up unused boilerplate code.

3. **Add custom apps/packages**  
   Created the following apps inside the `apps/` or `packages/` directory:
   - `http-server`
   - `ws-server`

---

## 📦 Configuration Files

4. **Add `package.json` in any new apps**  
   Ensure each project (`app1` and `app2`) has its own `package.json` to manage dependencies and scripts.

5. **Add and configure `tsconfig.json` in both apps**  
   Created a `tsconfig.json` in both places and extended the shared configuration:

   ```json
   {
     "extends": "@repo/typescript-config/base.json"
   }

6. **Add the shared extended depencies into the `tsconfig.json`**
```tsconfig.json
{
    "extends":"@repo/typescript-config/base.json",
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
```
7. **Add Dev, Build, and Start Scripts
   ```package.json
   "build":"tsc -b",
    "start":"node ./dist/index.js",
    "dev":"npm run build && npm run start"
   ```
8. **Add the new configurationn as dependencies**
   ```package.json
   "dependencies": {
    "@repo/typescript-config":"workspace:*"
   }
   ```
  
9. **Install Dependencies***
   all this configurations are just add but to make them work we need to update our workspace using our package manager(preferable pnpm)
      `pnpm install`



