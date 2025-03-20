
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="w-full py-3 px-5 bg-background/60 backdrop-blur-xl border-b border-border/40 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fadeIn">
          <div className="relative w-[48px] h-[48px]">
            <div className="affordmed-logo w-full h-full flex items-center justify-center">
              <svg 
                viewBox="0 0 40 40" 
                className="w-9 h-9 text-brand"
                fill="currentColor"
              >
                <path d="M20,0 C31.0457,0 40,8.9543 40,20 C40,31.0457 31.0457,40 20,40 C8.9543,40 0,31.0457 0,20 C0,8.9543 8.9543,0 20,0 Z M20,4 C11.1634,4 4,11.1634 4,20 C4,28.8366 11.1634,36 20,36 C28.8366,36 36,28.8366 36,20 C36,11.1634 28.8366,4 20,4 Z M20,8 C26.6274,8 32,13.3726 32,20 C32,26.6274 26.6274,32 20,32 C13.3726,32 8,26.6274 8,20 C8,13.3726 13.3726,8 20,8 Z M20,12 C15.5817,12 12,15.5817 12,20 C12,24.4183 15.5817,28 20,28 C24.4183,28 28,24.4183 28,20 C28,15.5817 24.4183,12 20,12 Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-medium tracking-tight text-foreground">
              AffordMed
            </h1>
            <p className="text-xs text-muted-foreground">
              Social Media Analytics
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <NavItem href="#" active>Dashboard</NavItem>
          <NavItem href="#">Analytics</NavItem>
          <NavItem href="#">Settings</NavItem>
        </nav>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavItem = ({ href, children, active }: NavItemProps) => (
  <a 
    href={href} 
    className={cn(
      "relative text-sm font-medium transition-colors hover:text-foreground",
      active ? "text-foreground" : "text-muted-foreground"
    )}
  >
    {children}
    {active && (
      <span className="absolute -bottom-[22px] left-0 right-0 mx-auto w-[3px] h-[3px] rounded-full bg-primary animate-pulse" />
    )}
  </a>
);

export default Navbar;
