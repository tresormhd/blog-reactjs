import React  from "react";
import {  NavLink } from 'react-router-dom';

const BlogDetail  =() =>  {

    
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
                        <a href="index.html" className="txt27">
                            Home
                        </a>

                        <span className="txt29 m-l-10 m-r-10">/</span>

                        <a href="blog.html" className="txt27">
                            Blog
                        </a>

                        <span className="txt29 m-l-10 m-r-10">/</span>

                        <span className="txt29">
                            Cooking recipe delicious
                        </span>
                    </div>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-md-8 col-lg-9">
                            <div className="p-t-80 p-b-124 bo5-r p-r-50 h-full p-r-0-md bo-none-md">
                            
                                <div className="blo4 p-b-63">
                                    <div className="pic-blo4 hov-img-zoom bo-rad-10 pos-relative">
                                        <a href="blog-detail.html">
                                            <img src="/images/blog-05.jpg" alt="IMG-BLOG"/>
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
                                        <NavLink to="/blog-detail" className="tit9" > Cooking recipe Delicious</NavLink>
                                           
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mi sem. Nulla facilisi. Sed ultricies eros a nibh tempus, in sodales mi vestibulum. Nullam quis dui ac nisl ultrices euismod et sit amet urna. Morbi semper sapien quis ex tempor, sit amet scelerisque eros rhoncus. Cras scelerisque auctor gravida. Nunc fermentum luctus rhoncus. Nulla vulputate fermentum convallis. In quis pellentesque tortor. Cras metus nibh, gravida vitae ante vel, finibus semper tellus. Nulla vel tincidunt magna. Morbi tempor velit lectus, eu commodo quam volutpat vitae.
                                        </p>
                                    </div>
                                </div>

                                <form className="leave-comment p-t-10">
                                    <h4 className="txt33 p-b-14">
                                        Leave a Comment
                                    </h4>

                                    <p>
                                        Your email address will not be published. Required fields are marked *
                                    </p>

                                    <textarea className="bo-rad-10 size29 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-40" name="commentent" placeholder="Comment..."></textarea>

                                    <div className="size30 bo2 bo-rad-10 m-t-3 m-b-20">
                                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name *"/>
                                    </div>

                                    <div className="size30 bo2 bo-rad-10 m-t-3 m-b-20">
                                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="email" placeholder="Email *"/>
                                    </div>

                                    <div className="size30 bo2 bo-rad-10 m-t-3 m-b-30">
                                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="website" placeholder="Website"/>
                                    </div> 

                                    <button type="submit" className="btn3 flex-c-m size31 txt11 trans-0-4">
                                        Post Comment
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3">
                            <div className="sidebar2 p-t-80 p-b-80 p-l-20 p-l-0-md p-t-0-md">
                                
                                <div className="search-sidebar2 size12 bo2 pos-relative">
                                    <input className="input-search-sidebar2 txt10 p-l-20 p-r-55" type="text" name="search" placeholder="Search"/>
                                    <button className="btn-search-sidebar2 flex-c-m ti-search trans-0-4"></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    
        </div>
    );
   
}
export default BlogDetail