import { ADD_ALL, ADD_ONE, CHANGE_LOADING, CLEAR_TITLE } from './action'

const initialState = {
    titles: [],
    isLoading: false,
}

const saveTitle = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return Object.assign({}, state, {
                titles: [...state.titles, action.payload]
              })
        case ADD_ALL:
            let obj = Object.assign({}, state, {
                titles: [...state.titles]
              })
            action.payload.forEach(element => {
                obj.titles.push(element.title_suggest)
            });
            return obj;
        case CHANGE_LOADING:
            return Object.assign({}, state, {isLoading: !state.isLoading});
        case CLEAR_TITLE:
            return Object.assign({}, state, {titles: []})
        default:
            return state;
    }
}


export default saveTitle; 