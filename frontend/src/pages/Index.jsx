import {useState, useEffect, useRef} from 'react';
export function Index() {
    const images = [
        { src: "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg", alt: 'Image 1' },
        { src: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg", alt: 'Image 2' },
        { src: "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg", alt: 'Image 3' },
        { src: "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg", alt: 'Image 4' },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const intervalId = useRef(null);

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        intervalId.current = setInterval(changeImage, 3000);
        return () => clearInterval(intervalId.current);
    }, []);
    const handleButtonClick = (index) => {
        setCurrentImageIndex(index);
        clearInterval(intervalId.current);
        intervalId.current = setInterval(changeImage, 3000);
    };
    // Logica para blog
    const [content, setContent] = useState([
        {
            image: "../../blog.jpeg",
            category: "INDUSTRIA",
            title: "Pinterest DIY dreamcatcher gentrify single-origin coffee",
            description: "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric."
        },
        {
            image: "../../blog2.jpeg",
            category: "TERRENO",
            title: "Sed ut perspiciatis unde omnis iste natus error sit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]);
    return (
        <div>
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
                         className="w-full h-full rounded"/>
                </div>
            </div>

        <section className="relative text-gray-600 body-font overflow-hidden px-40">
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                <button className="back btn btn-circle text-xl ">&#60;</button>
                <button className="next  btn btn-circle text-xl">&#62;</button>
        </div>
        <div className="container px-5 py-10 auto">
            <div className="flex flex-wrap ">
                <div className="">
                    <img className="h-full rounded-l-lg w-96" src={content[currentContentIndex].image} alt="blog image" />
                </div>
                <div className="p-12 md:w-1/2 flex flex-col items-start rounded-r-lg border border-primary">
                    <span
                        className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{content[currentContentIndex].category}</span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                        {content[currentContentIndex].title}</h2>
                    <p className="leading-relaxed mb-8">{content[currentContentIndex].description}</p>
                    <div className="flex items-center flex-wrap mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <a className="text-indigo-500 inline-flex items-center">Saber mas
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="text-gray-600 body-font ">
        <div className="container px-5 pb-24 mx-auto">
            <div className="justify-center text-center pt-6 pb-4 ">
                <h1 className=" text-gray-900 heading font-bold title-font text-4xl mb-1 ">Conoce productos</h1>
                <div className="flex justify-center">
                    <div className="w-72 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                <p className=" text-gray-900 font-medium title-font text-3xl mb-4 mt-1 ">Para tus soluciones
                    efectivas</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/420x260"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/421x261"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                        <p className="mt-1">$21.15</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/422x262"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                        <p className="mt-1">$12.00</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/423x263"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                        <p className="mt-1">$18.40</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/424x264"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/425x265"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                        <p className="mt-1">$21.15</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/427x267"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                        <p className="mt-1">$12.00</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                             src="https://dummyimage.com/428x268"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                        <p className="mt-1">$18.40</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}