import { useRouter } from 'next/router';
import styles from '../../styles/User.module.scss';
export default function () {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className={styles.user}>
            <h1>User with id {id}</h1>
        </div>
    );
}
