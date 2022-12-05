import Link from "next/link";
import Image from "next/image";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top is-spaced has-shadow">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">
                    <Image src="/images/logo.svg" height="200" width="200" />
                </Link>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <Link href="/" className="navbar-item">
                        Home
                    </Link>
                    <Link href="/" className="navbar-item">
                        Coins
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
