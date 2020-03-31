import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Img1 from '../../../assets/fasilitas/zenGarden.svg'
import Img2 from '../../../assets/fasilitas/2.svg'
import Img3 from '../../../assets/fasilitas/3.svg'
import Img4 from '../../../assets/fasilitas/4.svg'
import Img5 from '../../../assets/fasilitas/5.svg'
import Img6 from '../../../assets/fasilitas/6.svg'
import Img7 from '../../../assets/fasilitas/7.svg'
import Img8 from '../../../assets/fasilitas/8.svg'
import Img9 from '../../../assets/fasilitas/9.svg'
import Img10 from '../../../assets/fasilitas/10.svg'
import Img11 from '../../../assets/fasilitas/11.svg'
import Img12 from '../../../assets/fasilitas/12.svg'
import Img13 from '../../../assets/fasilitas/13.svg'
import Img14 from '../../../assets/fasilitas/14.svg'
import Img15 from '../../../assets/fasilitas/15.svg'
import styled from 'styled-components'


class MobileFasilitas extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			Show: false,
			Data: [
				{ id: 1, img: Img1, caption: 'Zen Garden' },
				{ id: 2, img: Img2, caption: 'Ridesharing Shelter' },
				{ id: 3, img: Img3, caption: 'Co-working Space' },
				{ id: 4, img: Img4, caption: 'Parcel Lockers' },
				{ id: 5, img: Img5, caption: 'Storage Room' },
				{ id: 6, img: Img6, caption: 'Game Room' },
				{ id: 7, img: Img7, caption: 'Olympic-size Swimming Pool' },
				{ id: 8, img: Img8, caption: 'One-stop Logistic Centers' },
				{ id: 9, img: Img9, caption: 'Sky Lounge' },
				{ id: 10, img: Img10, caption: 'O2O Kiosks' },
				{ id: 11, img: Img11, caption: 'Gym' },
				{ id: 12, img: Img12, caption: 'Smart Access' },
				{ id: 13, img: Img13, caption: 'Outdoor Communal Space' },
				{ id: 14, img: Img14, caption: 'Jogging Track' },
				{ id: 15, img: Img15, caption: 'Security' }
			]
		}
		this.showMore = this.showMore.bind(this);
	}
	showMore() {
		this.state.Show ? (
			this.setState({ Show: false, expanded: false })
		) : (
				this.setState({ Show: true, expanded: true })
			)
	}
	render() {
		return (
			<D id={this.props.id} ref={this.props.fasilitasRef}>
				<h5>fasilitas</h5>
				<h1>Untuk Work-Life Balance Yang Lebih Baik</h1>
				<Row style={{ marginTop: 50 }} className={this.state.expanded ? "h-show mx-0" : "h-hide mx-0"}>
					{this.state.Data.slice(0, 4).map((d, i) => {
						return (
							<Col xs="6" style={{ marginBottom: 24 }} key={d.id}>
								<Row key={d.id}>
									<Content className="my-auto" xs={4}>
										<Icon src={d.img} alt={d.caption.replace(" ", "-")} />
									</Content>
									<Caption className="pr-1" xs>{d.caption}</Caption>
								</Row>
							</Col>
						)
					})}

					{this.state.Data.slice(5, this.state.Data.length).map((d, i) => {
						return (
							<Col xs="6" style={{ marginBottom: 24 }} className={this.state.expanded ? "show" : "hide"} key={d.id}>
								<Row >
									<Content className="my-auto" xs={4}>
										<Icon src={d.img} alt={d.caption.replace(" ", "-")} />
									</Content>
									<Caption className="pr-1" xs><span>{d.caption}</span></Caption>
								</Row>
							</Col>
						)
					})}
				</Row>
				<Button onClick={this.showMore}>
					{this.state.expanded ? (
						<>Lebih Sedikit</>
					) : (
							<>Lebih Banyak</>
						)}
				</Button>
			</D>
		)
	}
}

const H5 = styled.h5`
	font-style: normal;
	font-weight: bold;
	font-size: 11px;
	line-height: 13px;
	text-transform: uppercase;
	color: #000000;
`;

const D = styled.div({
	margin: "23px 0",
	padding: "0px 15px",
	display: 'flex',
	flexDirection: 'column'
});

const P = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 18px;
	text-align: justify;
	color: #000000;
`;

const Button = styled.button`
	margin:auto;
	border: 2px solid #CC9980;
	background-color: transparent;
	box-sizing: border-box;
	width:160px;
	height:40px;
	padding:11px;

	font-style: normal;
	font-weight: bold;
	font-size: 11px;
	line-height: 18px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #CC9980;
`;
const Content = styled(Col)`
	padding:0;
	max-width:40px;
`;
const Icon = styled.img`
	width:40px;
	height:40px;
`;
const Caption = styled(Col)`
	margin: auto auto auto 10px;
	padding:0px;
	font-family: Proxima Nova;
	font-style: normal;
	font-weight: bold;
	font-size: 11px;
	line-height: 13px;
	text-transform: uppercase;
`;

export default MobileFasilitas
