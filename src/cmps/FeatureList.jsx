import React from 'react'
import Feature from './Feature.jsx'

import enjoyablePlace from '../assets/imgs/homepage/enjoyable-place-desktop.jpg'
import locallySourced from '../assets/imgs/homepage/locally-sourced-desktop.jpg'

export default function Features() {
    return (
        <section className="features">
            <div className="container">
                <Feature src={enjoyablePlace}
                    desc="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
                    title="Enjoyable place for all the family"
                />
                <Feature src={locallySourced}
                    desc="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
                    title="The most locally sourced food"
                />
            </div>
        </section >
    )
}
