import Image from "next/image"
import img from '../../public/img/utilizavel.jpg'

export default function Body(){
    return (
        <div>
            <div>
<Image src={img} width={300} heigth={200}></Image>
            </div>
        </div>
    )
}