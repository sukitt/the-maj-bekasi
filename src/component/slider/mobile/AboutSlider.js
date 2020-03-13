import React, { Component } from 'react'
import Slider from "react-slick"
import Img1 from '../../assets/about-image/1.svg'
import styled from 'styled-components';

const Data = [
    {
        id: 1,
        title: 'About Us',
        description: 'The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni.',
        img: Img1
    },
    {
        id: 2,
        title: 'About Us',
        description: 'The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni.',
        img: Img1
    },
    {
        id: 3,
        title: 'About Us',
        description: 'The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni.',
        img: Img1
    },
]

export class MobileAboutSlider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             storeAbout: Data,
             indexActive: 0,
        }
    }
    
    render() {
        return (
            <Container margin="51.87px 50px 0 50px">
                <Caps1>Tentang Kami</Caps1>

                <div style={{width: "100%", height: "auto", margin: "31px 0 0 0"}}>
                    <Slider
                        dots={false}
                        lazyLoad={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        speed={1500}
                        pauseOnHover={true}
                        beforeChange={indexActive => this.setState({indexActive})}

                    >
                        {this.state.storeAbout && this.state.storeAbout.map((data, i) => (
                            <div>
                                <img src={data.img} style={{width: "inherit", height: "inherit"}} alt={`img ${data.title}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <Content>
                    {this.state.storeAbout && this.state.storeAbout.map((data, i) => {
                        if (i === this.state.indexActive) {
                            return <P margin="30.79px 0 0 0">{data.description}</P>
                        }
                        return null
                    })}
                    <A margin="15px 0 0 0" padding="3px 3px 10px 3px" href="#">Read More</A>
                </Content>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
    })
)

const Content = styled.div(
    props => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: props.padding,
        margin: props.margin,
    })
)

const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding
    })
)

const P = styled.p(
    props => ({
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "18px",
        textAlign: "justify",
        color: "rgba(0,0,0,0.75)",
        margin: props.margin,
        padding: props.padding,
    })
)

const A = styled.a(
    props => ({
        borderBottom: "1px solid #CC9980",
        fontSize: "11px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "13px",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#CC9980",
        alignSelf: "center",
        letterSpacing: "1px",
        margin: props.margin,
        padding: props.padding,
    })
)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
}

export default MobileAboutSlider
