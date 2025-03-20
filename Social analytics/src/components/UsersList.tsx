import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import { getUsers, User } from '@/services/api';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">User List</h2>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <div className="space-y-2">
          {users.map((user, index) => (
            <UserItem key={user.id} id={user.id} name={user.name} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
