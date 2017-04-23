import React from 'react';
import { connect } from "react-redux"

@connect((store, ownProps) => {
    return {
        params: ownProps.routeParams
    };
})
export default class Recipe extends React.Component {
    render() {
        const { id } = this.props.params;
        return (
            <div>
                <h1>Recipe {id}</h1>
            </div>
        )
    }
}