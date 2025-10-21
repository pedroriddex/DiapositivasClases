/* SLIDES
* Imports
*/

// Component

function Slides({data, slideID, onSlideChange}) {
    
    const SlideActual = data.find(slide => slide.id === slideID)
    
    const handleLinkClick = (event) => {
        event.preventDefault()
        const nextID = event.target.getAttribute('data-nextID')
        onSlideChange(nextID)
    }
    
    switch (SlideActual.slideTemplate) {
        case 'index':
            return (
                <div className="slide__index">
                    {SlideActual.title && <h1>{SlideActual.title}</h1>}
                    <ul>
                        {SlideActual.indexLinks.map((Link) => {
                            return (
                                <li key={Link.id}>
                                    <a 
                                        data-nextID={Link.url} 
                                        href="#" 
                                        onClick={handleLinkClick}
                                    >
                                        {Link.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
    }
}

export default Slides;