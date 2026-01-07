import React from 'react';

const Footer = () => {
  const productLinks = [
    { label: "Features", href: "#features" },
    { label: "AI Assistant", href: "#ai" },
    { label: "Format Support", href: "#formats" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download for Android", href: "https://urldra.cloud.huawei.com/yIJ6p2uE9y" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "https://hamzaqasim7.github.io/allfile-pro-privacy/" },
    { label: "Terms of Service", href: "https://hamzaqasim7.github.io/allfile-pro-terms/" }
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 pt-20 pb-10 px-6 md:px-12 w-full font-display">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-20">
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
              <a aria-label="LinkedIn" className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110" href="https://www.linkedin.com/in/hamzaqasim-flutterdeveloper/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className="w-4 h-4 text-white/70 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a aria-label="WhatsApp" className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:scale-110" href="https://wa.me/03197739591" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className="w-4 h-4 text-white/70 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
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

          {/* Column 3: Legal */}
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
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="https://hamzaqasim7.github.io/allfile-pro-privacy/">Privacy</a>
            <span className="text-white/20">|</span>
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="https://hamzaqasim7.github.io/allfile-pro-terms/">Terms</a>
            <span className="text-white/20">|</span>
            <a className="text-white/50 hover:text-white transition-colors duration-300" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
