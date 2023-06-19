import { useRouter } from 'next/router';
import styles from '../../styles/User.module.scss';
import MainContainer from '../../components/MainContainer';
export default function User({ user }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>User with id {id}</h1>
                <div>User name - {user.name}</div>
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await response.json();
    return { props: { user } };
}
