"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { sliderItems } from "@/data/sliderItems";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobilethink: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Slider = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                renderButtonGroupOutside={true}
                className="gd-carousel"
                dotListClass="custom-dot-list-style hidden"
            >
                {sliderItems.map((item, index) => {
                    return (
                        <div className="slider m-3 mr-6 px-4 py-6" key={index}>
                            <a className="pt-2 cursor-pointer" href={`/magazine/${item.link}`} target="_blank">
                                <Image
                                    className="hover:scale-[1.30] slider-image hover:z-50 hover:shadow-none"
                                    src={item.image}
                                    alt="Lam7a"
                                    width={500}
                                    height={700}
                                    priority
                                />
                            </a>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
