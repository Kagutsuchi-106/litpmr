import './ScrollTopButton.css';

function ScrollTopButton() {
    return (
        <button
            className="scroll-top-button"
            type="button"
            aria-label="Наверх"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            ↑
        </button>
    );
}

export default ScrollTopButton;
