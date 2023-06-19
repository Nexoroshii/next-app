import Link from 'next/link';
import { useEffect, useState } from 'react';

const users = ({ users }) => {
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

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return { props: { users } };
}
