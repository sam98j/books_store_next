export function GetBooks() {
    return async (dispatch: Function) => {
        try {
            const reqPending = await fetch("http://localhost:4000/books/allbooks")
            const resData = await reqPending.json();
            dispatch({type: "GET_BOOKS", payload: resData.allbooks})
        } catch(err) {
            console.log(err)
        }
    }
}