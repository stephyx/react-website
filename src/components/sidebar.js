import React, { Component } from 'react'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

class Sidebar extends Component {

  state = {
    sidebarOpen: false,
  }

  toggleMenu = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    })
  }

  render() {
    const { pageTitle } = this.props
    const { letterX } = this.props
    return (
        <div className="sidebar flex">
          <div id="particles-js">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "white"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 6,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
                config_demo: {
                  hide_card: true,
                  background_color: "white",
                  background_image: "",
                  background_position: "50% 50%",
                  background_repeat: "no-repeat",
                  background_size: "cover"
                }
              }}
            />
          </div>
            <img alt="menu icon" className="menu-button" id="menu-button" src={require('../images/menu-icon.png')} onClick={this.toggleMenu}></img>
            <img alt="menu icon" className="menu-button under" id="menu-button" src={require('../images/menu-icon.png')} onClick={this.toggleMenu}></img>
          <br></br>
          <div className="flex row stephyx">
            <p className="top-text steph">{pageTitle}</p>
            <p className="top-text letterx"><b>{letterX}</b></p>
          </div>
          <br></br>
          <div className={`menu-div-top ${this.state.sidebarOpen ? '' : 'hidden'}`} id='menu-div' onClick={this.toggleMenu}>
            <div id="stars-js">
              <Particles
                params={{
                  "particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
                  retina_detect: true,
                  config_demo: {
                    hide_card: true,
                    background_color: "white",
                    background_image: "",
                    background_position: "50% 50%",
                    background_repeat: "no-repeat",
                    background_size: "cover"
                  }
                }}
              />
            </div>
            <div className="navbar flex column">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar;

