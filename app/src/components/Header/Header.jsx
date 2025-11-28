// src/components/Header/Header.jsx

import './Header.css';

const Header = () => {
    // URL d'une vidéo libre de droits (parfum/luxe)
    const videoUrl = "https://cdn.pixabay.com/video/2024/08/01/224038_large.mp4";

    return (
        <header className="header">
            <video className="header__video" autoPlay muted loop src={videoUrl}></video>
            <div className='header__overlay'></div>
            <div className='header__content'>
                <h1>Olfascentia</h1>
                <p>Votre guide intelligent dans l'univers du parfum</p>
            </div>

        </header>
    );
};

export default Header;