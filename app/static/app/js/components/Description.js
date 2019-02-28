import React from 'react'
import '../css/HowItWork.css';

export default function Description (props){
  return(
    <div className="container-fluid">
      <div className="row rowdescription">
        <div className="col-md-12 bienvenue">
          <h2>Bienvenue</h2>
          <p>
            Pour creer une carte , appuyer le bouton "Selection d'images et GCP", ou glisser quelques images a l'interieur du projet.
			    </p>
          <p>
            <ul>
              <li>Vous avez besoin d'au moins 5 images</li>
              <li>Images must overlap by 65% or more</li>
              <li>For great 3D, images must overlap by 83%</li>
              <li>Un <a href="https://github.com/OpenDroneMap/OpenDroneMap/wiki/Running-OpenDroneMap#running-odm-with-ground-control" target="_blank">Fichier GCP</a> est optionnel, mais il peut augmenter la précision du géoréférencement</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}