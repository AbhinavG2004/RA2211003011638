
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Animate entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gradient">
      <div 
        className={`text-center transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-6">
          <div className="relative">
            <h1 className="text-8xl font-bold text-gradient">404</h1>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-2 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-foreground/90 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 border border-primary/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span>Return to Dashboard</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
