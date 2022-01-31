
const initialstate = {
    str2: '',
    str4: ''
};

const reducer2 = ( state = initialstate, action ) => {
    if(action.type === "UPDATE_STR2"){
        return {
            ...state,
            str2: action.val
        }
    }
    if(action.type === "COMPARE"){
        let i = state.str2.toLowerCase().localeCompare(action.str1.toLowerCase());
        if(i === 0){
            i = "Yes, equal";
        }
        else{
            i = "No, not equal";
        } 
        return {
            ...state,
            str4: i
        }
    }

    return state;
};

export default reducer2;