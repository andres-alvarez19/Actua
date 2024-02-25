import {useState, useEffect, useRef} from 'react';
import React from 'react';


export function Slider(props) {
    const images = [
        { src: "../../slider/Slider_frame1.png", alt: 'Image 1' },
        { src: "../../slider/Slider_frame3.png", alt: 'Image 3' },
        { src: "../../slider/Slider_frame4.png", alt: 'Image 4' },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const intervalId = useRef(null);

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        intervalId.current = setInterval(changeImage, 5000);
        return () => clearInterval(intervalId.current);
    }, []);
    const handleButtonClick = (index) => {
        setCurrentImageIndex(index);
        clearInterval(intervalId.current);
        intervalId.current = setInterval(changeImage, 5000);
    };
    return (
        <div className="slider w-90 h-full relative shadow-md pb-10 bg-gray-100">
            <div className="absolute flex justify-center left-5 right-5 bottom-5 ">
                {images.map((image, index) => (
                    <button
                        className={`btn-custom rounded mr-3 ${currentImageIndex === index ? 'bg-white' : ''}`}
                        data-nav={index}
                        key={index}
                        onClick={() => handleButtonClick(index)}
                    ></button>
                ))}
            </div>
            <div className=" flex justify-center left-5 right-5 bottom-5">
                <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt}
             style={{height: '600px'}} className="w-full object-fill "/>
            </div>
        </div>
    )
}


export default Slider;
