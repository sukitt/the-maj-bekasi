import React, {Component} from 'react'
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
	constructor(props){
		super(props)
		this.state = {
			expanded: false,
			itemsToShow: 4,
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
			this.state.itemsToShow === 4 ? (
				this.setState({itemsToShow:this.state.Data.length, expanded:true})
			) : (
				this.setState({itemsToShow:4, expanded:false})
			)
		}
	render(){
		return (
				<D>
					<H4 className="text-center">fasilitas</H4>
					<P>
						Fasilitas yang lengkap dan modern
						membantumu memulai langkah pertama
						menggapai anganmu.
					</P>
					<Row style={{marginTop:40}}>
						{this.state.Data.slice(0, this.state.itemsToShow).map((d, i) => {
							return (
								<Col xs="6" style={{marginBottom:24}} key={d.id}>
										<Row >
											<Col xs="3">
												<img src={d.img} style={{maxWidth: '40px', alignSelf:'center'}} alt={d.caption.replace(" ", "-")} />
											</Col>
											<Col style={{margin:"auto 8px", paddingRight:"0px"}}>
												<H5>{d.caption}</H5>
											</Col>
										</Row>
								</Col>
							)
						})}
					</Row>
					<Button onClick={this.showMore}>
						{this.state.expanded? (
							<>View Less</>
						) : (
							<>View More</>
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
	margin: "50px 0",
	padding: "0px 15px",
	// width: 936,
	// height: 312
	display: 'flex',
	flexDirection: 'column'
});

const H4 = styled.h4`
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	text-transform: uppercase;
	color: #000000;
`;

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
	padding:11px 30px;

	font-style: normal;
	font-weight: bold;
	font-size: 11px;
	line-height: 18px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #CC9980;
`;

export default MobileFasilitas
