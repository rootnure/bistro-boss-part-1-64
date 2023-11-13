import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section>
            <SectionTitle
                heading="Testimonials"
                subHeading="What Out Clients Say"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='py-12 flex items-center flex-col gap-8 w-3/4 mx-auto text-center'>
                            <Rating
                                style={{ maxWidth: "175px" }}
                                value={review.rating}
                                readOnly></Rating>
                            <h1 className="text-7xl"><FaQuoteRight></FaQuoteRight></h1>
                            <p>{review.details}</p>
                            <h2 className="text-2xl text-orange-400 font-semibold">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;