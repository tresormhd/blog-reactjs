import React  from "react";

const Footer  =() => {

    
    return (
        <>
           <footer className="bg1">
                <div className="container p-t-40 p-b-70">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 p-t-50">
                            <h4 className="txt13 m-b-33">
                                Contact Us
                            </h4>

                            <ul className="m-b-70">
                                <li className="txt14 m-b-14">
                                    <i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true"></i>
                                    8th floor, 379 Hudson St, New York, NY 10018
                                </li>

                                <li className="txt14 m-b-14">
                                    <i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true"></i>
                                    (+1) 96 716 6879
                                </li>

                                <li className="txt14 m-b-14">
                                    <i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true"></i>
                                    contact@site.com
                                </li>
                            </ul>

                            <h4 className="txt13 m-b-32">
                                Opening Times
                            </h4>

                            <ul>
                                <li className="txt14">
                                    09:30 AM – 11:00 PM
                                </li>

                                <li className="txt14">
                                    Every Day
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-4 p-t-50">
                            <h4 className="txt13 m-b-33">
                                Latest twitter
                            </h4>

                            <div className="m-b-25">
                                <span className="fs-13 color2 m-r-5">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </span>
                                <a  className="txt15">
                                    @colorlib
                                </a>

                                <p className="txt14 m-b-18">
                                    Activello is a good option. It has a slider built into that displays the featured image in the slider.
                                    <a  className="txt15">
                                        https://buff.ly/2zaSfAQ
                                    </a>
                                </p>

                                <span className="txt16">
                                    21 Dec 2017
                                </span>
                            </div>

                            <div>
                                <span className="fs-13 color2 m-r-5">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </span>
                                <a  className="txt15">
                                    @colorlib
                                </a>

                                <p className="txt14 m-b-18">
                                    Activello is a good option. It has a slider built into that displays
                                    <a  className="txt15">
                                        https://buff.ly/2zaSfAQ
                                    </a>
                                </p>

                                <span className="txt16">
                                    21 Dec 2017
                                </span>
                            </div>
                        </div>

                        
                    </div>
                </div>

                
            </footer>


            <div className="btn-back-to-top bg0-hov" id="myBtn">
                <span className="symbol-btn-back-to-top">
                    <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                </span>
            </div>

            <div id="dropDownSelect1"></div> 
        </>
                
    );
   
}
export default Footer
