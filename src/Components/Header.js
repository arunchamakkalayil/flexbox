import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
           <div className="flex-header">
               <div className="nav-items">HOME</div>
               <div className="nav-items">CONTACT</div>
               <div className="nav-items">ABOUT</div>
           </div>
        )
    }
}
