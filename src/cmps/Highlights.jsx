import React from 'react'
import Desc from './common/Desc'
import HighlightList from './HighlightList.jsx'

import MenuItem1 from '../assets/imgs/homepage/menu-items/menu-item1.jpg'
import MenuItem2 from '../assets/imgs/homepage/menu-items/menu-item2.jpg'
import MenuItem3 from '../assets/imgs/homepage/menu-items/menu-item3.jpg'

export default function Highlights() {
    const highlights = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: MenuItem1
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: MenuItem2
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: MenuItem3
        }
    ]
    return (
        <section className="highlights">
            <div className="container">
                <div className="content">
                    <Desc
                        title="A few highlights from our menu"
                        desc="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
                    />
                    <HighlightList list={highlights} />
                </div>
            </div>
        </section>
    )
}
