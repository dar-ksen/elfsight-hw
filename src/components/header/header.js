import './header.css'

const Header = ({title, count =  0, pages = 0}) => {
    return (
        <header className="mb-5">
            <div className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">
                        {title}
                    </a>
                    <div className="navbar-info">
                        <span className="navbar-brand">
                            pages: {pages}
                        </span>
                        <span className="navbar-brand">
                            count: {count}
                        </span>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;