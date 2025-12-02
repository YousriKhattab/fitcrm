# ClientLift - Fitness Client Management System

A lightweight, frontend-only web application designed to help fitness professionals efficiently manage client information, track fitness goals, and get exercise recommendations.

## 🌟 Features

### Assignment 2 - New Features
- **Data Persistence**: All client data saved to localStorage
- **Full CRUD Operations**:
  - ✅ **Create**: Add new clients with comprehensive form validation
  - ✅ **Read**: View all clients in searchable table, view individual client details
  - ✅ **Update**: Edit existing client information
  - ✅ **Delete**: Remove clients with confirmation prompts
- **Search & Filter**: Real-time client search by name
- **Client Detail View**: Individual client pages with complete information
- **Exercise Recommendations**: Integration with Wger REST API to suggest 5 exercises per client
- **Modern UI**: Toast notifications, loading states, smooth animations

### Core Features
- **Dashboard Overview**: View total clients, new monthly additions, and popular fitness goals
- **Client Management**: Searchable client list with all information
- **Form Validations**: 
  - Full name validation (minimum 2 characters)
  - Age validation (must be between 1-120)
  - Email format validation
  - Phone number format validation (Egyptian: 11 digits starting with 01)
  - Required field validation for all inputs
  - Start date validation (cannot be in the future)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean UI**: Modern interface with smooth transitions and hover effects

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for structure
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Client-side logic, localStorage, and API integration
- **Wger REST API**: Exercise recommendations
- **No Dependencies**: Pure frontend implementation with no external libraries

## 📁 Project Structure

```
fitcrm/
├── index.html              # Dashboard page
├── clients.html            # Client list page with search
├── add-client.html         # Add new client form
├── edit-client.html        # Edit existing client
├── client-detail.html      # Individual client details + exercises
├── css/
│   └── styles.css          # All styling (responsive)
├── js/
│   └── main.js             # Core logic (localStorage, CRUD, API)
├── assets/
│   └── icons/              # Icon assets
└── README.md               # This file
```

## 🚀 Live Demo

The application is deployed on GitHub Pages:
**[ClientLift Live Demo](https://yourusername.github.io/fitcrm/)**

> **Note**: Replace the URL above with your actual GitHub Pages URL after deployment.

## 📦 Local Setup

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/fitcrm.git
   cd fitcrm
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Navigate to**:
   - Open your browser and go to `http://localhost:8000`

## 💡 Usage Guide

### Adding a Client
1. Click "Add New Client" from dashboard or navigation
2. Fill out the form with client details
3. Form validates all inputs in real-time
4. Submit to save - data persists in localStorage
5. Automatically redirects to client list

### Viewing Clients
1. Navigate to "Client List"
2. Search clients by name using the search box
3. Click any client row to view full details
4. Client detail page shows:
   - Complete client information
   - Training history placeholder
   - 5 recommended exercises from Wger API

### Editing a Client
1. From Client List or Client Detail page, click "Edit"
2. Form prepopulates with existing data
3. Make changes and save
4. Updates persist in localStorage

### Deleting a Client
1. Click "Delete" button from Client List or Detail page
2. Confirm deletion in dialog
3. Client removed from localStorage
4. Table updates automatically

## 🌐 Deployment Method

This project is deployed using **GitHub Pages**:

### Deployment Steps:

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Complete Assignment 2 implementation"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be published at `https://yourusername.github.io/fitcrm/`

### Alternative: Netlify Deployment

If you prefer Netlify:

1. **Drag and drop** your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository to Netlify for automatic deployments

## 🔌 API Integration

**Wger Workout Manager API**
- **Documentation**: https://wger.de/en/software/api
- **Endpoint Used**: `/api/v2/exercise/?language=2&limit=5`
- **Purpose**: Fetch 5 exercise recommendations for each client
- **Features**: 
  - Exercise names and descriptions
  - Muscle group information
  - No authentication required
  - CORS enabled

## 🔮 Future Enhancements

- Training session tracking and progress charts
- Exercise customization based on fitness goals
- Client progress photos and measurements
- Appointment scheduling
- Export client data to CSV/PDF
- Backend integration with database
- Multi-user support with authentication
- Mobile app version

## 📝 Assignment 2 Requirements

This project fulfills all Assignment 2 requirements:

### ✅ Page 1: Add Client Form
- [x] Save client data to localStorage
- [x] Auto-generate unique client ID
- [x] Redirect to client list after submission

### ✅ Page 2: Client List
- [x] Load and display clients from localStorage
- [x] Edit functionality with prepopulated forms
- [x] Delete with confirmation prompts
- [x] Search/filter by client name
- [x] Click row to view client details

### ✅ Page 3: Client Detail View
- [x] Display all client information
- [x] Show training history section
- [x] Fetch and display 5 exercises from Wger API
- [x] Handle API errors gracefully

### ✅ Non-Functional Requirements
- [x] Data persistence with localStorage
- [x] Persists across page refreshes
- [x] Responsive design (desktop and mobile)
- [x] Form validation for all fields
- [x] Clean and organized codebase with comments

## 📄 License

This project is for educational purposes as part of a web development course (CSCE 4502).

---

**Built with ❤️ for fitness professionals**
