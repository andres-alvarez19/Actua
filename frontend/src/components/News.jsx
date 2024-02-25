import {useEffect, useRef, useState} from "react";

export function News() {
       // Logica para blog
    const intervalContent = useRef(null);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
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
    const resetInterval = () => {
        clearInterval(intervalContent.current);
        intervalContent.current = setInterval(nextContent, 10000);
    };
    useEffect(() => {
        intervalContent.current = setInterval(nextContent, 10000);
        return () => clearInterval(intervalContent.current);
    }, []);
        const nextContent = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };

    const prevContent = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex - 1 < 0 ? content.length - 1 : prevIndex - 1));
    };
    return (
        <section className="relative text-gray-600 body-font overflow-hidden px-40 flex md:justify-center shadow-md ">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                <button className="back btn btn-circle text-xl " onClick={() => {
                    prevContent();
                    resetInterval();
                }}>&#60;</button>
                <button className="next  btn btn-circle text-xl" onClick={() => {
                    nextContent();
                    resetInterval();
                }}>&#62;</button>
            </div>
            <div className="container px-5 py-10 auto">
                <div className="flex flex-wrap justify-center ">
                    <div className="">
                        <img className="h-full rounded-l-lg w-96 border-l border-y  border-primary"
                             src={content[currentContentIndex].image} alt="blog image"/>
                    </div>
                    <div
                        className="p-12 md:w-1/2 flex flex-col items-start rounded-r-lg border-r border-y border-primary ">
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
    )
}
export  default News;