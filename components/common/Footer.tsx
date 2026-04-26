import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-background to-primary/5 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Mall of America
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The nation&apos;s largest shopping destination with 5.6 million square feet of retail, dining, and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {['Retail', 'Dining', 'Attractions', 'Events'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['About', 'Contact', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
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
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mall of America. All rights reserved.
          </p>
          
          <div className="flex gap-6 sm:gap-8">
            {['Privacy', 'Terms', 'Accessibility'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
