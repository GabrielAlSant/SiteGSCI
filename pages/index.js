import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Body from './components/body'
import Cards from './components/cards'
import Cards2 from './components/cards2'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
      <div className='background'>
  <Header/>
  </div>
  <div className="imgbody">
  <Body/>
  </div>
  <div className='container'>
  <div  className="top">
                <div className="titlebtn">Livros na Pré-Venda</div>
                <div className="pos"><button className="btn btn-dark">Ver Mais</button></div>
  </div>
  <Cards />
  <Cards2 />
  </div>
  <div className='backblack'>
  <Footer />
  </div>
</div>
  )
}
