import { useState } from 'react';
import Header from './components/Header.jsx';
import LeftNav from './components/LeftNav.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import { menuItems } from './data/navigation.js';
import ArticlesPage from './pages/ArticlesPage.jsx';
import FriendsPage from './pages/FriendsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './styles/App.css';

function App() {
    const [activePage, setActivePage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuClick = (page) => {
        if (page) {
            setActivePage(page);
            setIsMobileMenuOpen(false);
        }
    };

    const renderPage = () => {
        if (activePage === 'articles') {
            return <ArticlesPage />;
        }

        if (activePage === 'friends') {
            return <FriendsPage />;
        }

        return <HomePage />;
    };

    return (
        <div className="college-page">
            <Header
                activePage={activePage}
                isMobileMenuOpen={isMobileMenuOpen}
                menuItems={menuItems}
                onMenuToggle={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                onNavigate={handleMenuClick}
            />

            <div className="page-shell">
                <LeftNav activePage={activePage} menuItems={menuItems} onNavigate={handleMenuClick} />
                <main className="content-card">{renderPage()}</main>
                <RightSidebar />
            </div>

            <ScrollTopButton />
        </div>
    );
}

export default App;
