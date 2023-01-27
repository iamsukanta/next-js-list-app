import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      console.log('oooo')
      router.push("/")
    }, 3000)
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>This page cannot be found.</h2>
      <p>Go back to <Link href="/">Homepage</Link></p>
    </div>
  );
}
 
export default NotFound;