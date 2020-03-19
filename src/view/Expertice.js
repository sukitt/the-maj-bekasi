import React from 'react'
import { ExperticeComponent } from '../component/base/expertice';
import Base from './Base';

export default class Expertice extends Base {
    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <ExperticeComponent 
                            store={this.state.expertice} errors={this.state.errors.expertice}
                        />
                    </div>
                </section>
            </>
        )
    }
}