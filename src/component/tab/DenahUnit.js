import React, { Component } from 'react'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
// import DropdownCicilan from './DropdownCicilan'
// import DropdownKredit from './DropdownKredit'
// import DropdownBunga from './DropdownBunga'

import TabGallery from '../slider/TabGallery'
import {TabSpesifikasi} from './TabSpesifikasi'
import TabSimulasi from './TabSimulasi'


import './assets/style.css'
import LoaderSpinner from '../base/loader/LoaderSpinner'

class DenahUnit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cicilan: 0,
			kredit: 0,
			bunga: 0,
			isLoading: true,
			localStore: [],
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.store.length !== prevState.localStore.length) {
		  return {
			localStore: nextProps.store,
			isLoading: false
		  }
		}
	  }

	render() {
		if(this.state.isLoading){
			return(
				<div id={this.props.id}>
					<LoaderSpinner />
				</div>
			)
		  }

		return (
			<>
				<div style={{ paddingTop: 150 }} id={this.props.id} ref={this.props.denahUnitRef}>
					<div className="container-2">
						<h5>Tipe Unit</h5>
						<h1 style={{width: "323px"}}>Hunian Fleksibel Untuk Generasi 'Zaman Now'</h1>
					</div>
					<Tabs
						style={{ marginTop: 40 }}
						defaultActiveKey="studio-a"
						id="table">

						{this.state.localStore.length && this.state.localStore.map((item, i) => (
							<Tab
								style={{ padding: "43px 60px", backgroundColor: "#e9e9e9", minHeight:"680px" }}
								key={item.id}
								eventKey={item.unit_name.toLowerCase().replace(" ", "-")}
								title={item.unit_name}>
								<div id="spec">
									<Tabs
										defaultActiveKey={Object.keys(this.state.localStore[i])[5]}>
										<Tab
											eventKey={Object.keys(this.state.localStore[i])[5]}
											title="SPESIFIKASI">
											<TabSpesifikasi 
												unitName={item.unit_name}
												items={item.specs}
												list={item.room_list}
											/>
										</Tab>
										<Tab
											eventKey={Object.keys(this.state.localStore[i])[6]}
											title="PREVIEW UNIT">
											<TabGallery images={item.gallery} />
										</Tab>
										<Tab
											eventKey={Object.keys(this.state.localStore[i])[2]}
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
