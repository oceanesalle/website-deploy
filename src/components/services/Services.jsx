import React from 'react'
import './Services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id ='services'>
      <h5>Mes services</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Développement web</h3>
          </div>
          
          <ul className="service__list">
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Création et gestion de site internet.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Site vitrine ou e-commerce.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Application web et application mobile.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Restauration de site existant.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Portfolio et CV en ligne.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Création de site one page.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX design </h3>
          </div>
          
          <ul className="service__list">
          <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Création d'interfaces de site Web et d'application.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Réalisation de maquette.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Conception d'interface centrée utilisateur.</p>
            </li>
            <li>
            <BsCheck2All className='service__list-icon'/> 
            <p>Optimisation de l'expérience utilisateur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services