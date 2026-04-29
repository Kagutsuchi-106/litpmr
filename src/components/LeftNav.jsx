import Navigation from './Navigation.jsx';
import './LeftNav.css';

function LeftNav({ activePage, menuItems, onNavigate }) {
    return (
        <aside className="left-nav" aria-label="Основная навигация">
            <Navigation
                activePage={activePage}
                itemClassName="nav-link"
                items={menuItems}
                onNavigate={onNavigate}
            />
        </aside>
    );
}

export default LeftNav;
