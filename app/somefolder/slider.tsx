"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        breakpoint: { max: 464, min: 390 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const sliderImageUrl = [
    {
        url: "./journals/img132.jpg"
    },
    {
        url: "./journals/img133.jpg"
    },
    {
        url: "./journals/img134.jpg"
    },
    {
        url: "./journals/img135.jpg"
    },
];

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
                {sliderImageUrl.map((imageUrl, index) => {
                    if (index == 0){
                        return (
                            <div className="slider m-3 mr-6" key={index}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img width={'100%'} src={imageUrl.url} alt="movie" />
                            </div>
                        );
                    }
                    return (
                        <div className="slider overflow-visible m-3" key={index}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img width={'100%'} src={imageUrl.url} alt="movie" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
