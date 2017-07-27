import { ACTION_TYPE } from '../constants/constant';
import _ from 'lodash';

export default function (state = [], action) {

    switch (action.type) {
        case ACTION_TYPE.SEARCH:
            console.log(action.payload);
            let containsCity = _.find(state, function (item) {
                return item.city.id === action.payload.data.city.id
            });
            if(!containsCity){
                return [action.payload.data, ...state]; //ES6 syntax create new array with existing array values with new array element with flat operation
            } else {
                console.log("City already in the list");
                return state;
            }
    }
    return state;
}