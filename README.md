# Éthéré Café - Premium Coffee Shop Website

A visually stunning, premium coffee shop website with a futuristic and elegant design for 2025. This project uses React, Vite, Tailwind CSS, Bun as package manager, and Framer Motion for animations.

![Éthéré Café Preview](./preview.png)

## Features

- 🎨 Futuristic and elegant design with light cyan color palette
- 🌟 Glassmorphic UI elements with modern aesthetics
- ⚡ Fast performance with Vite and React
- 📱 Fully responsive design for all device sizes
- 🔄 Smooth animations and transitions with Framer Motion
- 🧩 Component-based architecture for easy maintenance
- 🎭 Interactive elements with hover and tap animations
- 🌐 Multi-page layout with clean navigation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18.0.0 or higher)
- Bun package manager (v1.0.0 or higher)

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/coffee-shop-website.git
cd coffee-shop-website
```

2. Install dependencies using Bun

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

This will start the development server at `http://localhost:3000`.

### Build for Production

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
coffee-shop-website/
├── public/              # Static assets
│   ├── images/          # Image assets
├── src/                 # Source files
│   ├── assets/          # Other assets
│   ├── components/      # Reusable components
│   ├── context/         # Context API
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── styles/          # CSS styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Key Components

### Navbar

- Glassmorphic navigation bar that changes opacity on scroll
- Mobile-friendly dropdown menu
- Active page indicator with smooth transitions

### Hero Section

- Full-screen hero with background image and overlay
- Animated heading and subheading
- Call-to-action buttons with hover effects
- Scroll indicator animation

### Menu Sections

- Interactive category filtering
- Product cards with hover animations
- Rating system and popularity indicators
- Quick add to cart functionality

### Testimonials

- Carousel with customer reviews
- Automatic and manual navigation
- Smooth transitions between testimonials

### Subscription Form

- Email subscription with validation
- Success message animation
- Clean, minimalist design

### Footer

- Multi-column layout with navigation links
- Social media integration
- Copyright information

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. You can modify the primary colors:

```javascript
colors: {
  primary: {
    50: '#e6f9fa',
    100: '#c0f0f3',
    200: '#97e6ec',
    300: '#6ddae4',
    400: '#48cedc',
    500: '#2ac0d2',
    600: '#219ba9',
    700: '#1a7681',
    800: '#125158',
    900: '#092c30',
  },
  // ... other colors
}
```

### Fonts

The website uses Playfair Display for headings and Inter for body text. You can change these in `tailwind.config.js`:

```javascript
fontFamily: {
  'playfair': ['"Playfair Display"', 'serif'],
  'inter': ['Inter', 'sans-serif'],
}
```

And update the font imports in `src/styles/index.css`.

## Best Practices Implemented

- **Performance Optimization**: Lazy loading of images and components
- **Accessibility**: Semantic HTML and ARIA attributes for better screen reader support
- **Code Organization**: Modular components with clear separation of concerns
- **Responsive Design**: Mobile-first approach with tailored experiences for various screen sizes
- **Animation Performance**: GPU-accelerated animations for smooth performance

## Technologies Used

- **React**: UI library for building component-based interfaces
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Bun**: Fast JavaScript runtime and package manager
- **React Router Dom**: For page navigation and routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by prajwalc22, March 2025.

## Acknowledgments

- Images are placeholder references and should be replaced with actual coffee shop photos
- Inspiration from modern UI/UX trends for 2025
