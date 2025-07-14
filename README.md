# Kirstein Genzen Nojapa CPA - Professional Bookkeeper Portfolio

A modern, responsive portfolio website for a professional bookkeeper and CPA, built with HTML, CSS, and JavaScript. Perfect for deployment on GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Modern UI**: Clean, professional design with gradient effects and animations
- **Professional Sections**: 
  - Hero section with credentials and statistics
  - About section with qualifications and experience
  - Services section with detailed offerings and pricing
  - Client success stories and case studies
  - Contact form with multiple contact methods
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

## Getting Started

### Prerequisites

- A web browser
- A text editor (VS Code recommended)
- Git (for version control)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/bookkeeper-portfolio.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd bookkeeper-portfolio
\`\`\`

3. Open `index.html` in your web browser or use a local server:
\`\`\`bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
\`\`\`

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository:
\`\`\`bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
\`\`\`

3. Go to your repository settings on GitHub
4. Scroll down to "Pages" section
5. Select "Deploy from a branch" as source
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your site will be available at: `https://yourusername.github.io/your-repo-name`

## Customization

### Personal Information
Edit the following files to customize with your information:

- **index.html**: Update name, credentials, contact information, and services
- **styles.css**: Modify colors, fonts, and styling to match your brand
- **script.js**: Update form handling and contact information

### Key Sections to Customize:

1. **Navigation**: Update the logo and name in the navbar
2. **Hero Section**: Change the title, description, and statistics
3. **About Section**: Add your photo, credentials, and background
4. **Services**: Update service offerings, descriptions, and pricing
5. **Experience**: Add your client success stories and case studies
6. **Contact**: Update contact information and form handling

### Color Scheme
The website uses a professional blue and green color scheme. To change colors, update the CSS custom properties in `styles.css`:

\`\`\`css
:root {
  --primary-blue: #2563eb;
  --primary-green: #059669;
  --text-dark: #1f2937;
  --text-light: #6b7280;
}
\`\`\`

## File Structure

\`\`\`
bookkeeper-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Images and other assets (optional)
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal external dependencies
- Fast loading times

## SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt text for images
- Schema markup ready

## Contact Form Integration

The contact form is ready to integrate with:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend solutions

To integrate with Formspree:
1. Sign up at formspree.io
2. Create a new form
3. Update the form action in `index.html`:
\`\`\`html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
\`\`\`

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this template or have questions, please:
1. Check the documentation above
2. Open an issue on GitHub
3. Contact the developer

## Credits

- Icons: Font Awesome
- Fonts: Google Fonts (Inter)
- Design: Custom responsive design
- Animations: CSS3 transitions and keyframes

---

**Ready to deploy?** Follow the GitHub Pages deployment instructions above to get your professional bookkeeper portfolio online in minutes!
