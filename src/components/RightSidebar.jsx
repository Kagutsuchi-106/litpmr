import { usefulLinks } from '../data/usefulLinks.js';
import './RightSidebar.css';

function RightSidebar() {
    return (
        <aside className="right-sidebar" aria-label="Дополнительная информация">
            <section className="links-widget">
                <h2>Полезные ссылки</h2>
                {usefulLinks.map(([title, url]) => (
                    <a href={url} key={title}>
                        {title}
                    </a>
                ))}
            </section>
        </aside>
    );
}

export default RightSidebar;
