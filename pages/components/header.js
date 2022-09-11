export default function Header(){
    return (
        <div className="back">
        <div>
        <div className="row">
        <div className="col-sm-8"><span className="title">Book&Book</span></div>
        <div className="col-sm-4"> 
        <nav class="navbar navbar-expand-lg bg">
         <div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><span className="headitem">Login</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><span className="headitem">Produtos</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><span className="headitem">Sacola</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><span className="headitem">Usuário</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
        </div>
       
        <div className="row">
        <div className="col-sm-8"><span className="cardheader">Ler é bom, tente de vez em quando</span></div>
        </div>

        </div>
        </div>
    )
}