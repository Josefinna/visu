import React from "react";
import { Link } from 'react-router-dom';
import './quiz-question.css';
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
         <h4 className="pregunta">¿Prefieres visitar lugares gratuitos o con entrada pagada? </h4>
         <div className="option-one form-check ">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label mb-4" htmlFor="flexRadioDefault1">
                      Gratis
                    </label>
                  </div>
                  <div className="option-two form-check mb-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label mb-4" htmlFor="flexRadioDefault2">
                      Entrada pagada
                    </label>
                  </div>
                  
            <div class="botones mt-5 d-flex postion-absolute justify-content-between">
                    <div class="row">
                            <div class="col-6">
                                <Link to="/quiz" className="btn btn-left rounded-pill w-100">
                                    <i class="fa-solid fa-arrow-left"></i>
                                </Link>
                            </div>
                            <div class="col-6">
                                <Link to="#" className="btn btn-right btn-secondary rounded-pill w-100">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                    </div>
            </div>
        </section>
    );
}
export default Quiz_question;