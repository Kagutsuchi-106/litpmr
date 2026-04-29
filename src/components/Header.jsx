import SearchForm from './SearchForm.jsx';
import Navigation from './Navigation.jsx';
import { getPublicAssetPath } from '../utils/assetPath.js';
import './Header.css';

function Header({ activePage, isMobileMenuOpen, menuItems, onMenuToggle, onNavigate }) {
    return (
        <header className="site-header">
            <picture>
                <source media="(max-width: 700px)" srcSet={getPublicAssetPath('spp-logo-mobile.png')} />
                <img
                    className="header-logo"
                    src={getPublicAssetPath('spp-header.png')}
                    alt="Союз писателей Приднестровья"
                />
            </picture>

            <div className="header-actions">
                <div className="header-tools">
                    <SearchForm />
                    <button className="login-button" type="button">
                        Вход
                    </button>
                </div>
            </div>

            <button
                className="burger-button"
                type="button"
                aria-label="Открыть меню"
                aria-expanded={isMobileMenuOpen}
                onClick={onMenuToggle}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
                <SearchForm className="mobile-search-form" />

                <button className="mobile-login-button" type="button">
                    Вход
                </button>

                <nav className="mobile-nav" aria-label="Мобильная навигация">
                    <Navigation
                        activePage={activePage}
                        itemClassName="mobile-nav-link"
                        items={menuItems}
                        onNavigate={onNavigate}
                    />
                </nav>
            </div>
        </header>
    );
}

export default Header;
