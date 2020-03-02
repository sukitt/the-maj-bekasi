import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

const DenahUnit = (props) => {
    return (
        <div style={{
            marginTop: 108
        }}>
            <h2>Denah Unit</h2>
            <Tabs defaultActiveKey="studio-a" id="uncontrolled-tab-example">
                <Tab eventKey="a" title="Studio A">
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="b" title="Studio B">
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="c" title="Studio C" disabled>
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="d" title="Studio D" disabled>
                    <p>Lorem</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DenahUnit
