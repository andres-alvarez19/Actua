import { useEffect } from 'react';

export function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            let header = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                header.classList.add('sticky', 'top-0');
            } else {
                header.classList.remove('sticky', 'top-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío significa que este useEffect se ejecutará solo una vez, cuando el componente se monte
   return (
   <div  className={"relative"}>
    <nav className=" navbar flex border-secondary bg-neutral text-neutral-content h-20 shadow-xl">
        <div className="flex-1 ">
            <a className="btn btn-ghost " href="/">
                <img className="w-11 h-10" src="../../logo.png" alt=""></img>
                <p className="text-2xl w-15 h-9">Actua</p>
            </a>
        </div>
        <div className="flex-none mr-7">
            <div className="flex-col">
                <a className="mr-5 " href="/">Inicio</a>
                <a className="mr-5" href="/service">Servicios</a>
                <a className="mr-5" href="/about">Quienes somos</a>
                <a className="mr-5" href="/contact">Contacto</a>
            </div>
            <div className="dropdown dropdown-end border-l border-secondary">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle ml-2">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div tabIndex="0"
                     className="text-neutral mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="cart btn btn-neutral btn-block ">Ver carro</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-neutral dropdown dropdown-end ">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-7 items-center rounded-full">
                        <img alt="Login image" src="../../login-icon.png"/>
                    </div>
                </div>
                <ul tabIndex="0"
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a href="" className="justify-between">
                            Perfil
                        </a>
                    </li>
                    <li><a href="">Configuracion</a></li>
                    <li><a href="">Cerrar sesion</a></li>
                </ul>
            </div>
        </div>
    </nav>
       </div>
   )
}