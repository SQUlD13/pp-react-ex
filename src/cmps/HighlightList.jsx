import React from 'react'
import HighlightPreview from './HighlightPreview'

export default function HighlightList(props) {
    return (
        <ul className="highlight-list clean-list">
            {props.list.map(highlight => {
                return <HighlightPreview highlight={highlight} ></HighlightPreview>
            })}
        </ul>
    )
}
