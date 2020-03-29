import React, { Component } from 'react'
import styled from "styled-components"
import { Tabs, Tab } from 'react-bootstrap'
import TabsComponent from './TabsComponent'
import '../assets/style.css'


export default class BlogTabs extends Component{
    constructor(props){
        super(props)
        this.state = {
            localStore:[],
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.store.length !== prevState.localStore.length) {
			return {
				localStore: nextProps.store,
				isLoading: false
			}
		}
		return null
	}

    render(){
        const News = this.state.localStore.filter(data => data.categories.replace(/[\["\]]/g, "") === "News")
        const Event = this.state.localStore.filter(data => data.categories.replace(/[\["\]]/g, "") === "Event")
        const Media = this.state.localStore.filter(data => data.categories.replace(/[\["\]]/g, "") === "Media Coverage")
        return(
            <Container style={{marginTop:"100px"}} id="blog-tabs">
                <Tabs defaultActiveKey="semua" >
                    <Tab eventKey="semua" title="SEMUA">
                        <TabsComponent store={this.state.localStore} />
                    </Tab>
                    <Tab eventKey="news" title="NEWS">
                        <TabsComponent store={News}/>
                    </Tab>
                    <Tab eventKey="event" title="EVENT">
                        <TabsComponent store={Event}/>
                    </Tab>
                    <Tab eventKey="media-coverage" title="MEDIA COVERAGE">
                        <TabsComponent store={Media}/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
const Container = styled.div({

})