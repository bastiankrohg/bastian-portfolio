# Bastian Krohg - Portfolio

A modern, responsive portfolio website showcasing my engineering projects and international experience. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Clean, professional layout with smooth animations
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Project Showcase** - Dedicated section for engineering projects with live demos
- **Skills Display** - Organized technical skills with visual categories
- **Contact Form** - Professional contact section for collaboration opportunities
- **Performance Optimized** - Built with Next.js for fast loading and SEO

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📸 Screenshot

![Portfolio Landing Page](screenshot.png)
*Modern portfolio landing page showcasing engineering projects and international experience*

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bastiankrohg/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── header.tsx    # Navigation header
│   ├── hero.tsx      # Landing section
│   ├── about.tsx     # About section
│   ├── skills.tsx    # Skills showcase
│   ├── projects.tsx  # Projects portfolio
│   ├── contact.tsx   # Contact form
│   └── footer.tsx    # Site footer
├── public/
│   └── images/       # Project images and assets
└── README.md
```

## 🎨 Customization

### Adding Projects

Edit the `projects` array in `components/projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    image: "/images/projects/your-project.jpg",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrls: [
      { label: "Live Demo", url: "https://your-demo.com" },
      { label: "Documentation", url: "https://your-docs.com" }
    ],
    date: "2024"
  }
]
```

### Updating Contact Information

Modify the contact details in `components/contact.tsx` and `components/footer.tsx`.

### Adding Skills

Update the `skillCategories` array in `components/skills.tsx` to reflect your technical expertise.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

For static hosting (Netlify, GitHub Pages):

```bash
npm run build
npm run export
```

## 📧 Contact

- **Email:** [baskrohg@gmail.com](mailto:baskrohg@gmail.com)
- **LinkedIn:** [linkedin.com/in/bastiankrohg](https://linkedin.com/in/bastiankrohg)
- **GitHub:** [github.com/bastiankrohg](https://github.com/bastiankrohg)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
