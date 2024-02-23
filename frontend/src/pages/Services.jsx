export function Services() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="flex justify-self-start">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 pb-2">Nuestros
                            servicios</h1>
                    </div>
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-52 h-full bg-primary rounded"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <p className="sm:w-3/5 leading-relaxed text-base ">
                            Contamos con un equipo altamente experimentado en el rubro de la ingeniería
                            , lo que nos permite ofrecer una amplia gama de servicios para satisfacer las necesidades de
                            nuestros clientes.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full"
                                 src="https://dummyimage.com/1203x503"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Ingenieria y
                            Mantenimientos</h2>
                        <p className="text-base leading-relaxed mt-2">
                            Diseño, elaboración y ejecución de proyectos de obras civiles,
                            mecánicas, eléctricas, procesos industriales y creación de
                            planes de mantenimiento preventivo.
                        </p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Saber más
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full"
                                 src="https://dummyimage.com/1204x504"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Comercio y Distribución</h2>
                        <p className="text-base leading-relaxed mt-2">Suministro y distribución de insumos y repuestos
                            para la
                            industria, cumpliendo los mas exigentes criterios de calidad, precio y tiempo de entrega.
                        </p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Saber más
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full"
                                 src="https://dummyimage.com/1205x505"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Consultoría y Gestión</h2>
                        <p className="text-base leading-relaxed mt-2">Asesorías para la implementación de sistemas
                            de gestión basados en normativas internacionales: Normas ISO (9001, 14001, 45001),
                            HACCP, BRCGS, BRCGS Gluten Free, FDA, auditorias internas, implementacion de
                            laboratorios industriales.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Saber más
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}