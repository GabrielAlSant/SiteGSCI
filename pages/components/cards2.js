import Image from 'next/image'
import img5 from '../../public/img/Livro4.webp'
import img6 from '../../public/img/Livro5.webp'
import img7 from '../../public/img/Livro6.webp'
import img8 from '../../public/img/Livro7.webp'
export default function Cards2(){
    return (
        <div>         
          <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">CORALINE - ACOMPANHA MARCADOR DE PÁGINAS ESPECIAL</h5>
         <Image src={img5} height={700} width={700}/>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">HARRY POTTER E O CÁLICE DE FOGO</h5>
         <Image src={img6} height={200} width={250}/>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">HARRY POTTER E O PRISIONEIRO DE AZKABAN</h5>
         <Image src={img7} height={200} width={250}/> 
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">TEMPESTADE DE GUERRA</h5>
        
         <Image src={img8}  height={200} width={250}/>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}