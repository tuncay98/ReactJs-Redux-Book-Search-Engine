import React, { Component } from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        titles: state.titles,
        isLoading: state.isLoading
    };
}


let divStyle = {
    width: "100vw",
    textAlign: "center"
}

class Searchbox extends Component {

    addAll = async (e) => {
        this.props.dispatch({type: "CLEAR_TITLE"})
        this.props.dispatch({type: "CHANGE_LOADING"})
        let send = await fetch(`http://openlibrary.org/search.json?title=${e.target.value.replace(" ", "+")}&page=1`)
        let data = await send.json()
        this.props.dispatch({type: "CHANGE_LOADING"})
        this.props.dispatch({ type: 'ADD_ALL', payload: data.docs});
    }

    render() {
        return (
            <div style={divStyle}>
                <input style={{ width: "50em" }} onBlur={this.addAll} type="text"></input>
            </div>
        );
    };
}


export default connect(mapStateToProps)(Searchbox);