import { getPublicAssetPath } from '../utils/assetPath.js';
import './ArticleCard.css';

function ArticleCard({ article }) {
    return (
        <article className="catalog-article">
            {article.image && (
                <img className="catalog-article-image" src={getPublicAssetPath(article.image)} alt={article.title} />
            )}

            <div className="catalog-article-body">
                <h3>{article.title}</h3>
                {article.author && <div className="catalog-author">{article.author}</div>}

                {article.excerpt.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="catalog-meta">
                    <span>{article.category}</span>
                    <span>Просмотров: {article.views}</span>
                    <span>Добавил: {article.addedBy}</span>
                    <span>Дата: {article.date}</span>
                    <span>Комментарии ({article.comments})</span>
                </div>
            </div>
        </article>
    );
}

export default ArticleCard;
