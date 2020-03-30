import React, { useState, useEffect, Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'

import './assets/css/style.css'
import GaleriGambarLoading from './assets/galeri-placeholder.svg'
// import nextIcon from '../../assets/next.svg'
import LoaderSpinner from '../base/loader/LoaderSpinner'
import { SliderPlaceholder } from '../base/loader/ImagePlaceholder'
import { Row, Col } from 'react-bootstrap'

const Img = styled.img({
	margin: "0px auto",
	width: "100%"
})

export class Gallery extends Component {
	constructor(props) {
		super(props)

		this.state = {
			localStore: [],
			isLoading: true,
			indexActive: 0,
		}
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext()
	}
	previous() {
		this.slider.slickPrev()
	}
	
	returnNotNull(value) {
		return (value == null) ? " " : value
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.store.length !== prevState.localStore.length) {
			return {
				localStore: nextProps.store,
				isLoading: false,
			}
		}
	}

	render() {
		const settings = {
			className: "center",
			centerMode: true,
			centerPadding: "250px", //see inside style.css
			slidesToShow: 1,
			infinite: true,
			speed: 1500,
			arrows:false,
		};

		if (this.state.isLoading) {
			let GaleriLoading = (args) => { let arry = new Array(); for (let i = 0; i < args; i++) { arry.push({ id: i, gambar: GaleriGambarLoading, nama: "loading" }) }; return arry }
			return (
				<Container id={this.props.id} ref={this.props.galeriRef} padding="36px 0px 34px 0px" margin="227px auto">
					<H2>Galeri</H2>
					<Slider {...settings}
						dots={false}
						afterChange={(index) => this.setState({ indexActive: index })}
					>
						{GaleriLoading(3).map((item, i) => {
							return (
								<div key={i}>
									<SliderPlaceholder src={item.gambar} width="759.24px" height="531.46px" color="#CC9980" opacity=".6" alt={item.nama} />
								</div>
							)
						}
						)}
					</Slider>
					<div style={{ textAlign: "center" }}>
						<p style={{ fontSize: "14px", lineHeight: "16px", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "30px", fontWeight: "bold" }}>
							Loading
            </p>
					</div>
				</Container>
			)
		}

		return (
			<>
				<Container id={this.props.id} ref={this.props.galeriRef} padding="36px 0px 34px 0px" margin="227px auto">
					<H2>Galeri</H2>
					<Slider ref={c => (this.slider = c)} {...settings}
						dots={false}
						afterChange={(index) => this.setState({ indexActive: index })}
					>
						{this.state.localStore.length && this.state.localStore.map((item, i) => {
							return (
								<div key={i} className="tes">
									<Img src={BaseUrl + '/storage/' + item.gambar} alt={item.nama} />
								</div>
							)
						}
						)}
					</Slider>

					{this.state.localStore.length && this.state.localStore.map((item, i) => {
						if (i === this.state.indexActive) {
							return (
								<>
									<Row className="justify-content-center w-100">
										<Col md={1} className="text-center">
											<Buttons onClick={this.previous}><i className="fa fa-chevron-left"></i></Buttons>
										</Col>
										<Col md={4} className="text-center">
											<p style={{ fontSize: "14px", lineHeight: "16px", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "30px", fontWeight: "bold" }}>
												{item.nama}
												{item.unit ? " - " + item.unit.unit_name : " "}
											</p>
											<p style={{ fontSize: "14px", lineHeight: "16px", color: "#FFFFFF" }}> {i + 1} | {this.state.localStore.length} </p>
										</Col>
										<Col md={1} className="text-center">
											<Buttons onClick={this.next}><i className="fa fa-chevron-right"></i></Buttons>
										</Col>
									</Row>
								</>
							)
						}
					})}
				</Container>
			</>
		)
	}
}

const Container = styled.div(
	props => ({
		background: "#12284C",
		margin: props.margin,
		padding: props.padding,
		height: "auto",
	})
)
const Buttons = styled.button(
	props=>({
		display: "inline-block",
		transition: ".3s all",
		width: "40px",
		height: "40px",
		background: "none",
		color: "#fff",
		textDecoration: "none",
		borderRadius: "50%",
		'&:hover': {
			background: "#cc9980",
			color: "#000"
		},
		'&:focus': {
			outline:"none",
		},
		
	})
)

const H2 = styled.h2(
	props => ({
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "22px",
		lineHeight: "28px",
		color: "#FFFFFF",
		margin: props.margin,
		padding: props.padding,
		textAlign: "center",
	})
)
export default Gallery