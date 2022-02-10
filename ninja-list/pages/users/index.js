import Head from 'next/head'
import Style from '../../styles/Users.module.css';
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Index = ({ users }) => {
    return (
        <>
            <Head>
                <title>Aushomapto | Users</title>
            </Head>
            <div className={Style.center}>
                <h1>User List </h1>
                {
                    users.map(user => (
                        <Link href={'/users/' + user.id} key={user.id} >
                            <p className={Style.name}>{user.name}</p>
                        </Link>
                    )
                    )
                }
            </div>
        </>
    );
}

export default Index;