import React from "react";
import { Link } from 'react-router-dom';
import './quiz.css';
import quiz from '../../images/fondo-quiz.jpg';

function Quiz() {
    return(
        <section id="content" class="quiz position-relative">
        <div class="container">
            <div class="row ">
                <div class="col-12 text-start mt-5">
                 volver al inicio
                </div>
                <div class="col-12 position-absolute new-adventure" >
                    <p>¿Quieres comenzar tu nueva aventura de souvenirs?</p>
                </div>
                <div class="botones position-absolute scan" >
                    <div class="row">
                        <div class="col-6">
                            <Link to="/quiz-question" className="btn btn-secondary rounded-pill w-100">
                                 Scan it <i className="fa-solid fa-arrow-right"></i>
                             </Link>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-light rounded-pill w-100">Compartir <i class="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>
              
            </div>
          </div>
        </section>
    );
}
export default Quiz;