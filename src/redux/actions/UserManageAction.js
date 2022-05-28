export const loginAction = (information) => {
    return async dispatch => {
        try {
            let result = await http.post('', information)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LOGIN,
                    // userInformation: result.data.content
                });
                // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
            }
        } catch (error) {
            // message(error.response.data.content, WARNING)
        }
    }
}