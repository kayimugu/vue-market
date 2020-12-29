export default {
  // computed
  getStoreCount(state){
    return state.count;
  },
  getUserInfo(state){
    return localStorage.getItem("userInfo") || null;
  },
}
