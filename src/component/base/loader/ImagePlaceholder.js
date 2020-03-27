import React from 'react'
import BackgroundImage from './BackgroundImage'
import PropTypes from 'prop-types'


export const SliderPlaceholder = props => {
    const Text = props.text? props.text.replace(/\s/g, "+") : "Something+when+wrong"
    const defaultSrc = `https://via.placeholder.com/${props.width.replace(/px/,'')}x${props.height.replace(/px/,'')}}.png?text=${Text}`
    return (
        <BackgroundImage
            src={(props.width === "auto") ||( props.width === "100%")? props.src: defaultSrc }
            opacity=".6"
            {...props}
        />
    )
}

SliderPlaceholder.propTypes = {
    src: PropTypes.string.isRequired,
    opacity: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
}


export const BlogPlaceholder = props => {
    const Text = props.text? props.text.replace(/\s/g, "+") : "Something+when+wrong"
    const defaultSrc = `https://via.placeholder.com/${props.width.replace(/px/,'')}x${props.height.replace(/px/,'')}}.png?text=${Text}`
    return (
        <BackgroundImage
            src={props.src? props.src: defaultSrc}
            opacity={props.src? "1": ".6"}
            {...props}
        />
    )
}

export const MapPlaceholder = props => {
    const { text, width, height, src } = props 
    const Text = text? text.replace(/\s/g, "+") : "Google+Map+not+loaded"
    const Width = width? width.replace("px", ""): "980"
    const Height = height? height.replace("px", ""): "500"
    const defaultSrc = `https://via.placeholder.com/${Width}x${Height}.png?text=${Text}`
    return (
        <BackgroundImage
            src={src? src: defaultSrc}
            opacity={src? "1": ".6"}
            {...props}
        />
    )
}

