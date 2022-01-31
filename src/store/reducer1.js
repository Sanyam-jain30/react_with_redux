
const initialstate = {
    str1: '',
    str3: ''
};

const reducer1 = ( state = initialstate, action ) => {
    if(action.type === "UPDATE_STR1"){
        return {
            ...state,
            str1: action.val
        }
    }
    if(action.type === "CONCAT"){
        return {
            ...state,
            str3: state.str1.concat(action.str2)
        }
    }

    return state;
};

export default reducer1;