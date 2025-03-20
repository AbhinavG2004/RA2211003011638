import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { getTags, Tag } from '@/services/api';

const TopTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      setIsLoading(true);
      try {
        const data = await getTags();
        // Sort by count (highest first)
        data.sort((a, b) => b.count - a.count);
        setTags(data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <DashboardCard title="Top Tags">
      {isLoading ? (
        <p>Loading tags...</p>
      ) : (
        <ul className="space-y-2">
          {tags.map((tag, index) => (
            <li key={index} className="flex justify-between">
              <span className="font-medium">{tag.name}</span>
              <span className="text-muted-foreground">{tag.count}</span>
            </li>
          ))}
        </ul>
      )}
    </DashboardCard>
  );
};

export default TopTags;
