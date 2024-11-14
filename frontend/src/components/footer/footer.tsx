import React from "react";
import './footer.css'


const Footer = () =>{
    return (
        <div className="footer-container">
            <div className="footer-text">
                <div className="contacts-container">
                    <h4>PynoTech Solutions</h4>
                    <div className="contact-details">
                        <ul>
                            <li>solutionspynotech@gmail.com</li>
                            <li>Tel: 1234567890</li>
                            <li>Accra, Ghana</li>
                        </ul>
                    </div>
                </div>
                <div className="services">
                    <h5>Services</h5>
                    <ul className="services-list">
                        <li>Implementations</li>
                        <li>Upgrade</li>
                        <li>Application Support</li>
                        <li>Development & Enhancement</li>
                    </ul>
                </div>
                <div className="services">
                    <h5>Solutions</h5>
                    <ul className="services-list">
                        <li>Solutions Extensions</li>
                        <li>Business Solutions</li>
                    </ul>
                </div>
            </div>
            <div className="horizontal-line">
            </div>
            <span className="copyright">&copy; 2024 PynoTech Solutions</span>
        </div>
    )
}
export default Footer