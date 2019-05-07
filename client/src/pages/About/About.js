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
                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><img src="/images/scanicon.png" className="material-icons"></img></h2>
                    <h5 className="center">Scan</h5>
                    <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><img src="/images/papericon.png" className="material-icons"></img></h2>
                    <h5 className="center">Print</h5>
                    <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
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
                    <li><a className="white-text" href="#!">Kurt Cooney</a></li>
                    <li><a className="white-text" href="#!">Aaron Lee</a></li>
                    <li><a className="white-text" href="#!">Jarret Yingling</a></li>
                    <li><a className="white-text" href="#!">Anna Sylvester</a></li>
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
