export const BooksReducer = (state = [], action: any) => {
    switch(action.type) {
        case "GET_BOOKS": {
            return [...state, ...action.payload]
        }
        default: {
            return state
        }
    }
}