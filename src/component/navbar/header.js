import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="nav-main-wrapper">
          <div className="nav-sub-wrappper">
            <div className="nav-item-wrapper">
            <Link href={'/'} className="nav-item">Home</Link>
            <Link href={'/about'} className="nav-item">About Us</Link>
            <Link href={'/'} className="nav-item">Product</Link>
            <Link href={'/'} className="nav-item">Contact</Link>
            </div>
            
          </div>
      </nav>
    );
  }
  