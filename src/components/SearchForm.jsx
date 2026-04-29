import './SearchForm.css';

function SearchForm({ className = 'search-form' }) {
    return (
        <form className={className} action="#">
            <input type="search" placeholder="Поиск по сайту" aria-label="Поиск по сайту" />
            <button type="submit" aria-label="Найти">
                <span aria-hidden="true">⌕</span>
            </button>
        </form>
    );
}

export default SearchForm;
