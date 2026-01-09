import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/experience">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link href="/project">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
