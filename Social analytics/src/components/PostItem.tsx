
import React from 'react';
import { cn } from '@/lib/utils';

interface PostItemProps {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  tags: string[];
  index: number;
}

const PostItem = ({ 
  id, 
  content, 
  author, 
  timestamp, 
  tags, 
  index 
}: PostItemProps) => {
  return (
    <div 
      className={cn(
        "p-4 border-b border-border/30 transition-all",
        "hover:bg-muted/20 animate-fadeInUp"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <span className="text-primary text-xs font-medium">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">{author}</span>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-sm text-foreground/90">{content}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-0.5 rounded-full bg-muted/30 text-primary hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <span>12</span>
              </button>
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>3</span>
              </button>
            </div>
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
