import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import Navlink from '../components/Navlink'
import '../Css/style.css'

function GamePage() {
  return (

  <Layout>
       <body class="gaming-page-body">
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
    
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
    
        <div class="navigation__nav">
            <ul class="navigation__list">

                <li class="navigation__item"><a href="../../index.html" class="navigation__link"><span>01</span>Home</a></li>

            <li class="navigation__item"><a href="../Games/games.html" class="navigation__link"><span>02</span>Games</a></li>
            <li class="navigation__item"><a href="../Videos/videos.html" class="navigation__link"><span>03</span>Video Lessons</a></li>
            <li class="navigation__item"><a href="../Games/QuizGame/quizhome.html" class="navigation__link"><span>04</span>Quizzes</a></li>

            </ul>
        </div>
    
    </div>
    <div class="gaming-header">
        <h1 class="gaming-heading-primary">Games</h1>
    </div>


    <div class="container">
       <div class="row">
        <div class="col-1-of-3">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--3">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--3">Draw the Shape</span>
                  </h4>
                  
                  <div class="card__details">
                    <ul>
                        <li>
                          Draw the shapes free hand
                        </li>
                        <li>
                           Get Hints
                        </li>
                        <li>
                            Free hand drawing
                        </li>
                        <li> <a href="../Games/ConnectDotsGame/newDot.html" class="game-btn game-btn-cta">Play Now</a></li>
                    </ul>
                       
                        
                  </div>
              </div>
              
            </div>
          </div>
          <div class="col-1-of-3">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--2">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--2">Mix or Match Cards</span>
                  </h4>
                  
                  <div class="card__details">
                    
                        <div>
                            <ul>
                                <li>
                                    Match the same Alphabets
                                </li>
                                <li>
                                    If Stuck Get hints
                                </li>
                                <li>
                                    Try to Use less flips
                                </li>
                                <li>
                                    <Link to='/drawing' className="game-btn game-btn-cta"><Navlink to='/memoryGameMixOrMatch' name="MixOrMatch" /></Link>
                                    
                                        
                                       
                                </li>
                            </ul>
                        </div>
                  </div>
              </div>
              
            </div>
          </div>
          <div class="col-1-of-3">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--1">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--1">Speed Typing Test</span>
                  </h4>
                  
                  <div class="card__details">
                        <ul>
                            <li>
                                Type the right word
                            </li>
                            <li>
                               Get Bonus 
                            </li>
                            <li>
                                Type fast and correctly
                            </li>
                            <li> <a href="../quizzes/typingTest.html" class="game-btn game-btn-cta">Play Now</a></li>
                        </ul>
                       
                        
                  </div>
              </div>
              
            </div>
          </div>
         


       </div>
           
       <div class="row justify-content-center row-of-2">
        
          <div class="col-1-of-3 co-1">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--4">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--2">Say the Right Number</span>
                  </h4>
                  
                  <div class="card__details">
                    <ul>
                        <li>
                            Guess the right number
                        </li>
                        <li>
                            If Stuck see the hints
                        </li>
                        <li>
                            Learn number
                        </li>
                        <li><a href="../quizzes/voiceQuiz.html" class="game-btn game-btn-cta">Play Now</a></li>
                    </ul>
                        
                        
                  </div>
              </div>
              
            </div>
          </div>
          <div class="col-1-of-3 co-2">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--5">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--1">Match the Spelling</span>
                  </h4>
                  
                  <div class="card__details">
                    <ul>
                        <li>
                            Match the same Alphabets
                        </li>
                        <li>
                            If Stuck Get hints
                        </li>
                        <li>
                            Try to Use less flips
                        </li>
                        <li>
                            
                                <a href="../../../blocks_game/spelling_game/spelling_game.html" class="game-btn game-btn-cta">Play Now</a>
                            
                        </li>
                    </ul>
                  </div>
              </div>
              
            </div>
          </div>
          


       </div>
    </div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
   </Layout>

  )
}

export default GamePage