import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="g-wrapp">
            <div className="paddings innerwidth g-container">
                <div className="flexColCenter inner-container">
                   <span className='primaryText'>Get Started with Homyz</span>
                   <span className='secondaryText'>Subscribe and find attractive price quotes from us <br/>
                        Find your residence soon
                   </span> 
                   <button className="button">
                    <a href="mailto:lightsamuel10@mail.com">Get Started</a>
                   </button>
                </div>
            </div>
        </section>
    )
}


export default GetStarted