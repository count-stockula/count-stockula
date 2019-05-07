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

        {/* Main container */}
        <div className="aboutSection">

          {/* Top jumbotron */}
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <br></br>
              <div className="headerPhotoContainer">
                <img className="headerPhoto" src="/images/titlepage.png"></img>
              </div>
              <br></br>
            </div>
          </div>

          {/* Parallax */}
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col s12">
                  <p className="header-text">The small business 
                  barcode-scanning
                  inventory app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Section */}
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col s12 gray-filler">
                  <h5 className="center">How it works</h5>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center"><img src="/images/boxicon.png" className="material-icons"></img></h2>
                    <h5 className="center">Stock</h5>
                    <p className="light">With our human-friendly UI, keeping track of your inventory is easier than ever. Your stock will finally be organized! We even tell you what items are low on stock or completely out.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><img src="/images/scanicon.png" className="material-icons"></img></h2>
                    <h5 className="center">Scan</h5>
                    <p className="light">Using a hand-held scanner, you can scan incoming stock AND outgoing sales! Just beep, beep, go! If you don’t have a scanner, don’t worry. We have a manual mode.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><img src="/images/papericon.png" className="material-icons"></img></h2>
                    <h5 className="center">Print</h5>
                    <p className="light">After you finish a sale, enter in an email to send a receipt to your client. Each sale is recorded for your own individual sales reporting records. We really do it all!</p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>

          {/* Footer */}
          <footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text aboutFooter">About Us</h5>
                  <p className="grey-text text-lighten-4">We are a team of bootcamp students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>

                </div>
                <div className="col l6 s12">
                  <h5 className="white-text aboutFooter">The Team</h5>
                  <ul>
                    <li><a className="white-text" href="https://github.com/krtcotm">Kurt Cooney</a></li>
                    <li><a className="white-text" href="https://github.com/shinji911">Aaron Lee</a></li>
                    <li><a className="white-text" href="https://github.com/JarretYingling">Jarret Yingling</a></li>
                    <li><a className="white-text" href="https://github.com/annasylvester">Anna Sylvester</a></li>
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
