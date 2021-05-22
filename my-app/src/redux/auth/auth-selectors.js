const getUserIn = state => state.auth.token;
const getUserName = state => state.auth.user.name;
export default { getUserIn, getUserName };
