//The action is a type of action and a payload
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.fname);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};