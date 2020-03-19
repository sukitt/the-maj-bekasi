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
		const { store } = this.props

		return (
			<>
				<div style={{ marginTop: 150 }} id="denahUnit" ref={this.props.denahUnitRef}>
					<div className="container-2">
						<h5>Tipe Unit</h5>
						<h1 style={{width: "323px"}}>Hunian Fleksibel Untuk Generasi 'Zaman Now'</h1>
						<Tabs>
							{store && store.map((item, i) => (
								<Tab
									style={{ padding: "43px 60px", backgroundColor: "#e9e9e9", minHeight:"640px" }}
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
													list={item.room_list}
												/>
											</Tab>
											<Tab
												eventKey={Object.keys(store[i])[6]}
												title="PEVIEW UNIT">
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
					<Tabs
						style={{ marginTop: 40 }}
						defaultActiveKey="studio-a"
						id="table">

						{store && store.map((item, i) => (
							<Tab
								style={{ padding: "43px 60px", backgroundColor: "#e9e9e9", minHeight:"640px" }}
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
											title="PEVIEW UNIT">
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

const p = {
	color: '#FFFFFF',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 16
}
export default DenahUnit
