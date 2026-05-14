import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-background to-primary/5 border-t border-border/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 slide-up" data-animate>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Mall of America
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The nation&apos;s largest shopping destination with 5.6 million square feet of retail, dining, and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="slide-up" data-animate style={{ animationDelay: '0.1s' }}>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {['Retail', 'Dining', 'Attractions', 'Events'].map((link, index) => (
                <li key={link} className="hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="slide-up" data-animate style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['About', 'Contact', 'Careers', 'Press'].map((link, index) => (
                <li key={link} className="hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="slide-up" data-animate style={{ animationDelay: '0.3s' }}>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> partnerships@mallofamerica.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Bloomington, Minnesota
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 opacity-0 animate-fade-in-slow" style={{ animationDelay: '0.4s' }} />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 fade-in-slow" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mall of America. All rights reserved.
          </p>
          
          <div className="flex gap-6 sm:gap-8">
            {['Privacy', 'Terms', 'Accessibility'].map((link, index) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 opacity-0 animate-fade-in-slow"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
