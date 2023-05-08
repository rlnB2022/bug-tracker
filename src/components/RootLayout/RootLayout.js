import './RootLayout.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const RootLayout = () => {
    return (
        <div className="root-layout">
            <Header />
            <Outlet />
            <MobileNavigation />
        </div>
    )
};

export default RootLayout;