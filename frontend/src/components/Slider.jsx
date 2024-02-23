import {useState, useEffect, useRef} from 'react';
import React from 'react';


function Slider(props) {
    const images = [
        { src: "https://i.ytimg.com/vi/YtU-E5amU_Y/maxresdefault.jpg", alt: 'Image 1' },
        { src: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg", alt: 'Image 2' },
        { src: "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg", alt: 'Image 3' },
        { src: "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg", alt: 'Image 4' },
        { src: "https://i.redd.it/5qc099gt7cd61.jpg", alt: 'Image 5' },
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
        <div className="slider w-90 h-90 m-2 relative ">
            <div className="absolute flex justify-center left-5 right-5 bottom-5">
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
                     className="w-full h-96 rounded"/>
            </div>
        </div>
    )
}


export default Slider;
