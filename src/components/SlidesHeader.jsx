function SlidesHeader({ data, slideID, onSlideChange }) {

    const SlideActual = data.find(slide => slide.id === slideID)
    const handleLinkClick = (event) => {
        event.preventDefault()
        const nextID = event.target.getAttribute('data-nextid') || event.currentTarget.getAttribute('data-nextid')
        onSlideChange(nextID)
    }
    return (
        <header className="header animate-appear animate-delay-1">
            <div className="link--go-back">
                <a 
                    data-nextid={0} 
                    href="#" 
                    onClick={handleLinkClick}
                >
                    <i class="ri-arrow-left-line"></i>
                    Volver a la portada
                </a>
            </div>
            <h1 className="header__title">{SlideActual.title}</h1>
            <div className="header__logo">
                <img src="/src/assets/media/jsLogo.svg" alt="JavaScript Logo" />
            </div>
        </header>
    )
}

export default SlidesHeader