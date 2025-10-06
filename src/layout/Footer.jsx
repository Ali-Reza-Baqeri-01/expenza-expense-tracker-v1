
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="nav__logo">
                    <i className="nav__icon ri-money-euro-circle-fill"></i>
                    <h1 className="nav__text">
                        Expenza
                    </h1>
                </div>

                <h4 className="footer__author">
                    Designed and developed by

                    <a target="_blank" href="https://github.com/Ali-Reza-Baqeri-01" className="footer__link">
                        Ali-Reza-Baqeri
                    </a>
                </h4>


                <small className="footer__copy">
                    © 2025 Expenza
                </small>
            </div>
        </footer>
    )
}
