import React from "react";
import './quiz.css';
import quiz from '../../images/opcion-quiz.jpg';


function Quiz_question() {
    return(
        <section id="content" class="text-center ">
         <div class="stepper pt-5 mb-4">
            <span class="step active"></span><span class="step"></span><span class="step"></span><span class="step"></span>
         </div>
         <div class="close text-end px-3">
          <i class="fa-solid fa-rectangle-xmark"></i>
         </div>
         <h4>¿Quieres comenzar tu nueva aventura de souvenirs?</h4>
            <img src={quiz} alt="quiz" />
         
         <div class="botones mt-4" >
          <div class="row">
              <div class="col-6">
                  <a href="#">Scan it</a>
              </div>
              <div class="col-6">
                  <button type="button" class="btn btn-light rounded-pill w-100">Compartir <i class="fa-solid fa-share-nodes"></i></button>
              </div>
          </div>
      </div>
        </section>
    );
}
export default Quiz_question;