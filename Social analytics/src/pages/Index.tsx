
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DashboardCard from '@/components/DashboardCard';
import UsersList from '@/components/UsersList';
import PostFeed from '@/components/PostFeed';
import TopTags from '@/components/TopTags';
import { cn } from '@/lib/utils';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    activePlatforms: 0,
    apiCalls: 0
  });

  useEffect(() => {
    // Simulate loading for the entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Mock statistics
      setStats({
        totalUsers: 1532,
        totalPosts: 8749,
        activePlatforms: 5,
        apiCalls: 25340
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 py-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Header */}
          <div className={cn(
            "mb-8 transition-all duration-700 ease-out transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                  Dashboard
                </span>
              </div>
              <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
                Social Media Analytics
              </h1>
              <p className="text-muted-foreground max-w-[700px]">
                Monitor and analyze data from connected social media platforms in real-time.
              </p>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard 
              title="Registered Users"
              value={stats.totalUsers}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
              change="+12%"
              delay={0}
              isLoaded={isLoaded}
            />
            <StatsCard 
              title="Total Posts"
              value={stats.totalPosts}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              }
              change="+24%"
              delay={100}
              isLoaded={isLoaded}
            />
            <StatsCard 
              title="Active Platforms"
              value={stats.activePlatforms}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              }
              change="Stable"
              delay={200}
              isLoaded={isLoaded}
            />
            <StatsCard 
              title="API Calls (24h)"
              value={stats.apiCalls}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
              change="+9%"
              delay={300}
              isLoaded={isLoaded}
            />
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={cn(
              "lg:col-span-2 transition-all duration-700 ease-out transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "300ms" }}>
              <PostFeed />
            </div>
            
            <div className={cn(
              "space-y-6 transition-all duration-700 ease-out transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "400ms" }}>
              <TopTags />
              <UsersList />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-4 px-6 border-t border-border/20 mt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2023 AffordMed. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change: string;
  delay: number;
  isLoaded: boolean;
}

const StatsCard = ({ title, value, icon, change, delay, isLoaded }: StatsCardProps) => {
  const [count, setCount] = useState(0);
  
  // Animate the counter when loaded
  useEffect(() => {
    if (!isLoaded) return;
    
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16); // Update roughly every 16ms
    
    // Don't animate small values
    if (end < 10) {
      setCount(end);
      return;
    }
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, isLoaded]);
  
  const isPositive = change.includes('+');
  const isNeutral = change === 'Stable';
  
  return (
    <div 
      className={cn(
        "frosted-card p-4 rounded-xl transition-all duration-700 ease-out transform",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-muted-foreground">
          {title}
        </div>
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-medium mb-2">
        {count.toLocaleString()}
      </div>
      <div className={cn(
        "text-xs flex items-center gap-1",
        isPositive ? "text-emerald-500" : (isNeutral ? "text-muted-foreground" : "text-red-500")
      )}>
        {isPositive && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        )}
        {!isPositive && !isNeutral && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down">
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
            <polyline points="16 17 22 17 22 11"></polyline>
          </svg>
        )}
        <span>{change}</span>
        <span className="text-muted-foreground">vs last month</span>
      </div>
    </div>
  );
};

export default Index;
