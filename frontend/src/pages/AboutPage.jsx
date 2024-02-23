export function AboutPage() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">¿Quienes Somos?</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">ACTUA
                        se crea con el propósito de prestar servicios comerciales e
                        industriales especializados en el área de comercialización y
                        distribución, ejecucion y levantamiento de proyectos en ingenieria,
                        mantenimiento, automatizacion y sistemas de gestión</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Visión</h2>
                            <p className="leading-relaxed text-base">Ser una empresa de soluciones efectivas, líderes
                                en la prestación de servicios industriales y comerciales con altos estándares de
                                calidad.
                                Ampliando nuestro portafolio de clientes nacionales e internacionales, estableciendo
                                alianzas estratégicas entre diferentes organizaciones, garantizando el reconocimiento
                                en la prestación de servicios, aportando innovación, conocimientos, capacitación de
                                nuestro personal y oportunidades de desarrollo para nuestros trabajadores y nuestros
                                clientes.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Misión</h2>
                            <p className="leading-relaxed text-base">
                                Satisfacer las necesidades de nuestros clientes, proveedores, accionistas
                                y trabajadores, en el ámbito de la prestación de servicios industriales
                                y comerciales a nivel nacional e internacional entregando soluciones innovadoras
                                de alto estandar a través de la mejor relación precio/calidad.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div
                                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Valores</h2>
                            <p className="leading-relaxed text-base">Orientación al mercado
                                Liderazgo
                                Orientación a resultados y eficiencia
                                Innovación
                                Trabajo en equipo
                                Desarrollo Social
                                Conservación y prevención del ambiente
                                Integridad y Civismo.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                </button>
            </div>
        </section>
            )
}