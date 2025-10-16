# **ClientLift – Simple Client Manager for Fitness Programs**

**Project Description**

ClientLift is a lightweight, frontend-only CRM (Customer Relationship Management) web application designed specifically for fitness professionals, including fitness instructors, personal trainers, and small gym owners. The application helps manage basic client information and track their fitness goals in a simple, intuitive interface.

This project is built with pure HTML and CSS, making it easy to deploy and maintain without requiring backend infrastructure or databases.

**Purpose**

- Register new clients with essential information
- View and manage a list of existing clients
- Track client fitness goals and membership details
- Access client information quickly through search functionality

**Tech Stack**

- HTML5 - Semantic markup for structure
- CSS3 - Styling with Flexbox/Grid for responsive layouts
- No JavaScript - Pure HTML/CSS implementation as per requirements
- GitHub Pages - Hosting and deployment

**Features**

- New Client Form: Comprehensive form to register new clients with fields for full name, age, gender, email, phone, fitness goal, membership start date, add client button (placeholder), and clear form button.
- Client List View: Responsive table displaying 10 sample clients with name, email, phone, fitness goal, membership start date, search functionality, and action buttons (edit/delete placeholders).
- Responsive Design: Fully responsive layout for desktop, tablet, and mobile devices using CSS Flexbox/Grid and media queries.


**File Structure**

- clientlift/
   - index.html          # Dashboard page with stats
   - clients.html        # Client List View page
   - css/
      - styles.css        # All CSS styling
   - assets/
      - icons/            # Optional icons folder (for future use)
   - README.md           # Project documentation


**Deployment Method**

- This project is deployed using GitHub Pages, a free static site hosting service provided by GitHub.

**Deployment Steps:**

- Create a GitHub Repository: Create a new public repository named `clientlift` and initialize with or without README.
- Push Code to GitHub:
  - git init
  - git add .
  - git commit -m "Initial commit: ClientLift project"
  - git branch -M main
  - git remote add origin https://github.com/YOUR_USERNAME/clientlift.git
  - git push -u origin main
- Enable GitHub Pages: Go to repository Settings, navigate to Pages section, select branch `main` and folder `/ (root)`, click Save, and wait a few minutes for deployment.
- Access Your Live Site: Your site will be available at `https://YOUR_USERNAME.github.io/clientlift/`

**Local Development**

- Clone the repository:
  - git clone https://github.com/YOUR_USERNAME/clientlift.git
  - cd clientlift
- Open in browser:
  - Open `index.html` in your web browser
  - Or use a local server:
    - python -m http.server 8000
    - php -S localhost:8000
  - Then navigate to `http://localhost:8000`


**Responsive Breakpoints**

- Desktop: > 768px - Full table layout with all features
- Tablet: 600px - 768px - Adjusted spacing and font sizes
- Mobile: < 600px - Stacked table layout with labels

**Design Features**

- Clean and modern UI design
- Green color scheme (#4CAF50) representing health and fitness
- Smooth hover effects and transitions
- Card-based layout for better visual hierarchy
- Accessible form inputs with proper labels
- Box shadows for depth and visual separation

**Notes**

- This is a frontend-only application with no backend functionality
- Form submissions and button actions are placeholders and do not persist data
- Sample client data is hardcoded in `clients.html`
- Search functionality is for demonstration purposes (no JavaScript implementation)

**Future Enhancements**

- Real form validation and submission
- Local storage for data persistence
- Functional search and filtering
- Edit and delete operations
- Client details modal/popup
- Export client list to CSV
- Client progress tracking charts

**Target Users**

- Fitness Instructors
- Personal Trainers
- Small Gym Owners
- Independent Fitness Coaches
- Yoga/Pilates Instructors

**License**

- This project is created for educational purposes.

**Author**

- Created as part of a web development project assignment.

---

**Live Demo**: [Your GitHub Pages URL will appear here]

**Repository**: [Your GitHub Repository URL will appear here]
# clientlift
