import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={140} height={77} />
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/ninjas">Ninja List</Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;