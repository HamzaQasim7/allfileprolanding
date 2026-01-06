import React from 'react';

const Footer = () => {
  const productLinks = [
    { label: "Features", href: "#features" },
    { label: "AI Assistant", href: "#ai" },
    { label: "Format Support", href: "#formats" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download for Android", href: "#download" }
  ];

  const supportLinks = [
    { label: "Help Center", href: "#help" },
    { label: "Community Forum", href: "#forum" },
    { label: "Video Tutorials", href: "#tutorials" },
    { label: "Suggest a Feature", href: "#suggest" },
    { label: "Contact Us", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy-policy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Accessibility Statement", href: "#accessibility" },
    { label: "Security", href: "#security" }
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 pt-20 pb-10 px-6 md:px-12 w-full font-display">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: About / Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">description</span>
              <span className="text-white text-xl font-bold tracking-tight">AllFile Pro</span>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-xs">
              The last document reader you'll ever need. AI-powered, privacy-first, and designed for your eyes.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a aria-label="Twitter" className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110" href="#">
                <svg aria-hidden="true" className="w-4 h-4 text-white/70 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a aria-label="LinkedIn" className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110" href="#">
                <svg aria-hidden="true" className="w-4 h-4 text-white/70 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a aria-label="Instagram" className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110" href="#">
                <svg aria-hidden="true" className="w-4 h-4 text-white/70 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">Product</h3>
            <nav className="flex flex-col gap-4">
              {productLinks.map((link, index) => (
                <a key={index} className="text-white/70 text-base hover:text-white hover:underline transition-all duration-300 w-fit" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">Support</h3>
            <nav className="flex flex-col gap-4">
              {supportLinks.map((link, index) => (
                <a key={index} className="text-white/70 text-base hover:text-white hover:underline transition-all duration-300 w-fit" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">Legal</h3>
            <nav className="flex flex-col gap-4">
              {legalLinks.map((link, index) => (
                <a key={index} className="text-white/70 text-base hover:text-white hover:underline transition-all duration-300 w-fit" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p className="text-white/50 text-center md:text-left">
            © 2024 AllFile Pro. Made with <span className="text-red-500 mx-0.5">❤️</span> for readers worldwide.
          </p>
          <div className="flex items-center gap-6">
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="#privacy">Privacy</a>
            <span className="text-white/20">|</span>
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="#terms">Terms</a>
            <span className="text-white/20">|</span>
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
