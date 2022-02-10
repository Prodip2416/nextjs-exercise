import Link from 'next/link';
import Styles from '../styles/NotFound.module.css';
import { useEffect } from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },5000);
    },[]);

    return ( 
        <div className={Styles.notFound}>
            <h1>Oooooooops</h1>
            <h3>That page can't found.</h3>
            <p>Go back to the <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;