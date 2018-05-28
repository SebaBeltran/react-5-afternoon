import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {updateAddOne, updateAddTwo, updateAddThree} from "../../ducks/reducer";

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e)=>this.props.updateAddOne}/>
                    <input type="text" placeholder="Line Two" onChange={(e)=>this.props.updateAddTwo}/>
                    <input type="text" placeholder="Line Three" onChange={(e)=>this.props.updateAddThree}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
    addressOne: state.addressOne,
    addressTwp: state.addressTwo,
    addressThree: state.addressThree
    })
}


export default connect(mapStateToProps, {updateAddOne, updateAddTwo, updateAddThree})(WizardNine)