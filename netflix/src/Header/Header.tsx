import "./Header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-tabs">
                <img src="Netflix.png" alt="netflix" />
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#abc">TV Shows</a></li>
                    <li><a href="#abc">Movies</a></li>
                    <li><a href="#abc">Recently Added</a></li>
                    <li><a href="#abc">My List</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;