import Link from 'next/link';
import A from '../components/A';

const index = () => {
    return (
        <div>
            <div className="navbar">
                <A href="/" text="Main" />
                <A href="/users" text="Users" />
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
