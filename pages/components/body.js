import Image from "next/image"
import img from '../../public/img/utilizavel.jpg'

export default function Body(){
    return (
        <div className="container">
            <div>
             <Image src={img} className="img1"></Image>
            </div>
        </div>
    )
}