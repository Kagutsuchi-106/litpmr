function Navigation({ activePage, itemClassName, items, onNavigate }) {
    return items.map((item) => (
        <button
            className={item.page === activePage ? `${itemClassName} active` : itemClassName}
            key={item.title}
            onClick={() => onNavigate(item.page)}
            type="button"
        >
            <span>{item.title}</span>
        </button>
    ));
}

export default Navigation;
