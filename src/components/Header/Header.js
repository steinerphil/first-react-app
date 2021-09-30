import './Header.css';

function Header(props) {
    return (
        <header>
            <div className="header">
                <h1>{props.title}</h1>
                <hr/>
            </div>
        </header>
);
}

export default Header;