

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer p-10 text-white max-w-7xl mx-auto">
                <nav>
                    <header className="footer-title">Support</header>
                    <p>Mirpur-1, Dhaka-1216, Bangladesh</p>
                    <p className="mt-5">example@etech.com</p>
                    <p>(+880) 01300000000</p>
                </nav>
                <nav>
                    <header className="footer-title">Account</header>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Shop</a>
                </nav>
                <nav>
                    <header className="footer-title flex">Quick Link</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;