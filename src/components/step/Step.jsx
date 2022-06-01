import React from 'react'
import './Step.css' 
import {MdOutlineTaskAlt} from 'react-icons/md'


const Blog = () => {
  return (
    <section id ='step'>
      <h5>Du premier contact à la réalisation finale</h5>
      <h2>Les étapes du développement</h2>

      <div className="container step__container">
        <article className="step">
          <div className="step__head">
            <h3>1️⃣ Rencontre</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Discussion autour du projet</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>On déterminer les objectifs à atteindre</p>
            </li>
            </ul>
          </article>

          <article className="step">
          <div className="step__head">
            <h3>2️⃣ Plan du site</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Création d'un sitemap</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Architecture de la base de données (si besoin)</p>
            </li>
            </ul>
          </article>

          <article className="step">
          <div className="step__head">
            <h3>3️⃣ UX/UI Design</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Création du wireframe</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Maquette du site</p>
            </li>
            </ul>
          </article>

          <article className="step">
          <div className="step__head">
            <h3>4️⃣ Codage</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Développement frontend</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Développement backend (si besoin)</p>
            </li>
            </ul>
          </article>

          <article className="step">
          <div className="step__head">
            <h3>5️⃣Débug et déploiement</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Résolution de bug</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Mise en ligne du site ou de l'application</p>
            </li>
            </ul>
          </article>

          <article className="step">
          <div className="step__head">
            <h3>6️⃣ Maintenance</h3>
            </div>

            <ul className="step__list"> 
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Modification du design</p>
            </li>
            <li>
            <MdOutlineTaskAlt className='step__list-icon'/> 
            <p>Rectification d'erreur</p>
            </li>
            </ul>
          </article>       
      </div> 

    </section>
  )
}

export default Blog