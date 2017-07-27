import { ACTION_TYPE } from '../constants/constant';

export default function(state = null, action){ 

    switch(action.type){
        case ACTION_TYPE.SEARCH :
            console.log(action.payload);
        return action.payload
    }
    return state;
}