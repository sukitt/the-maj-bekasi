import React, { Component } from 'react'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import DropdownCicilan from './DropdownCicilan'
import DropdownKredit from './DropdownKredit'
import DropdownBunga from './DropdownBunga'
import TabGallery from '../slider/TabGallery'
import { BaseUrl } from '../../services/axios'

import './assets/style.css'

class DenahUnit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cicilan: 0,
			kredit: 0,
			bunga: 0,
		}
	}

	render() {
		const { store, errors } = this.props
		if (Object.keys(errors).length) {
			return (
				<div>
					<h4>Error in HeaderSlider.js</h4>
					<p>{errors.code}</p>
					<p>{errors.status}</p>
				</div>
			)
		} else {
			console.log(store);
			return (
				<>
					<div
						style={{
							marginTop: 108
						}}
						className="container" id="denahUnit">
						<div className="container-2 p-0"><h2>Denah Unit</h2></div>
						<Tabs
							style={{ marginTop: 40 }}
							defaultActiveKey="studio-a"
							id="table">

							{store && store.map((item, i) => (
								<Tab
									style={{ padding: "75px 60px", backgroundColor: "#e9e9e9" }}
									key={item.id}
									eventKey={item.unit_name.toLowerCase().replace(" ", "-")}
									title={item.unit_name}>
									<div id="spec">
										<Tabs
											defaultActiveKey={Object.keys(store[i])[5]}>
											<Tab
												eventKey={Object.keys(store[i])[5]}
												title="SPESIFIKASI">
												<Row
													id="#data"
													style={{ marginTop: 68 }}>
													<Col sm={6}>
														<div >
															<h1 style={{color:"#C3C7D1", margin:0}}>{item.unit_name}</h1>
															<h5 style={{fontSize:16}}>{item.specs.luas} M <sup>2</sup></h5>
														</div>
														<p style={{fontWeight:"normal", margin:"69px 0px"}}>
															{item.specs.deskripsi}
														</p>
														<Row>
															<Col>
																<ul>
																	<li>Kamar Tidur : {item.specs.kamar_tidur}</li>
																	<li>Kamar Mandi : {item.specs.kamar_mandi}</li>
																	<li>Tempat Meja Makan</li>
																	<li>Tempat Lemari Baju Makan</li>
																</ul>
															</Col>
															<Col>
																<ul>
																	<li>Dapur : {item.specs.dapur}</li>
																	<li>Tempat TV, Sofa dan Meja</li>
																	<li>Tempat Kompor dan Wastafel</li>
																	<li>Balkon</li>
																</ul>
															</Col>
														</Row>
													</Col>
													<Col xs={3}>
														<img style={{ maxWidth: "200px", marginTop:"100px" }} src={BaseUrl + '/storage/' + item.specs.denah_ruang} alt={'denah ruang' + item.specs.unit_name} />
													</Col>
													<Col xs={3}>
														<img style={{ maxWidth: "200px", marginTop:"100px" }} src={BaseUrl + '/storage/' + item.specs.denah_bangunan} alt={'denah bangunan' + item.specs.unit_name} />
													</Col>
												</Row>
											</Tab>
											<Tab
												eventKey={Object.keys(store[i])[6]}
												title="GALERI">
												<TabGallery images={item.gallery} />
											</Tab>
										</Tabs>
									</div>
								</Tab>
							))}
						</Tabs>
					</div>
					<div
						style={{
							backgroundColor: '#12284C',
							boxSizing: 'border-box',
							padding: 59,
							border: '1px solid',
							marginTop: 175,
							height: 520
						}}>
						<h2 style={{
							color: '#FFFFFF',
							fontStyle: 'normal',
							fontWeight: 'bold',
							fontSize: 22,
							textAlign: 'center',
							textTransform: 'uppercase'
						}}>
							Simulasi KPA Studio A
                              </h2>
						<h3 style={{
							fontStyle: 'normal',
							fontWeight: 'bold',
							fontSize: 17,
							textAlign: 'center',
							color: '#CC9980'
						}}>
							Estimasi Cicilan Bulanan
                              </h3>
						<h1 style={{
							color: '#FFFFFF',
							fontStyle: 'normal',
							fontWeight: 'bold',
							fontSize: 34,
							textAlign: 'center',
						}}>
							IDR 18.046.057
                              </h1>

						<div style={{ margin: "67px auto", maxWidth: 800 }}>
							<Row>
								<Col style={{ marginBottom: "53px" }} ><p style={p}>Harga Unit</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>IDR 263.500.000</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>Cicilan DP</p></Col>
								<Col style={{ marginBottom: "53px" }}>
									<DropdownCicilan
										value={this.state.cicilan}
										// defaultValue={12}
										onChange={(e) => this.setState({ cicilan: e.target.value })}
									/>
								</Col>
							</Row>
							<Row>
								<Col style={{ marginBottom: "53px" }}><p style={p}>DP 20%</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>IDR 52.700.000</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>Tenor Kredit</p></Col>
								<Col style={{ marginBottom: "53px" }}>
									<DropdownKredit
										value={this.state.kredit}
										// defaultValue={1}
										onChange={(e) => this.setState({ kredit: e.target.value })}
									/>
								</Col>
							</Row>
							<Row>
								<Col style={{ marginBottom: "53px" }}><p style={p}>Jumlah Pinjaman</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>IDR 210.800.000</p></Col>
								<Col style={{ marginBottom: "53px" }}><p style={p}>Bunga</p></Col>
								<Col style={{ marginBottom: "53px" }}>
									<DropdownBunga
										value={this.state.bunga}
										// defaultValue={5}
										onChange={(e) => this.setState({ bunga: e.target.value })}
									/>
								</Col>
							</Row>
						</div>
					</div>
				</>
			)
		}
	}
}

const p = {
	color: '#FFFFFF',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 16
}
export default DenahUnit
