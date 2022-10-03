import React from 'react'
import './Homepage.css';

const Homepage = () => {

  return (
    <div className = "HomeContainer">
    <div className='headercontainer'>
        <header className='headeritems'>
            <h3>Bill Split</h3>
            <ul>
            <li>About US</li>
            <li>FAQs</li>
            <li>Login/Signin</li>
            </ul>
        </header>
        <div className='mainHeading'>Less stress when sharing expenses with anyone</div>
        <button className='roughslatebutton'>ROUGH SLATE</button>
    </div>
    <section className='section'>
            <div className='sectioncontainer1'>
                <div className='container1'>
                <div className='box1-1'>
                    <h3>Rough slate</h3>
                    <p>Do the split without making the groups</p>
                </div>
                <div className='box1-2'>
                    <h3>Compatibility</h3>
                    <p>Do the split without making the groups</p>
                </div>
                </div>
                <div className='container2'>
                <div className='box1-3'>
                    <h3>Uniformity</h3>
                    <p>Do the split without making the groups</p>
                </div>
                <div className='box1-4'>
                    <h3>Minimal transactions</h3>
                    <p>Do the split without making the groups</p>
                </div>
                </div>
            </div>
            <div className='sectioncontainer2'>
                <div className='box2-1'>
                    <h3>Why Bill-Split if there are similar platforms like Split Wise?</h3>
                    <ul>
                        <li>Rough slate</li>
                        <li>Lable wise search</li>
                        <li>Date/Time wise search</li>
                    </ul>
                </div>
            </div>
    </section>
    <div className='FAQ'>
        <h2>FAQs</h2>
        <ul>
        <li>
            <li>How do I use Bill Split</li>
            <ul>
            <li>First, sign up for an account!</li>
            <li>Next, create a group.</li>
            <li>Once you've created your group, you and your friends can all start adding expenses!</li>
            <li>Those are the basics, and should be enough to get you started. If you have more questions, check out our helpdesk articles! How do I login if you have questions, checkout our helpdesk articals</li>
            </ul>
        </li>
        <li>
            <li>How do I login if I don't have gmail account</li>
            <ul>
            <li>You can select the mobile otp option</li>
            </ul>
        </li>
        </ul>
    </div>
    <div className='Aboutus'>
        <h2>About US</h2>
        <p>Bill Split is a web-app that makes it easy to split bills with friends and family. We organize all your shared expenses and IOUs in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with roommates, or paying someone back for lunch, Splitwise makes life easier. We store your data in the cloud so that you can access it anywhere: on iPhone, Android, or on your computer.</p>
    </div>
    <footer className='footer'>
        <h3>made with love in INDIA</h3>
    </footer>
    </div>
  )
}

export default Homepage;