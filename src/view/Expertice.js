import React, { Component } from 'react'
import Whatsapp from '../component/base/whatsapp';
import { ExperticeComponent } from '../component/base/expertice';
import Base from './Base';

export default class Expertice extends Base {
    render() {
        return (
            <>
                <Whatsapp />
                <section>
                    <div className="container">
                        <Expertice 
                            store={this.state.expertice} errors={this.state.errors.expertice}
                        />
                    </div>
                </section>
            </>
        )
    }
}