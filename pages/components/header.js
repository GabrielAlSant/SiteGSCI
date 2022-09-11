export default function Header(){
    return (
        <div className="back">
        <div className="container">
        <div className="row">
        <div className="col-sm-8"><span className="title">Book&Book</span></div>
        <div className="col-sm-4"> 
        <nav className="navbar navbar-expand-lg bg">
         <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem">Login</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem">Produtos</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem">Sacola</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem">Usuário</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
        </div>
       
        <div className="row">
        <div className="col-sm-8"><span className="cardheader">Ler é bom, tente de vez em quando</span></div>
        <div className="col-sm-4"></div>
        </div>

        </div>
        </div>
    )
}