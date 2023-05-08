import React from 'react';
import "../../index.css";
import "./GetStarted.css";

const GetStarted = () =>{
    return(
        <section className='g-wrapper'>
            <div className='innerWidth paddings g-container'>
                <div className='flexColCenter inner-container'>
                    <span className='primaryText'>Get Started with Homyz</span>
                    <span className='secondaryText'>Subscribe and find super attractive prices quotes from us.
                        <br />
                        Find your residence soon
                    </span>
                    <butto className='button'>
                        <a href='mailto:yash.chauhan.yc@outlook.com'>Get Started</a>
                    </butto>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;