import Image from "next/image"
import img from '../../public/img/utilizavel.jpg'

export default function Body(){
    return (
        <div className="container">
           
            
            <div className="bodyimg">
             <Image src={img} className="img1"></Image>
             <div className="imgtext">Livros em Pré-Vendas com 30% na primeira compra</div>
            </div>
        </div>
    )
}