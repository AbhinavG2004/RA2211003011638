
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
}

const DashboardCard = ({ 
  children, 
  title, 
  className, 
  action, 
  footer,
  isLoading = false 
}: DashboardCardProps) => {
  return (
    <div 
      className={cn(
        "frosted-card rounded-xl overflow-hidden animate-fadeIn transition-all duration-300",
        "hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:translate-y-[-2px]",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border/40">
        <h3 className="font-medium tracking-tight">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      
      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <div className="h-4 bg-muted/40 rounded shimmer w-3/4"></div>
            <div className="h-4 bg-muted/40 rounded shimmer w-1/2"></div>
            <div className="h-4 bg-muted/40 rounded shimmer w-5/6"></div>
            <div className="h-4 bg-muted/40 rounded shimmer w-2/3"></div>
          </div>
        ) : (
          children
        )}
      </div>
      
      {footer && (
        <div className="p-4 border-t border-border/40 bg-muted/20">
          {footer}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
