import React from 'react'
import Flourish from '../assets/imgs/patterns/pattern-divide.svg'

export default function highlightPreview(props) {
    const { highlight } = props
    return (
        <div className="highlight-preview">
            <div className="highlight-img">
                <img src={highlight.imgUrl} />
                <img src={Flourish} className="flourish" />
            </div>
            <div className="content">
                <h1>{highlight.title}</h1>
                <p>{highlight.desc}</p>
            </div>
        </ div>
    )
}
