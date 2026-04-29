import { getPublicAssetPath } from '../utils/assetPath.js';
import './HomePage.css';

function HomePage() {
    return (
        <section className="photo-report">
            <div className="section-heading">
                <span>Фотоальбом</span>
                <h2>Встречи Союза писателей Приднестровья</h2>
            </div>

            <article className="report-item">
                <div className="article-meta">26 июня 2015 г. · Дворец республики, г. Тирасполь</div>
                <h3>Творческая встреча с редакторами журнала "Юность"</h3>
                <img
                    src={getPublicAssetPath('writers-meeting-2015.png')}
                    alt="Творческая встреча членов Союза писателей"
                />
                <p>
                    Творческая встреча членов Союза писателей Приднестровья с главными редакторами московского журнала
                    "Юность" Валерием Дударевым.
                </p>
                <span className="photo-credit">Фото Петра Жекова</span>
            </article>

            <article className="report-item">
                <div className="article-meta">30 мая 2014 г. · Дворец республики, г. Тирасполь</div>
                <h3>Подготовка празднования 25-летия Республики</h3>
                <img
                    src={getPublicAssetPath('writers-group-2014.png')}
                    alt="Встреча творческой группы Союза писателей"
                />
                <p>
                    Встреча творческой группы Союза писателей Приднестровья с начальником Государственной службы по
                    культуре ПМР Марией Андреевной Кырмыз.
                </p>
                <span className="photo-credit">Фото Игоря Сметанникова</span>
            </article>
        </section>
    );
}

export default HomePage;
