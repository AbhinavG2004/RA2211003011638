
import React from 'react';

interface UserItemProps {
  id: string;
  name: string;
  index: number;
}

const UserItem = ({ id, name, index }: UserItemProps) => {
  return (
    <div 
      className="flex items-center gap-3 p-3 hover:bg-muted/30 rounded-lg transition-colors animate-fadeInUp"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <span className="text-primary text-xs font-medium">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">ID: {id}</span>
      </div>
    </div>
  );
};

export default UserItem;
