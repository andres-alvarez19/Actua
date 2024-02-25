import Slider from "./Slider.jsx";

export const Store = () => {
    return (
        <section className="text-gray-600 body-font bg-gray-100 pt-10">
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
    )
}
export default Store;
