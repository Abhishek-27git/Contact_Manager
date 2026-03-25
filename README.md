# 📒 Contact Manager App

A simple **React Contact Management Application** with full CRUD functionality using a mock backend powered by **JSON Server**.

---

## 🚀 Features

* ➕ Add new contacts
* ✏️ Edit existing contacts
* 👀 View contact details
* ❌ Delete contacts
* 📡 REST API integration using JSON Server
* 🎨 Clean and responsive UI

---

## 🏗️ Project Structure

```
contact-manager/
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ContactList.js
│   │   ├── ContactCard.js
│   │   ├── AddContact.js
│   │   ├── EditContact.js
│   │   ├── ContactDetail.js
│   │
│   ├── api/
│   │   └── contacts.js
│   │
│   ├── images/
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── server_api/
│   ├── db.json
│   └── package.json
│
├── public/
│   └── index.html
│
├── build/
└── package.json
```

---

## 🧩 Component Overview

### 🔹 `App.js`

* Root component
* Handles routing
* Manages global state

### 🔹 `Header.js`

* Displays application title and navigation

### 🔹 `ContactList.js`

* Displays all contacts

### 🔹 `ContactCard.js`

* Shows individual contact in list format

### 🔹 `AddContact.js`

* Form to add new contacts

### 🔹 `EditContact.js`

* Form to update existing contacts

### 🔹 `ContactDetail.js`

* Displays detailed information of a contact

### 🔹 `api/contacts.js`

* Handles API requests:

  * Fetch contacts
  * Add contact
  * Update contact
  * Delete contact

---

## ⚙️ How It Works

1. The **React frontend** communicates with the backend API.
2. The backend is powered by **JSON Server**.
3. Contact data is stored inside `db.json`.
4. All CRUD operations are performed through REST API calls.

---

## 🛠️ Technologies Used

* React.js
* React Router
* Axios
* JSON Server
* CSS

---

## 🖥️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek-27git/contact-manager.git
cd contact-manager
```

---

### 2️⃣ Install Frontend Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Backend (JSON Server)

Navigate to the backend folder:

```bash
cd server_api
npm install
```

Start JSON Server:

```bash
npx json-server --watch db.json --port 3006
```

---

### 4️⃣ Run React App

Go back to root folder:

```bash
cd ..
npm start
```

The app will run at:

```
http://localhost:3000
```

Backend runs at:

```
http://localhost:3006
```

---

## 📡 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/contacts`     | Get all contacts   |
| GET    | `/contacts/:id` | Get single contact |
| POST   | `/contacts`     | Add contact        |
| PUT    | `/contacts/:id` | Update contact     |
| DELETE | `/contacts/:id` | Delete contact     |

---

## 📦 Production Build

To create a production build:

```bash
npm run build
```

Build files will be generated in the `build/` folder.

---

## 📸 Future Improvements

* 🔍 Search functionality
* 🌙 Dark mode
* 🔐 Authentication
* 📱 Better responsive design
