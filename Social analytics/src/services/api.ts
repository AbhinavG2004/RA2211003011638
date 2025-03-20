import { toast } from "sonner";

// Define types for our data
export interface User {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string; // Added title property
  content: string;
  author: string;
  timestamp: string;
  tags: string[];
}

export interface Tag {
  name: string;
  count: number;
}

// Base API configuration
const API_URL = "https://jsonplaceholder.typicode.com";

// Generic fetch function with error handling
async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    toast.error(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    throw error;
  }
}

// API functions for different data types
export async function getUsers(): Promise<User[]> {
  const users = await fetchData<any[]>('/users');
  
  // Transform the response to match our User interface
  return users.slice(0, 12).map(user => ({
    id: user.id.toString(),
    name: user.name
  }));
}

export async function getPosts(): Promise<Post[]> {
  const posts = await fetchData<any[]>('/posts');
  const users = await fetchData<any[]>('/users');
  
  // Get random users for the posts
  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex].name;
  };
  
  // Generate random tags
  const tags = ['HealthTech', 'API', 'Healthcare', 'MedTech', 'DataViz', 'AI', 
                'Innovation', 'MachineLearning', 'MedicalData', 'DigitalHealth'];
  
  const getRandomTags = () => {
    const numTags = Math.floor(Math.random() * 3) + 1;
    const shuffled = [...tags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
  };
  
  // Get relative time
  const getRelativeTime = () => {
    const times = ['2 mins ago', '15 mins ago', '1 hour ago', '3 hours ago', '5 hours ago', 'Yesterday'];
    return times[Math.floor(Math.random() * times.length)];
  };
  
  // Transform the response to match our Post interface
  return posts.slice(0, 5).map(post => ({
    id: post.id.toString(),
    title: post.title, // Added title from API response
    content: post.body,
    author: getRandomUser(),
    timestamp: getRelativeTime(),
    tags: getRandomTags()
  }));
}

export async function getTags(): Promise<Tag[]> {
  const posts = await fetchData<any[]>('/posts');
  
  // Extract words from post titles to simulate tags
  const tags: Record<string, number> = {};
  const commonTags = ['HealthTech', 'API', 'Healthcare', 'MedTech', 'DataViz', 'AI', 
                      'Innovation', 'MachineLearning', 'MedicalData', 'DigitalHealth'];
  
  // Assign random counts to our predefined tags
  commonTags.forEach(tag => {
    tags[tag] = Math.floor(Math.random() * 100) + 20;
  });
  
  // Convert the tags object to an array of Tag objects
  return Object.entries(tags).map(([name, count]) => ({ name, count }));
}
