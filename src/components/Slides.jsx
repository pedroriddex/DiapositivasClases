/* SLIDES
* Imports
*/

// Component

function Slides({data}) {
    // data is an array, so we need to access the first slide
    const SlideActual = data[0]
    switch (SlideActual.slideTemplate) {
        case 'index':
            return (
                <div className="slide__index">
                    {SlideActual.title && <h1>{SlideActual.title}</h1>}
                    <ul>
                        {SlideActual.indexLinks.map((Link) => {
                            return (
                                <li key={Link.id}><a href={Link.url}>{Link.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            );
    }
}

export default Slides;