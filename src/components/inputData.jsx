import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../redux/data/data.actions';


class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    handleChangeInput(input) {
        this.setState({ text: input.currentTarget.value });
    }
    handleClick(e) {
        //Atualiza o store através do redux
        this.props.setData(this.state.text)
    }
    render() {
        return (
            <div >
                <input value={this.state.text} onChange={(e) => this.handleChangeInput(e)} type="text" />
                <button onClick={(e) => this.handleClick(e)} >Inserir</button>
            </div>
        );
    }
}

//Configuração para identificar a chamada da função setData
const mapDispatchToProps = dispatch => ({
    setData: item => dispatch(setData(item))
});

export default connect(
    null,
    mapDispatchToProps
)(InputData);