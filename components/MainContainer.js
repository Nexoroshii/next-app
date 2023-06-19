import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={('nextJS', 'ssr' + keywords)}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Main" />
                <A href="/users" text="Users" />
            </div>
            <div>{children}</div>
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
        </>
    );
};

export default MainContainer;
