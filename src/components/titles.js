import React, { Component } from "react"
import { connect } from "react-redux"
import store from '../redux/store';


const mapStateToProps = (state) => {
    return {
        titles: state.titles,
        isLoading: state.isLoading
    };
}

class Titles extends Component {
    constructor(props) {
        super(props);

        store.subscribe(() => this.setState({}));
    }

    render() {
        return (
            <div style={this.divStyle}>
                {this.props.isLoading?<h1 style={{color: "white"}}>Loading..</h1>
                :
                this.props.titles.length > 0 ?
                    <ul style={{margin: 0}}>
                        {this.props.titles.map((e, i) => <li style={{color: "white"}} key={i}>{e}</li>)}
                    </ul> :
                    <p>Empty</p>
                }
            </div>
        );
    };
}


export default connect(mapStateToProps)(Titles);