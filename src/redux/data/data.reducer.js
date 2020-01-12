
import { DataActionTypes } from './data.types';

const INITIAL_STATE = {
    dataList: []
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.SET_DATA:
            //pega a lista atual e atualiza com o novo item
            var list = [...state.dataList];
            list.push(action.payload);
            return {
                ...state,
                dataList: list
            };
        default:
            return state;
    }
};

export default dataReducer;