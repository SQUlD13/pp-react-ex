import React from 'react'
import Desc from './common/Desc'

export default function Feature(props) {
    console.log("file: Feature.jsx - line 8 - Feature - props.src", props.src)
    return (
        <div className="feature">
            <div className="content">
                <img src={props.src} className="feature-img" />
                <Desc desc={props.desc} title={props.title} />
            </div>
        </div>
    )
}
