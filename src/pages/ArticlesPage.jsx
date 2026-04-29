import ArticleCard from '../components/ArticleCard.jsx';
import { articlesData } from '../data/articles/index.js';
import './ArticlesPage.css';

function ArticlesPage() {
    return (
        <section className="articles-page">
            <div className="catalog-topline">{articlesData.breadcrumbs.join(' » ')}</div>

            <div className="section-heading catalog-heading">
                <span>Каталог</span>
                <h2>Статьи</h2>
            </div>

            <div className="catalog-stats">
                <span>Всего материалов в каталоге: {articlesData.total}</span>
                <span>Показано материалов: {articlesData.shown}</span>
            </div>

            <div className="articles-list">
                {articlesData.items.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </div>
        </section>
    );
}

export default ArticlesPage;
