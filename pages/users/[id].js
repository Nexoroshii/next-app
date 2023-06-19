import { useRouter } from 'next/router';

export default function () {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>User with id {id}</h1>
        </div>
    );
}
