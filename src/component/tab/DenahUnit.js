import React, { Component } from 'react'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
// import DropdownCicilan from './DropdownCicilan'
// import DropdownKredit from './DropdownKredit'
// import DropdownBunga from './DropdownBunga'

import TabGallery from '../slider/TabGallery'
import {TabSpesifikasi} from './TabSpesifikasi'
import TabSimulasi from './TabSimulasi'


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
						<div id="denah" className="container-2 p-0"><h2>Denah Unit</h2></div>
						<Tabs
							style={{ marginTop: 40 }}
							defaultActiveKey="studio-a"
							id="table">

							{store && store.map((item, i) => (
								<Tab
									style={{ padding: "43px 60px", backgroundColor: "#e9e9e9", height:"640px" }}
									key={item.id}
									eventKey={item.unit_name.toLowerCase().replace(" ", "-")}
									title={item.unit_name}>
									<div id="spec">
										<Tabs
											defaultActiveKey={Object.keys(store[i])[5]}>
											<Tab
												eventKey={Object.keys(store[i])[5]}
												title="SPESIFIKASI">
												<TabSpesifikasi 
													unitName={item.unit_name}
													items={item.specs}
												/>
											</Tab>
											<Tab
												eventKey={Object.keys(store[i])[6]}
												title="GALERI">
												<TabGallery images={item.gallery} />
											</Tab>
											<Tab
												eventKey={Object.keys(store[i])[2]}
												title="SIMULASI KPA">
												<TabSimulasi 
													hargaUnit={item.unit_price}
												/>
											</Tab>
										</Tabs>
									</div>
								</Tab>
							))}
						</Tabs>
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
