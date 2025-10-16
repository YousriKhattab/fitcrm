# FitCRM – Simple Client Manager for Fitness Programs

## 📋 Project Description

FitCRM is a lightweight, frontend-only CRM (Customer Relationship Management) web application designed specifically for fitness professionals, including fitness instructors, personal trainers, and small gym owners. The application helps manage basic client information and track their fitness goals in a simple, intuitive interface.

This project is built with pure HTML and CSS, making it easy to deploy and maintain without requiring backend infrastructure or databases.

## 🎯 Purpose

The primary purpose of FitCRM is to provide fitness professionals with an easy-to-use tool to:
- Register new clients with essential information
- View and manage a list of existing clients
- Track client fitness goals and membership details
- Access client information quickly through search functionality

## 🛠️ Tech Stack

- **HTML5** - Semantic markup for structure
- **CSS3** - Styling with Flexbox/Grid for responsive layouts
- **No JavaScript** - Pure HTML/CSS implementation as per requirements
- **GitHub Pages** - Hosting and deployment

## ✨ Features

### Page 1: New Client Form
A comprehensive form to register new clients with the following fields:
- **Full Name** (text input)
- **Age** (number input)
- **Gender** (dropdown selection)
- **Email** (email input with validation)
- **Phone** (telephone input)
- **Fitness Goal** (dropdown with options: Weight Loss, Muscle Gain, General Fitness, etc.)
- **Membership Start Date** (date picker)
- **Add Client Button** (placeholder - no backend action)
- **Clear Form Button** (resets all fields)

### Page 2: Client List View
A responsive table displaying 10 sample clients with:
- Client name, email, phone, fitness goal, and membership start date
- **Search functionality** - Search box to filter clients by name
- **Action buttons** for each client:
  - Edit (placeholder)
  - Delete (placeholder)

### Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Uses CSS Flexbox and Grid for flexible layouts
- Media queries for optimized viewing on different screen sizes
- Mobile-first approach with stacked table layout on small screens

## 📁 File Structure

```
fitcrm/
├── index.html          # New Client Form page
├── clients.html        # Client List View page
├── css/
│   └── styles.css      # All CSS styling
├── assets/
│   └── icons/          # Optional icons folder (for future use)
└── README.md           # Project documentation
```

## 🚀 Deployment Method

This project is deployed using **GitHub Pages**, a free static site hosting service provided by GitHub.

### Deployment Steps:

1. **Create a GitHub Repository**
   - Create a new public repository named `fitcrm`
   - Initialize with or without README

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FitCRM project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fitcrm.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select branch `main` and folder `/ (root)`
   - Click Save
   - Wait a few minutes for deployment

4. **Access Your Live Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/fitcrm/`

## 💻 Local Development

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fitcrm.git
   cd fitcrm
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full table layout with all features
- **Tablet**: 600px - 768px - Adjusted spacing and font sizes
- **Mobile**: < 600px - Stacked table layout with labels

## 🎨 Design Features

- Clean and modern UI design
- Green color scheme (#4CAF50) representing health and fitness
- Smooth hover effects and transitions
- Card-based layout for better visual hierarchy
- Accessible form inputs with proper labels
- Box shadows for depth and visual separation

## 📝 Notes

- This is a **frontend-only** application with no backend functionality
- Form submissions and button actions are **placeholders** and do not persist data
- Sample client data is hardcoded in `clients.html`
- Search functionality is for demonstration purposes (no JavaScript implementation)

## 🔮 Future Enhancements

Potential features that could be added with JavaScript:
- Real form validation and submission
- Local storage for data persistence
- Functional search and filtering
- Edit and delete operations
- Client details modal/popup
- Export client list to CSV
- Client progress tracking charts

## 👥 Target Users

- Fitness Instructors
- Personal Trainers
- Small Gym Owners
- Independent Fitness Coaches
- Yoga/Pilates Instructors

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as part of a web development project assignment.

---

**Live Demo**: [Your GitHub Pages URL will appear here]

**Repository**: [Your GitHub Repository URL will appear here]
# fitcrm
