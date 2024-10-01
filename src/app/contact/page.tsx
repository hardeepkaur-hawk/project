import React from "react";
import Header from "../../../Components/layout/component/Header/Header";
import Footer from "../../../Components/layout/component/Footer/Footer";
export default function Contact() {
	return (
		<>
			<Header />

			<main>

				<section className="theme__main__banner about__banner position-relative mt-md-90">
					<div className="about__banner__bg position-relative">
						<div className="container" data-aos="fade-up">
							<div className="row m-auto">
								<div className="about__content text-center pt-220 pb-200 pt-lg-80 pt-md-50 pb-lg-0">
									<h3>Contact Us</h3>
									<p><a href="index.html">Home</a> / Contact Us</p>
								</div>
							</div>
						</div>
						<img src="img/about/about__banner__01.png" alt="" className="about__banner__01" />
					</div>
				</section>

				<div className="contact__map__section">
					<div className="container-fluid px-0">
						<div className="row" data-aos="fade-up">
							<div className="contact__map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14586.166638731369!2d90.38652459999999!3d23.94127905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1693217501589!5m2!1sen!2sbd"
									width="600"
									height="450"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>

							</div>
						</div>
					</div>
				</div>

				<div className="contact__section pt-110 pt-lg-60 pb-lg-60">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-md-10 m-auto">
								<div className="section__title">
									<div className="text-center">
										<h2 className="section__title__main mb-30">Please Don't Hesitate To Contact Us With Any Inquiries Or Messa</h2>
										<p className="section__description mb-30 opacity-8">You can also reach out to us by phone or email are many variati</p>
									</div>
								</div>
							</div>
						</div>
						<div className="get__in__touch mt-60 mt-lg-40">
							<div className="row">
								<div className="col-lg-4">
									<div className="single__info__box text-center mb-30">
										<img src="img/contact/contact__01.png" alt="" className="shapes contact__01" />
										<div className="icon text-center mb-20">
											<a href="contact.html"><i className="bi bi-geo-alt"></i></a>
										</div>
										<div className=" text-center">
											<h5 className="mb-10"><a href="">Our Office</a></h5>
											<span>27/2b , Street road -04,</span><br />
											<span>New York , USA</span>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="single__info__box text-center mb-30">
										<img src="img/contact/contact__01.png" alt="" className="shapes contact__01" />
										<div className="icon text-center mb-20">
											<a href="contact.html"><i className="bi bi-telephone"></i></a>
										</div>
										<div className="text-center">
											<h5 className="mb-10"><a href="">Get In Touch</a></h5>
											<span>Open a Chat Or Give us call at </span><br />
											<span>(629) 555-0129</span>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="single__info__box text-center mb-30">
										<img src="img/contact/contact__01.png" alt="" className="shapes contact__01" />
										<div className="icon text-center mb-20">
											<a href="contact.html"><i className="bi bi-envelope"></i></a>
										</div>
										<div className="text-center">
											<h5 className="mb-10"><a href="">Email Address</a></h5>
											<span>Have inquiries? Quick Email</span><br />
											<span>michael@mail.com</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-90 mt-lg-60">
							<div className="col-xl-10 m-auto">
								<div className="main__contact__form ps-xxl-3 mb-30">
									<form className="widget-form" action="#">
										<div className="row">
											<div className="col-md-6">
												<input type="text" name="fname" placeholder="Name" />
											</div>
											<div className="col-md-6">
												<input type="text" name="email" placeholder="Email Address" />
											</div>
											<div className="col-md-6">
												<input type="text" name="phone" placeholder="Phone" />
											</div>
											<div className="col-md-6">
												<input type="text" name="subject" placeholder="Subject" />
											</div>
											<div className="col-md-12 mt-20">
												<textarea name="message" placeholder="Write a Message"></textarea>
											</div>
											<div className="col-12 mt-30">
												<div className="custom__btn">
													<a href="contact.html" className="ht_btn">
														<span>Send Message</span>
													</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

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

			</main>

			<Footer />
		</>
	);
}