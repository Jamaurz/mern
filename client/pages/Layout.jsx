import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import {add, addEvent, singIn, singInTwitter, getEvent, getAllEvent} from "../actions/commonActions"

import Login from '../components/Login.jsx';
import Event from '../components/Event.jsx';

import './Layout.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        events: store.common.events,
        user: store.twitter.user
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        var tempThis = this;
        singIn(function(data) {
            tempThis.props.dispatch(singInTwitter(data));
        });
        
        getEvent(function(data) {
            //console.log(data);
            tempThis.props.dispatch(getAllEvent(data));
        });
    }
    addEvent(eventName) {
        var tempThis = this;
        add(eventName, function(data) {
            if(data) {
                //console.log(data);
                getEvent(function(data) {
                    //console.log(data);
                    tempThis.props.dispatch(getAllEvent(data));
                });
            } else {
                console.log('newdalos');
            }
        });
    }
    
    render() {
        var eventsC = ['event1', 'event2', 'event3']
        return (
            <div class='appContainer'>
                <div class='listRecipe'>
                    <Link to='edit'>Edit</Link>
                    <Link to='recipe'>Recipe</Link>
                    <Login login={this.props.user} />
                    <h1>Lauout</h1>
                    <ul>
                        {eventsC.map((el, index) => {
                                return <Event 
                                    key={index} 
                                    clickHadler={() => {this.addEvent(el)}} 
                                    el={el} 
                                    user={this.props.events[el]}
                                    />
                        })}
                    </ul>
                </div>
                <div class='detailsRecipe'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}