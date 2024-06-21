const iState = {
    name:  "Chandan Singh",
    course: ["Angular 13", "React Js"]
};


const reducer = (state = iState, action) => {
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.payload
        };
    }
    return state;
}

export default reducer;
