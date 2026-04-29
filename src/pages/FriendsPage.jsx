import { friendLinks } from '../data/friends.js';
import './FriendsPage.css';

function FriendsPage() {
    return (
        <section className="friends-page">
            <div className="section-heading">
                <span>Навигация</span>
                <h2>Друзья сайта</h2>
            </div>

            <div className="friends-list">
                {friendLinks.map(([title, url]) => (
                    <a className="friend-link" href={url} key={url} target="_blank" rel="noreferrer">
                        <span>{title}</span>
                        <small>{url}</small>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default FriendsPage;
