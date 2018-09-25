import React from 'react';
import ReactDOM from 'react-dom';
import {SwitcherContainer} from './style';

class Switcher extends React.Component {
    render(){
        return(
            <SwitcherContainer>
               <div className="navswitcher">
                    <div className="navswitcher_dot"></div>
                    <div className="navswitcher_angle"></div>
                </div> 
            </SwitcherContainer>
        )
    }
}

ReactDOM.render(
    <Switcher/>, document.querySelector('#el1_navswitcher--wrapper')
)

ReactDOM.render(
    <Switcher/>, document.querySelector('#el3_navswitcher--wrapper')
)