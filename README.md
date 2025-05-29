# tuungane
A modern, responsive HTML5 and CSS website for Tuunganes a community driven organization providing digital solutions in school management, public health tech, IT support, and digital transformation services. Built to showcase projects and empower communities with technology.

The site features a clean design with Bootstrap integration, a contact form powered by FormSubmit, and secure HTTPS hosting on a VPS.

## Features
- Responsive design using Bootstrap 5
- Light blue and white color scheme for clean and look
- Service sections with individual pages
- Contact form integrated with FormSubmit service (which will be replace by a built in Python)
- SSL enabled with Let's Encrypt certificates
- SEO-friendly structure and meta tags

## Project Structure

tuunganes.com/
├── index.html                 # Home page
├── contact.html               # Contact page with form
├── services/                  # Folder for individual service pages
│   ├── school-management.html
│   ├── digital-health.html
│   └── it-consultancy.html
├── assets/                    # All static assets (CSS, JS, images, fonts)
│   ├── css/
│   │   └── styles.css         # Custom styles
│   ├── js/
│   │   └── main.js            # to be coming
├── nginx/                     # config for the server
│   └── tuunganes.com.conf
└── README.md                  # Project documentation
