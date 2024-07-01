import React from "react";
import { Link } from 'react-router-dom';
import './quiz.css';
import quiz from '../../images/fondo-quiz.jpg';

function Quiz() {
    return(
        <section id="content" class="quiz position-relative">
        <div class="container">
            <div class="row ">
                {/* <div class="col-12 text-start mt-5">
                 volver al inicio
                </div> */}
                <div class="col-12 position-absolute new-adventure" >
                    <p>¿Quieres comenzar tu nueva aventura de souvenirs?</p>
                </div>
                <div class="botones position-absolute scan" >
                    <div class="row">
                        <div class="vuelta col-6">
                            <Link to="/" className="btn btn-left rounded-pill w-100">
                                 En otro momento
                             </Link>
                        </div>
                        <div class="vamos col-6">
                            <Link to="/quiz-question" className="btn btn-right btn-secondary rounded-pill w-100">
                                    Vamos! <i class="fa-solid fa-arrow-right icon-margin"></i>
                             </Link>
                        </div>
                    </div>
                </div>
              
            </div>
          </div>
        </section>
    );
}
export default Quiz;