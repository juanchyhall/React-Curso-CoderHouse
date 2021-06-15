
export const NavBarComponent = () =>{
    const shopName = 'Tienda Virtual'
    return(

        <div className="App">
        <header className="Bar">
          <p className="Logo">{shopName}</p>
          <nav className="Nav">
            <ul className="links">
              <li className="link"><a href="">Home</a></li>
              <li className="link"><a href=""></a></li>
              <li className="link"><a href=""></a></li>
              <li className="link"><a href="">Contacto</a></li>
              
            </ul>
          </nav>
        </header>
      </div>
    )
}