import React  from "react";
import { Link } from "react-router-dom"


const BLogAll  =() =>  {
    
    return (
        <div>
            <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{ 
                    "background-image":"url(/images/bg-title-page-03.jpg)"
                }}>
                <h2 className="tit6 t-center">
                    Blog
                </h2>
            </section>

            <section>
                <div className="bread-crumb bo5-b p-t-17 p-b-17">
                    <div className="container">
                        <Link to="/" className="txt27">
                            Home
                        </Link>

                        <span className="txt29 m-l-10 m-r-10">/</span>

                        <span className="txt29">
                            Blog
                        </span>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="p-t-80 p-b-124 bo5-r h-full p-r-50 p-r-0-md bo-none-md">
                                
                                <div className="blo4 p-b-63">
                                    <div className="pic-blo4 hov-img-zoom bo-rad-10 pos-relative">
                                        <a href="blog-detail.html">
                                            <img src="/images/blog-05.jpg"  alt="IMG-BLOG"/>
                                        </a>

                                        <div className="date-blo4 flex-col-c-m">
                                            <span className="txt30 m-b-4">
                                                28
                                            </span>

                                            <span className="txt31">
                                                Dec, 2018
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-blo4 p-t-33">
                                        <h4 className="p-b-16">
                                            <a href="blog-detail.html" className="tit9">Cooking recipe Delicious</a>
                                        </h4>

                                        <div className="txt32 flex-w p-b-24">
                                            <span>
                                                by Admin
                                                <span className="m-r-6 m-l-4">|</span>
                                            </span>

                                            <span>
                                                28 December, 2018
                                                <span className="m-r-6 m-l-4">|</span>
                                            </span>

                                            <span>
                                                Cooking, Food
                                                <span className="m-r-6 m-l-4">|</span>
                                            </span>

                                            <span>
                                                8 Comments
                                            </span>
                                        </div>

                                        <p>
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                                        </p>

                                        <a href="blog-detail.html" className="dis-block txt4 m-t-30">
                                            Continue Reading
                                            <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>

                                
                                <div className="pagination flex-l-m flex-w m-l--6 p-t-25">
                                    <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                                    <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3">
                            <div className="sidebar2 p-t-80 p-b-80 p-l-20 p-l-0-md p-t-0-md">
                                
                                <div className="search-sidebar2 size12 bo2 pos-relative">
                                    <input className="input-search-sidebar2 txt10 p-l-20 p-r-55" type="text" name="search" placeholder="Search"/>
                                    <button className="btn-search-sidebar2 flex-c-m ti-search trans-0-4"></button>
                                </div>

                                
                                <div className="archive">
                                    <h4 className="txt33 p-b-20 p-t-43">
                                        Archive
                                    </h4>

                                    <ul>
                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                uly 2018
                                            </a>

                                            <span className="txt29">
                                                (9)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                June 2018
                                            </a>

                                            <span className="txt29">
                                                (39)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                May 2018
                                            </a>

                                            <span className="txt29">
                                                (29)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                April  2018
                                            </a>

                                            <span className="txt29">
                                                (35)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                March 2018
                                            </a>

                                            <span className="txt29">
                                                (22)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                February 2018
                                            </a>

                                            <span className="txt29">
                                                (32)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                January 2018
                                            </a>

                                            <span className="txt29">
                                                (21)
                                            </span>
                                        </li>

                                        <li className="flex-sb-m p-t-8 p-b-8">
                                            <a href="#" className="txt27">
                                                December 2017
                                            </a>

                                            <span className="txt29">
                                                (26)
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
   
}
export default BLogAll