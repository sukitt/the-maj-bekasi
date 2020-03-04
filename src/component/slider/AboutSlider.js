import React from 'react'
import Slider from "react-slick"
import Img1 from '../assets/about-image/1.svg'
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

const AboutSlider = props => {
    return (
        <div style={{
            marginTop: 300,
            padding: '0 30px'
        }}>
            <Slider {...settings}>
                {console.log(Data)}
                {Data && Data.map((d, i) => (
                    <div key={d.id} style={{display: 'flex'}}>
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            padding: 20,
                            position: 'absolute',
                            top: '20%',
                            boxSizing: 'border-box',
                            width: 475,
                            height: 230,
                            zIndex: 2
                        }}>
                            <div>
                                <h2 style={{
                                    fontFamily: 'Barlow Condensed',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    color: '#000000'
                                }}>
                                    {d.title}
                                </h2>
                                <p style={{
                                    fontFamily: 'Nunito Sans',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: 16,
                                    maxWidth: 350,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {d.description}
                                </p>
                                <a 
                                    href="#linkTo" 
                                    style={{
                                        textTransform: 'uppercase', 
                                        color: 'rgba(0, 0, 0, 0.75)'
                                    }}>
                                Read More ></a>
                            </div>
                            <p style={{
                                color: '#FFFFFF',
                                marginLeft: '95%',
                                marginTop: '10%',
                                width: 50,
                                textAlign: 'center',
                            }}>
                                {i+1} / {Data.length}
                            </p>
                        </div>
                        <div style={{
                            display: 'inline-block',
                            width: 'auto',
                            float: 'right',
                            marginBottom: 5
                        }}>
                            <img src={d.img} style={{width: 636, height: 422}} alt="img-1" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <div style={{margin: '0 0 0 470px'}}><ul>{dots}</ul></div>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    const Arrows = styled.div({
        background:"#FFFFFF",
        boxShadow: '0px 20px 60px rgba(138, 149, 158, 0.2)',
        borderRadius: 36,
        display: "inline-block",
        marginRight: '-48px',
        width:"32px",
        height:"32px",
        color: "#000000",
        textDecoration: "none",
        padding: "30px",
        '&:hover': {
            background:"#232323",
            color: "#FFFFFF"
        },
        '&:before': {
            padding: "8px",
            borderRight: "4px solid",
            borderBottom: "4px solid",
            borderRadius: "4px",
            content: `'' !important`,
            display: "block",
            top: "35%",
            left: "30%",
            position: "absolute",
            '-moz-transform': "rotate(310deg)",
            '-o-transform': "rotate(310deg)",
            '-webkit-transform': "rotate(310deg)",
            transform: "rotate(310deg)",
            color:"inherit"
        }
    });
    return (
      <Arrows
        className={className}
        style={{ 
          ...style,
        }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    const Arrows = styled.div({
        background:"#FFFFFF",
        boxShadow: '0px 20px 60px rgba(138, 149, 158, 0.2)',
        borderRadius: 36,
        color: '#000000',
        display: "inline-block",
        marginLeft: '-48px',
        width:"32px",
        height:"32px",
        textDecoration: "none",
        padding: "30px",
        zIndex:"1",
        '&:hover': {
            background:"#232323",
            color: "#FFFFFF"
        },
        '&:before': {
            borderRight: "4px solid",
            borderBottom: "4px solid",
            borderRadius: "4px",
            content: `'' !important`,
            display: "block",
            padding: "8px",
            top: "35%",
            left: "35%",
            position: "absolute",
            '-moz-transform': "rotate(135deg)",
            '-o-transform': "rotate(135deg)",
            '-webkit-transform': "rotate(135deg)",
            transform: "rotate(135deg)",
            color:"inherit"
        }
    });
    return (
      <Arrows
        className={className}
        style={{ 
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

export default AboutSlider
