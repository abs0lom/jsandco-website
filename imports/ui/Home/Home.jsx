import React from "react"
import { connect } from "react-redux"

//components
import Landing from "./components/Landing";
import About from "./components/About";
import Team from "./components/Team";
import Contacts from "./components/Contacts";
import Partners from "./components/Partners";
import JoinUs from "./components/JoinUs";

const Home = (props) => (
  <React.Fragment>
    <Landing {...props} />
    <About {...props} />
    <Team {...props} />
    <Contacts {...props} />
    <Partners {...props} />
    <JoinUs {...props} />
  </React.Fragment>
)

const mapStateToProps     = ({ settings: { isMobile } }) => ({ isMobile });

export default connect(mapStateToProps)(Home);

