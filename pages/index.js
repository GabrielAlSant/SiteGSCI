import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Body from './components/body'
import Cards from './components/cards'

export default function Home() {
  return (
    <div>
      <div className='background'>
  <Header/>
  </div>
  <Body/>
  <div className='container'>
  <div  className="top">
                <div className="titlebtn">Alguma Coisa</div>
                <div className="pos"><button className="btn btn-dark">Ver Mais</button></div>
  </div>
  <Cards />
  <Cards />
  </div>
</div>
  )
}
