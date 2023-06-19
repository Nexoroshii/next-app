import Link from 'next/link';
import { useState } from 'react';

const users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Petya' },
        { id: 2, name: 'Vanya' },
    ]);
    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link legacyBehavior href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default users;
