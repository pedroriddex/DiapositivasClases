/* SLIDES
* Imports
*/
import { useEffect } from 'react'

// Component

function Slides({ data, slideID, onSlideChange, isExiting }) {

    const SlideActual = data.find(slide => slide.id === slideID)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Prism) {
            window.Prism.highlightAll()
        }
    }, [slideID])

    const handleLinkClick = (event) => {
        event.preventDefault()
        const nextID = event.target.getAttribute('data-nextid') || event.currentTarget.getAttribute('data-nextid')
        onSlideChange(nextID)
    }

    const hasLinks = Array.isArray(SlideActual.contentLinks) && SlideActual.contentLinks.length > 0;

    // Verificar si SlideActual existe
    if (!SlideActual) {
        return <div>Slide no encontrada</div>
    }

    switch (SlideActual.slideTemplate) {
        case 'cover':
            return (
                <div className={`slide slide__cover ${isExiting ? 'animate-disapear' : ''}`} onClick={handleLinkClick} data-nextid={SlideActual.nextId}>
                    <img className="animate-appear animate-delay-1" src="/src/assets/media/jsLogo.svg" alt="JavaScript Logo" />
                    <h1 className="animate-appear animate-delay-2">{SlideActual.title}</h1>
                    <p className="slide__subtitle animate-appear animate-delay-3">{SlideActual.subtitle}</p>
                </div>
            );

        case 'index':
            return (
                <div className={`slide slide__index ${isExiting ? 'animate-disapear' : ''}`}>
                    <ul>
                        {SlideActual.indexLinks.map((Link, index) => {
                            return (
                                <li key={Link.id} className="animate-appear" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>

                                    <a
                                        data-nextid={Link.url}
                                        href="#"
                                        onClick={handleLinkClick}
                                    >
                                        {Link.icon && <i className={Link.icon}></i>}
                                        {Link.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        case 'text':
            return (
                <div className={`slide slide__text ${isExiting ? 'animate-disapear' : ''}`} 
                onClick={hasLinks ? undefined : handleLinkClick} data-nextid={SlideActual.nextId}>
                    <div className="content animate-appear" style={{ animationDelay: `${0.2 + 0 * 0.1}s` }}>
                        <div className="content__head">
                            {SlideActual.contentIcon && <i className={SlideActual.contentIcon}></i>}
                            <h2>{SlideActual.contentTitle}</h2>
                        </div>
                        <p>{SlideActual.contentText}</p>

                        {SlideActual.code && (
                            <div className="code-block">
                                <code>
                                    <span className={`language-${SlideActual.codeLang}`}>{SlideActual.codeLang}</span>
                                    {SlideActual.code}
                                </code>
                            </div>
                        )}

                        {SlideActual.contentLinks && SlideActual.contentLinks.length > 0 && (
                            <div className="content__links">
                                {SlideActual.contentLinks.map((Link, index) => {
                                    return (
                                        <a
                                            key={Link.id}
                                            className="animate-appear"
                                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                            data-nextid={Link.url}
                                            href="#"
                                            onClick={handleLinkClick}
                                        >
                                            {Link.icon && <i className={Link.icon}></i>}
                                            {Link.title}
                                        </a>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            );
    }

}

export default Slides;