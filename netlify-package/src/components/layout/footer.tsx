"use client";

import Link from "next/link";
import { Bot, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Agents", href: "/agents" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Community", href: "/community" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "/press" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: <Github className="w-5 h-5" /> },
  { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
  { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-background-surface border-t border-white/5">
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold">Agency Agents</span>
            </Link>
            <p className="text-sm text-white/60 mb-6 max-w-xs">
              The intelligent agent platform for modern businesses. Powered by OpenHands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Agency Agents. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built with OpenHands
          </p>
        </div>
      </div>
    </footer>
  );
}
