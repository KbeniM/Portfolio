# Software Engineer Portfolio

A modern, minimalistic, and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases technologies, projects, and provides contact information in a clean, professional design.

## 🚀 Features

- **Minimalistic Design**: Clean and professional aesthetic
- **Responsive Layout**: Optimized for all device sizes
- **Technology Showcase**: Visual display of programming languages, databases, frameworks, and tools
- **Project Gallery**: Featured projects with descriptions and links
- **Social Links**: Direct links to LinkedIn, GitHub, and email
- **Static Export**: Optimized for deployment to GitHub Pages
- **Modern Tech Stack**: Built with the latest web technologies

## 🛠️ Technologies Used

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library with technology-specific icons
- **Lucide React** - Modern icon set

### Featured Technologies in Portfolio
- **Languages**: HTML, CSS, JavaScript, TypeScript, PHP, C#
- **Databases**: Firebase, MySQL, Drizzle, Prisma
- **Frameworks**: Next.js, Laravel
- **Tools**: Docker, Unity Game Engine

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   └── app/
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Main portfolio page
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit the following sections in `src/app/page.tsx`:

1. **Header Section**: Update name, description, and social links
2. **Technologies Section**: Add/remove technologies you use
3. **Projects Section**: Replace with your actual projects
4. **Footer**: Update contact information

### Social Links
Replace placeholder URLs with your actual profiles:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Email: `your.email@example.com`

### Projects
Update the `projects` array with your actual projects:
```typescript
{
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com"
}
```

## 🚀 Deployment

### GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Automatic deployment via GitHub Actions
2. **Enable GitHub Pages** in repository settings
3. **Set custom domain** (optional) in repository settings

### Manual Deployment

1. **Build static files**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to your hosting provider

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎨 Color Scheme

- **Background**: Slate-900, Slate-800
- **Text**: White, Slate-300, Slate-400
- **Accents**: Technology-specific colors (blue, orange, green, etc.)
- **Hover Effects**: Smooth transitions on all interactive elements

## 📄 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with static export
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out if you have any questions or suggestions:

- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your Username](https://github.com/yourusername)
- **Email**: your.email@example.com

---

**Built with ❤️ using Next.js and Tailwind CSS**
