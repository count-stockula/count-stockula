import React, { PureComponent } from "react";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import BackToAppButton from "../../components/Button/BackToAppButton";
import "./About.css";

export default class About extends PureComponent {

  render() {
    return (
      <>
        <PageHeader />

        <div className="aboutSection">

          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <br></br>
              <div className="headerPhotoContainer">
                <img className="headerPhoto" src="/images/titlepage.png"></img>
              </div>
              <br></br>
            </div>
          </div>

          {/* <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
            <div class="parallax"><img src="/images/background2.jpg" alt="Unsplashed background img 2"></img></div>
          </div> */}


            <div className="container grayFiller">
              <div className="section">

                <div className="row">
                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center"><img src="/images/iconCoffin.png" className="material-icons"></img></h2>
                      <h5 className="center">Speeds up development</h5>

                      <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                    </div>
                  </div>

                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center light-blue-text"><img src="/images/iconHeart.png" className="material-icons"></img></h2>
                      <h5 className="center">User Experience Focused</h5>

                      <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                    </div>
                  </div>

                  <div className="col s12 m4">
                    <div className="icon-block">
                      <h2 className="center light-blue-text"><img src="/images/iconBat.png" className="material-icons"></img></h2>
                      <h5 className="center">Easy to work with</h5>

                      <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                    </div>
                  </div>
                </div>

              </div>
              <br></br>
            </div>

            <div className="container">
              <div className="section">
                <div className="row">
                </div>
              </div>
            </div>

            <footer className="page-footer orange">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text aboutFooter">Company Bio</h5>
                    <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                  </div>
                  <div className="col l3 s12">
                    <h5 className="white-text aboutFooter">Settings</h5>
                    <ul>
                      <li><a className="white-text" href="#!">Link 1</a></li>
                      <li><a className="white-text" href="#!">Link 2</a></li>
                      <li><a className="white-text" href="#!">Link 3</a></li>
                      <li><a className="white-text" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                  <div className="col l3 s12">
                    <h5 className="white-text aboutFooter">Connect</h5>
                    <ul>
                      <li><a className="white-text" href="#!">Link 1</a></li>
                      <li><a className="white-text" href="#!">Link 2</a></li>
                      <li><a className="white-text" href="#!">Link 3</a></li>
                      <li><a className="white-text" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </footer>
          </div>

          <BackToAppButton />
      </>
        );
      }
    }