
export function Navbar() {
    window.addEventListener('scroll',()=>{
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky',window.scrollY > 0);
    header.classList.toggle('top-0',window.scrollY > 0);
});
   return (
    <nav className=" navbar flex border-secondary bg-neutral text-neutral-content h-20 shadow-xl">
        <div className="flex-1 ">
          <a className="btn btn-ghost " href="/">
              <img className="w-11 h-10" src="../../logo.png" alt=""></img>
              <p className="text-2xl w-15 h-9" >Actua</p>
          </a>
        </div>
            <div className="flex-none mr-7">
               <div className="flex-col">
                 <a className="mr-5 " href="">Inicio</a>
                  <a className="mr-5" href="">Servicios</a>
                  <a className="mr-5"  href="">Quienes somos</a>
                  <a className="mr-5" href="">Contacto</a>
               </div>
              <div className="dropdown dropdown-end border-l border-secondary">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle ml-2">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div tabIndex="0" className="text-neutral mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="cart btn btn-neutral btn-block " >Ver carro</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-neutral dropdown dropdown-end ">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-7 items-center rounded-full">
                    <img alt="Login image" src="../../login-icon.png"  />
                  </div>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a href="" className="justify-between" >
                      Perfil
                    </a>
                  </li>
                  <li><a href="">Configuracion</a></li>
                  <li><a href="" >Cerrar sesion</a></li>
                    <li>
                        <label className="flex cursor-pointer gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle>
                              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>
                          <input type="checkbox" value="dark" className="toggle theme-controller"/>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </li>
                </ul>
              </div>
        </div>
  </nav>
    )
}