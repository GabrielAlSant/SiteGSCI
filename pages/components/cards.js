import Image from 'next/image'
import img1 from '../../public/img/Livro.webp'
import img2 from '../../public/img/livro1.webp'
import img3 from '../../public/img/Livro2.webp'
import img4 from '../../public/img/Livro3.webp'
export default function Cards(){
    return (
        <div>         
          <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
      <Image src={img1} height={356} width={400}/>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <Image src={img2} height={356} width={400}/>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <Image src={img3} height={356} width={400}/>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <Image src={img4} height={356} width={400}/>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}