import Image from "next/image";

import Header from "../../Components/layout/component/Header/Header";
import Footer from "../../Components/layout/component/Footer/Footer";
export default function Home() {
  return (
    <>
    <Header />
    <main>
          <section className="theme__main__banner position-relative">
				<div className="swiper hero__slider__one aos-init aos-animate" data-aos="fade-up">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="main__banner__bg">
								<div className="container-fluid position-relative">
									<div className="container">
										<div className="row align-items-center pt-60 pb-25">
											<div className="col-xl-6 pb-lg-40">
												<div className="theme__content text-xl-start text-lg-center">
													<h1 className="banner__main__title mb-45">Elevated IT Solutions For Your Needs</h1>
													<div className="row">
														<div className="col-xxl-12">
															<p className="banner__description mb-45">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod 
																tempor incididunt ut labore et dolore magna aliqua.</p>
														</div>
													</div>
													<div className="banner__button d-lg-flex align-items-center mb-45">
														<a href="contact.html" className="ht_btn mb-md-30">
															<span>Explore More</span>
														</a>
														<a href="https://www.youtube.com/watch?v=lTxn2BuqyzU" className="popup-video">
															<img src="img/icon/play__01.png" alt="icon"/>
														</a>
													</div>
													<div className="user__review d-lg-flex align-items-center">
														<img src="img/hero/hero__one__03.jpg" alt="" className="rounded-circle"/>
														<img src="img/hero/hero__one__04.jpg" alt="" className="rounded-circle"/>
														<img src="img/hero/hero__one__05.jpg" alt="" className="rounded-circle"/>
														<div className="review__text">
															<h4 className="mb-20"><span className="counter">0.0</span>k+</h4>
															<h5>To customer reviews</h5>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="hero__img position-relative">
													<img src="img/hero/hero__one__01 (1).png" alt=""/>
													<div className="shapes developer__list d-lg-flex align-items-center">
														<div className="employer__list">
															<h4><span className="counter">43</span>+</h4>
															<h5>Empowered Projects</h5>
														</div>
														<div className="worker__list">
															<h4><span className="counter">3</span>+</h4>
															<h5>In-house Developers</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<img src="img/shape/home__01.svg" alt="" className="shapes shape__01"/>
									<img src="img/shape/home__02.svg" alt="" className="shapes shape__02"/>
									<img src="img/shape/home__03.svg" alt="" className="shapes shape__03"/>
									<img src="img/logo/hero__logo__01.png" alt="" className="shapes shape__04"/>
									<img src="img/hero/hero__one__bg__02.png" alt="" className="shapes shape__05"/>
									<img src="img/hero/hero__one__02 (1).png" alt="" className="shapes shape__06"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

            <section className="offer__section pb-100 pb-lg-40 pt-120 pt-lg-40">
				<div className="offer__bg__wrapper aos-init aos-animate" data-aos="fade-up">
					<div className="container">
						<div className="section__title mb-60">
							<div className="text-start text-lg-center">
								<h5 className="section__sub__title">OUR SOLUTION</h5>
								<div className="row">
									<div className="col-xl-7 col-lg-8 m-auto">
										<h2 className="section__title__main">We Provide The Best Digital
											IT Solution</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="row align-items-center">
							<div className="col-xxl-4 col-xl-6 col-lg-6">
								<div className="single__offer__box">
									<div className="icon mb-30">
										<img className="icon-front" src="img/icon/offer__icon__01.svg" alt="icon"/>
									</div>
									<div className="offer__name">
										<h4 className="offer__title mb-20"><a href="services.html">Digital Data</a></h4>
									    <p className="mb-30">Lorem Ipsum you need to be sure there do eiusmod tempor incididunt</p>
										<a href="contact.html" className="ht_btn">
											<span>Explore</span><i className="bi bi-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-xxl-4 col-xl-6 col-lg-6">
								<div className="single__offer__box">
									<div className="icon mb-30">
										<img className="icon-front" src="img/icon/offer__icon__02.svg" alt="icon"/>
									</div>
									<div className="offer__name">
										<h4 className="offer__title mb-20"><a href="services.html">IT Consultancy</a></h4>
									    <p className="mb-30">Lorem Ipsum you need to be sure there do eiusmod tempor incididunt</p>
										<a href="contact.html" className="ht_btn">
											<span>Explore</span><i className="bi bi-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-xxl-4 col-xl-6 col-lg-6">
								<div className="single__offer__box">
									<div className="icon mb-30">
										<img className="icon-front" src="img/icon/offer__icon__03.svg" alt="icon"/>
									</div>
									<div className="offer__name">
										<h4 className="offer__title mb-20"><a href="services.html">Digital Marketing</a></h4>
									    <p className="mb-30">Lorem Ipsum you need to be sure there do eiusmod tempor incididunt</p>
										<a href="contact.html" className="ht_btn">
											<span>Explore</span><i className="bi bi-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="img/bg/offer_bg__01.png" alt="" className="shapes offer_bg__01"/>
				<img src="img/bg/offer_bg__02.png" alt="" className="shapes offer_bg__02"/>
			</section>

            <section className="choose__section position-relative pb-60  pb-lg-40">
				<div className="container-fluid">
					<div className="row d-flex align-items-center aos-init aos-animate" data-aos="fade-up">
						<div className="offset-xl-1 col-xl-5">
							<div className="choose__img__wrapper position-relative mb-30">
								<img className="choose__main__1" src="img/chose/choose__01.png" alt="about"/>
								<img className="choose__main__2" src="img/chose/choose__02.png" alt="about"/>
								<img className="choose__main__3" src="img/chose/choose__03.png" alt="about"/>
								<img className="choose__main__4" src="img/chose/choose__04.png" alt="about"/>
								<img className="choose__main__5" src="img/chose/choose__05.png" alt="about"/>
							</div>
						</div>
						<div className="col-xl-6 ps-xl-0">
							<div className="container">
								<div className="row">
									<div className="col-xxl-8">
										<div className="choose__content__wrapper mb-80">
											<div className="section__title">
												<div className="text-start">
													<h5 className="section__sub__title">ABOUT TECH AGENCY</h5>
													<h2 className="section__title__main mb-30">Your Source for High Quality IT Solutions</h2>
													<p className="section__description mb-30 opacity-8">There are many variations of passages of Lorem Ipsum Donor available, but the majority have suffered alteration.</p>
												</div>
											</div>
											<ul className="mb-30">
												<li>
													<div className="choose__type mb-25 d-flex align-items-center">
														<div className="icon">
															<img src="img/icon/choose__icon__01.svg" alt="icon"/>
														</div>
														<div className="choose__type__text">
															<p className="">Connection to wearable technology</p>
														</div>
													</div>
												</li>
												<li>
													<div className="choose__type mb-25 d-flex align-items-center">
														<div className="icon">
															<img src="img/icon/choose__icon__01.svg" alt="icon"/>
														</div>
														<div className="choose__type__text">
															<p className=""> Solutions for voice-enabled technology</p>
														</div>
													</div>
												</li>
												<li>
													<div className="choose__type mb-25 d-flex align-items-center">
														<div className="icon">
															<img src="img/icon/choose__icon__01.svg" alt="icon"/>
														</div>
														<div className="choose__type__text">
															<p className="">Search engine optimization (SEO)</p>
														</div>
													</div>
												</li>
												<li>
													<div className="choose__type mb-25 mt-50">
														<h5 className="mb-20">Our mission</h5>
														<p className="description__one">Lorem ipsum is simply free text dolor sit amet tur notted adipisi
															cing elit sed do eiusmod tempor ipsum</p>
													</div>
												</li>
												<li>
													<div className="choose__type mb-25">
														<h5 className="mb-20">Our vision</h5>
														<p className="description__one">Lorem ipsum is simply free text dolor sit amet tur notted adipisi
															cing elit sed do eiusmod tempor ipsum</p>
													</div>
												</li>
											</ul>
											<div className=" text-start">
												<div className="choose__btn position-relative">
													<a href="contact.html" className="ht_btn">
														<span>Explore More</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="img/chose/choose__06.png" alt="" className="shapes choose__06"/>
			</section>

            <section className="project__section position-relative pb-100 pb-lg-40">
				<div className="container aos-init aos-animate" data-aos="fade-up">
					<div className="section__title mb-60">
						<div className="text-start text-lg-center">
							<h5 className="section__sub__title">OUR COMPLETED PROJECT</h5>
							<div className="row">
								<div className="col-xl-7 col-lg-8 m-auto">
									<h2 className="section__title__main">Our Recently Completed
										Projects List</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="project-container">
					<div className="swiper project__slider__one pb-100 swiper-initialized swiper-horizontal swiper-backface-hidden">
	
						<div className="swiper-wrapper" id="swiper-wrapper-23d552f6a6c43ed7" aria-live="off" style={{transform: 'translate3d(-1500px, 0px, 0px)' , transitionDuration: '0ms'}}>
							
							
			
						<div className="swiper-slide" role="group" aria-label="4 / 6" data-swiper-slide-index="3" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__01.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Fast scaling</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div><div className="swiper-slide" role="group" aria-label="5 / 6" data-swiper-slide-index="4" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__02.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Strategic Roadmapping</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div><div className="swiper-slide swiper-slide-prev" role="group" aria-label="6 / 6" data-swiper-slide-index="5" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__03.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Artificial Intelligence</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div><div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 6" data-swiper-slide-index="0" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__01.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Fast scaling</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div><div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 6" data-swiper-slide-index="1" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__02.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Strategic Roadmapping</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div><div className="swiper-slide" role="group" aria-label="3 / 6" data-swiper-slide-index="2" style={{width: '470px' , marginRight: '30px'}}>
								<div className="project__wrapper mb-30">
									<div className="project__thumb mb-20 position-relative">
										<img className="w-100" src="img/project/project__03.png" alt="project"/>
										<div className="project__icon__wrapper d-flex align-items-center justify-content-between">
											<div className="project__content">
												<h4 className="project__title"><a href="project-details.html">Artificial Intelligence</a></h4>
												<p className="project__designation opacity-8 mb-2">Talent search for AI product development</p>
											</div>
											<div className="project__icon text-center">
												<a href="project-details.html" className="icon">
													<span>Details</span>
													<i className="bi bi-arrow-right-short"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div></div>
						<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 5"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 6"></span></div>
					<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
				</div>
				<section className="service__section position-relative">
					<div className="container">
						<div className="row d-flex pt-80">
							<div className="col-xl-6 pb-lg-60">
								<div className="service__img__wrapper">
									<div className="section__title">
										<div className="text-start">
											<h5 className="section__sub__title">RECRUITMENT IT PROCESS</h5>
											<h2 className="section__title__main mb-30">Getting IT Support And Technology 
												Solutions From Ntec Is Easy </h2>
											<p className="section__description mb-30">Ntec was formed to change everything about the way 
												companies tackle technology projects</p>
										</div>
									</div>
									<div className="service___box d-flex mt-50">
										<div className="box__img position-relative">
											<img src="img/project/project__04.png" alt="" className="shapes project__04"/>
										</div>
										<div className="box__text">
											<h4>Leading The Way In IT Solutions</h4>
											<a href="contact.html" className="ht_btn">
												<span>Our Services</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5 ms-auto">
								<div className="service__content__wrapper position-relative mt-40">
									<ul>
										<li>
											<div className="service__type mb-60 d-flex">
												<div className="icon__rapper">
													<div className="icon position-relative">
														<img src="img/icon/project__01.png" alt="icon" className=""/>
													</div>
												</div>
												<div className="service__type_text">
													<h5 className="mb-20"><a href="services-details.html">Getting started</a></h5>
													<p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is
														 simply free text quis bibendum.</p>
												</div>
											</div>
										</li>
										<li>
											<div className="service__type mb-60 d-flex">
												<div className="icon__rapper">
													<div className="icon icon__two position-relative">
														<img src="img/icon/project__02.png" alt="icon" className=""/>
													</div>
												</div>
												<div className="service__type_text">
													<h5 className="mb-20"><a href="services-details.html">Data Support</a></h5>
													<p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is
														simply free text quis bibendum.</p>
												</div>
											</div>
										</li>
										<li>
											<div className="service__type d-flex">
												<div className="icon__rapper">
													<div className="icon icon__three position-relative">
														<img src="img/icon/project__03.png" alt="icon" className=""/>
													</div>
												</div>
												<div className="service__type_text">
													<h5 className="mb-20"><a href="services-details.html">Consultants Guarantee</a></h5>
													<p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is
														simply free text quis bibendum.</p>
												</div>
											</div>
										</li>
									</ul>
									<img src="img/project/project__bg__03.png" alt="" className="shapes project__bg__03"/>
								</div>
							</div>
						</div>
					</div>
					<img src="img/project/project__bg__02.png" alt="" className="shapes project__bg__02"/>
				</section>
			</section>

           <div className="testimonial__section position-relative mt-60 pb-90 mt-lg-40 pb-lg-60">
                <div className="container" data-aos="fade-up">
                    <div className="section__title pt-80">
                        <div className="text-start text-lg-center">
                            <h5 className="section__sub__title">TESTIMONNIAL</h5>
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 m-auto">
                                    <h2 className="section__title__main">To Learn More Check Out
                                        Our Success Stories</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper testimonial__slider__one pt-60">

                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__01.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Mahfuz Riad</a></h4>
                                                <p className="testimonial__designation">Chief Executive Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__02.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Robin Corn</a></h4>
                                                <p className="testimonial__designation">Chief Technology Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__03.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Mate Apolo</a></h4>
                                                <p className="testimonial__designation">Chief Executive Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__01.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Mahfuz Riad</a></h4>
                                                <p className="testimonial__designation">Chief Executive Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__02.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Robin Corn</a></h4>
                                                <p className="testimonial__designation">Chief Technology Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial__wrapper mb-30">
                                    <div className="testimonial__thumb mb-20 position-relative">
                                        <div className="testimonial__icon__wrapper d-flex align-items-center mb-30">
                                            <div className="testimonial__img text-center">
                                                <img src="img/testimonial/testimonial__one__03.png" alt="" className="testimonial__one__01" />
                                            </div>
                                            <div className="testimonial__person">
                                                <h4 className="testimonial__name"><a href="project-details.html">Mate Apolo</a></h4>
                                                <p className="testimonial__designation">Chief Executive Officer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial__content position-relative">
                                            <div className="quate__icon bg-dark mb-30">
                                                <img src="img/icon/testimonial__icon__01.png" alt="" className="testimonial__icon__01" />
                                            </div>
                                            <p className="testimonial__quotation">We turn your experts into thought leaders
                                                by getting their voices heard in the market and by building credibility and brand Lorem
                                                ipsum dolor sit amet,consectetur adip isicing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination mt-20">
                        </div>
                    </div>
                </div>
                <img src="img/testimonial/testimonial__bg__01.png" alt="" className="shapes testimonial__bg__01" />
                <img src="img/testimonial/testimonial__bg__02.png" alt="" className="shapes testimonial__bg__02" />
            </div>

            <section className="blog__section position-relative pt-130 pt-lg-40 pb-lg-10">
                <div className="container" data-aos="fade-up">
                    <div className="row d-flex align-items-center pb-70">
                        <div className="col-xl-6 mb-lg-30">
                            <div className="section__title">
                                <div className="text-start">
                                    <h5 className="section__sub__title">NEWS & ARTICLES</h5>
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-8">
                                            <h2 className="section__title__main">Check Latest Blog Post</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="text-xl-end text-lg-start">
                                <p className="section__description mb-30 opacity-8">Duis aute irure dolor in reprehenderit in voluptate esse
                                    cillum dolore eu fugiat nulla pariatur news update excepteur sint occaecatn lorem </p>
                                <a href="contact.html" className="ht_btn">
                                    <span>Vew All News</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog__style__one mb-30">
                                <div className="blog__content position-relative">
                                    <div className="blog__date d-flex align-items-center mb-30">
                                        <span>Technology</span>
                                        <p><i className="bi bi-clock"></i>21 Jan 2023</p>
                                    </div>
                                    <h4 className="blog__title mb-30"><a href="blog-details.html">Why That Bit Of Tech You’re Looking At Is Already Out Dated</a></h4>
                                    <div className="blog__link d-flex align-items-center mb-30">
                                        <div className="icon">
                                            <i className="bi bi-chevron-double-right"></i>
                                        </div>
                                        <a href="blog-details.html" className="">Discover More</a>
                                    </div>
                                    <div className="devider__line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog__style__one mb-30">
                                <div className="blog__content position-relative">
                                    <div className="blog__date d-flex align-items-center mb-30">
                                        <span>Technology</span>
                                        <p><i className="bi bi-clock"></i>21 Jan 2023</p>
                                    </div>
                                    <h4 className="blog__title mb-30"><a href="blog-details.html">Could Temperature Scans
                                        Be The Key To Returning
                                        To Work Safely?</a></h4>
                                    <div className="blog__link d-flex align-items-center mb-30">
                                        <div className="icon">
                                            <i className="bi bi-chevron-double-right"></i>
                                        </div>
                                        <a href="blog-details.html" className="">Discover More</a>
                                    </div>
                                    <div className="devider__line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog__style__one mb-30">
                                <div className="blog__content position-relative">
                                    <div className="blog__date d-flex align-items-center mb-30">
                                        <span>Technology</span>
                                        <p><i className="bi bi-clock"></i>21 Jan 2023</p>
                                    </div>
                                    <h4 className="blog__title mb-30"><a href="blog-details.html">How To Empower Your
                                        Security Team With Live
                                        Camera System Access</a></h4>
                                    <div className="blog__link d-flex align-items-center mb-30">
                                        <div className="icon">
                                            <i className="bi bi-chevron-double-right"></i>
                                        </div>
                                        <a href="blog-details.html" className="">Discover More</a>
                                    </div>
                                    <div className="devider__line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/blog/blog__bg__01.png" alt="" className="shapes blog__bg__01" />
            </section>

            <section className="team__section position-relative pt-60 pt-lg-40 pb-100 pb-lg-40">
                <div className="container" data-aos="fade-up">
                    <div className="text-start text-lg-center mb-60">
                        <h5 className="section__sub__title">OUR EXPERT TEAM</h5>
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 m-auto">
                                <h2 className="section__title__main">Team Here To Help You</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-container">
                    <div className="swiper team__slider__one">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__01.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__02.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__two"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__03.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__three"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__04.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__four"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__01.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__02.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__two"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__03.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__three"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="teams__wrapper mb-30">
                                    <div className="teams__thumb mb-20">
                                        <img className="w-100" src="img/team/team__04.png" alt="team" />
                                        <div className="teams__icon__wrapper">
                                            <div className="teams__icon teams__icon__four"></div>
                                            <div className="teams__social__media">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <div className="teams__content">
                                                <h4 className="teams__title"><a href="#">Zinedin Zidan</a></h4>
                                                <p className="teams__designation mb-2">Chief Excutive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature__section position-relative">
                <div className="container" data-aos="fade-up">
                    <div className="feature__rapper">
                        <div className="text-start text-lg-center pt-100 pt-lg-30 pb-lg-30">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9 m-auto">
                                    <h2 className="section__title__main">We Offer IT Support</h2>
                                    <p className="section__description mb-30 opacity-8">Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat
                                        cupid atat non proident, sunt in culpa </p>
                                    <a href="contact.html" className="ht_btn">
                                        <span>IT Solution</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/feature/feature__01.png" alt="" className="shapes feature__01" />
            </section>

            <section className="subscribe__section">
                <div className="container" data-aos="fade-up">
                    <div className="subscriber__rapper position-relative">
                        <div className="main__content position-relative">
                            <div className="row d-flex align-items-center">
                                <div className="col-xxl-5 col-xl-5 mb-lg-30">
                                    <div className="user__review d-flex align-items-center">
                                        <img src="img/service/subscribe__01.png" alt="" className="rounded-circle subscribe__01" />
                                        <div className="review__text">
                                            <h5>Need Consultation</h5>
                                            <p className="">Open a chat or give us call at</p>
                                            <span>(11) 157-00-22-11</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-7 col-xl-7">
                                    <h3 className="mb-30">Subscribe Us Today</h3>
                                    <form className="subscribe__form position-relative mb-30">
                                        <input type="text" placeholder="Email Address" />
                                        <a href="contact.html" className="ht_btn submit-btn">Subscribe</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <img src="img/shape/footer__03.png" alt="" className="shapes footer__03" />
                        <img src="img/service/subscribe__02.png" alt="" className="shapes subscribe__02" />
                    </div>
                </div>
            </section> 

        </main >
    <Footer />
    </>
  );
}
