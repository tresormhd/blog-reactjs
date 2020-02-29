import React  from "react";
import { Link } from "react-router-dom"


const About  =() =>  {

    
    return (
        <>
            <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{
				"background-image": "url(/images/bg-title-page-03.jpg);"
				}}>
                <h2 className="tit6 t-center">
                    About Us
                </h2>
            </section>

			<section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15">
				<span className="tit2 t-center">
					Italian Restaurant
				</span>

				<h3 className="tit3 t-center m-b-35 m-t-5">
					Our Story
				</h3>

				<p className="t-center size32 m-l-r-auto">
					Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
				</p>
			</section>

		<section className="bg1-pattern p-t-120 p-b-105">
			<div className="container">
				
				<div className="row">
					<div className="col-md-6 p-t-45 p-b-30">
						<div className="wrap-text-delicious t-center">
							<span className="tit2 t-center">
								Delicious
							</span>

							<h3 className="tit3 t-center m-b-35 m-t-5">
								RECIPES
							</h3>

							<p className="t-center m-b-22 size3 m-l-r-auto">
								Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
							</p>
						</div>
					</div>

					<div className="col-md-6 p-b-30">
						<div className="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
							<img src="/images/our-story-01.jpg" alt="IMG-OUR"/>
						</div>
					</div>
				</div>


				<div className="row p-t-170">
					<div className="col-md-6 p-b-30">
						<div className="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
							<img src="/images/our-story-02.jpg" alt="IMG-OUR"/>
						</div>
					</div>

					<div className="col-md-6 p-t-45 p-b-30">
						<div className="wrap-text-romantic t-center">
							<span className="tit2 t-center">
								Romantic
							</span>

							<h3 className="tit3 t-center m-b-35 m-t-5">
								Restaurant
							</h3>

							<p className="t-center m-b-22 size3 m-l-r-auto">
								Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>


		<div className="parallax0 parallax100" style={{"background-image": "url(/images/bg-cover-video-02.jpg);"}}>
			<div className="overlay0-parallax t-center size33"></div>
		</div>
		
		<div className="modal fade" id="modal-video-01" tabindex="-1" role="dialog" aria-hidden="true">

			<div className="modal-dialog" role="document" data-dismiss="modal">
				<div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>

				<div className="wrap-video-mo-01">
					<div className="w-full wrap-pic-w op-0-0"><img src="/images/icons/video-16-9.jpg" alt="IMG"/></div>
					<div className="video-mo-01">
						<iframe src="https://www.youtube.com/embed/5k1hSu2gdKE?rel=0&amp;showinfo=0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
    </> 
    );
   
}
export default About