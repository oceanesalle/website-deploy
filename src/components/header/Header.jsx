import React from 'react'
import './Header.css'
import profile from '../../assets/pic1.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content__titles">
        <h1>Océane Sallé</h1>
        <h5 className="text-light">Développeuse web Full Stack</h5> 
        </div>
        
      <div className="header__content">
          <div className="about__me-image">
            <img src={profile} alt="profile" />
          </div>
        
        <div className='about__content'>
        <p><strong><i>"La réussite commence par l'investissement sur soi-même".</i></strong></p>
        <p>En qualité de développeuse, ma mission est de créer et de développer tout type de plateforme internet et mobile en fonction de vos besoins, du public ciblé et surtout, 
          de créer une plateforme à votre image. <br/>
           Mes services s'adressent aux particuliers ainsi qu'aux entreprises. 
        </p>
           
           <p>Je parle anglais et français et je suis disponible pour toute mission en France et à l'étranger. <br/>
            Afin que nous puissions discuter de votre projet, veuillez vous rendre à l’espace contact. <br/>
            ❗️ La prise de rendez-vous est disponible à partir du 1er juillet 2022.</p>

        </div>
        </div>

          
      </div>
    </header>
  )
}

export default Header