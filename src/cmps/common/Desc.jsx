import React from 'react'
import Flourish from '../../assets/imgs/patterns/pattern-divide.svg'

export default function Desc(props) {
    return (
        <section className="description">
            <div className="container">
                <img src={Flourish} alt="" className="flourish" />
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </section>
    )
}
