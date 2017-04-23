import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import { addArray } from "../actions/commonActions"

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        array: store.common.array,
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(addArray('sina'))
    }
    addRandomItem() {
        let value = Math.ceil(Math.random() * 10);
        console.log(value);
        this.props.dispatch(addArray(value))
    }
    render() {
        return (

            <div class='appContainer'>
                <div class='listRecipe'>
                    <Link to='edit'>Edit</Link>
                    <Link to='recipe'>Recipe</Link>
                    <a href='auth/twitter'>Sing in with Twitter</a>
                    <h1>Lauout</h1>
                    <p>list recipe</p>
                    <h1 onClick={this.addRandomItem.bind(this)}>Add random item to list</h1>
                    <ul>
                        {this.props.array.map((el, index) => {
                            return <li key={index}>{el}</li>
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