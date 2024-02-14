const ProductSlider = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export {
    ProductSlider
}