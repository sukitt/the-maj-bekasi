import React from 'react'
import ImagePlaceholder from '../base/loader/ImagePlaceholder'

const SliderPlaceholder = props => {
    const Text = props.text? props.text.replace(/\s/g, "+") : "Something when wrong".replace(/\s/g, "+")
    const defaultSrc = `https://via.placeholder.com/${props.width.replace(/px/,'')}x${props.height.replace(/px/,'')}}.png?text=${Text}`
    return (
        <ImagePlaceholder
            src={(props.width === "auto") ||( props.width === "100%")? props.src: defaultSrc }
            opacity=".6"
            {...props}
        />
    )
}

export default SliderPlaceholder
