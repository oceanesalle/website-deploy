import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
   <section id="skills">
     
     <h5>Questions fréquentes</h5>
     <h2>FAQ</h2>
     

     <div className="container skills__container">
       <div className="skills__frontend">
       <h3>En combien de temps pourrais-je avoir ma plateforme?</h3>
       <div className="skills__content">
         <p>Cela dépend de la demande. Une application web ou mobile demandera plus de temps qu'un portfolio ou un CV en ligne.</p>
       </div>
       </div>
       
       <div className="skills__frontend">
       <h3>Quelles sont les tarifs ?</h3>
       <div className="skills__content">
         <p>On ne peux pas afficher de prix fixe car cela dépend de la demande du client. En effet, la realisation d'une application web ne demandera pas autant d'effort et d'heure de travail qu'un portfolio par exemple. Le prix ne sera donc pas le meme. En revanche, un développeur freelance peut demander jusqu'à 350 euros par jour. En tant que developpeuse junior, mes prix n'excederont jamais plus de 100 euros par jour. L'ideal serait de me demander un devis. Ca ne coute rien et ca n'engage a absoluement rien non plus. </p>
       </div>
       </div>

       <div className="skills__frontend">
       <h3>Combien de temps pour un devis ?</h3>
       <div className="skills__content">
         <p>Je réponds très rapidement, en moins de 24h votre devis est fait.</p>
       </div>
       </div>

       <div className="skills__frontend">
       <h3>Pourquoi vous et pas quelqu'un d'autre ?</h3>
       <div className="skills__content">
         <p>. De plus, les profils junior sont très avantageux en terme de prix.</p>
       </div>
       </div>

       <div className="skills__frontend">
       <h3>Pourquoi prendre un développeur lorsque des sites comme wordpress existe ?</h3>
       <div className="skills__content">
         <p>Tout simplement car wordpress n'est pas un développeur. Il s'agit d'un excellent outil que nous pouvons nous-meme utiliser (àla demande du client) mais cela ne remplacera pas la precision du travail de développeur. 
           Wordpress propose des thèmes limités.
         </p>
       </div>
       </div>
  


     </div>
   </section>
  )
}

export default FAQ