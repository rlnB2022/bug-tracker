import './header.css';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';

const Header = () => {
    const title = useSelector(state => state.activeScreen);

    return (
        <div className="header-container">
            <h1>{title}</h1>
            {/* <Menu /> */}
        </div>
    )
};

export default Header;