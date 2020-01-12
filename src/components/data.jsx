import React from 'react';
import { connect } from 'react-redux';


const Data = ({ dataList }) => {

    return (
        <div >
            {dataList.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
}

//configura o redux para retorna a lista de itens
const mapStateToProps = ({ data: { dataList } }) => ({
    dataList
});

export default connect(mapStateToProps)(Data);
