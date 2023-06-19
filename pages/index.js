import Link from 'next/link';

const index = () => {
    return (
        <div>
            <div className="navbar">
                <Link legacyBehavior href="/">
                    <a className="link">Main</a>
                </Link>
                <Link legacyBehavior href="/users">
                    <a>Users</a>
                </Link>
            </div>
            <h1>Main page</h1>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                    .link {
                        text-decoration: none;
                        color: white;
                        font-size: 20px;
                        margin: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default index;
