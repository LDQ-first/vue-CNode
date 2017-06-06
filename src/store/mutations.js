
export default () => {
    return {
        showAsideMenu(state, isShow) {
            state.isShowAsideMenu = isShow;
        },
        /*showLogin(state, isShow) {
            state.isShowLogin = isShow;
        },
        showMsg(state, isShow) {
            state.isShowMsg = isShow;
        },
        showNewArticle(state, isShow) {
            state.isShowNewArticle = isShow;
        },*/
      /*  showInfo(state, isShow) {
            state.isShowInfo = isShow;
        },*/
        /*showAbout(state, isShow) {
            state.isShowAbout = isShow;
        },*/
        showSkin(state, isShow) {
            state.isShowSkin = isShow;
        },
        changeSkinColor(state, color) {
            state.skinColor = color;
        },
        changeTab(state, {tab, articleList, isLoading}) {
           state.tab = tab || state.tab;
           localStorage.tab = tab || state.tab;
           state.articleList = articleList || state.articleList;
           state.isLoading = isLoading;
        },
        changeMore(state, isOver) {
            state.isMore = isOver; 
        },
        showLoading(state, isShow) {
            state.isLoading = isShow;
        },
        Over(state, isOver) {
            state.over = isOver;
        },
        updateUserInfo( state, userInfo) {
            state.userInfo = userInfo;
        },
        updateAT(state, at) {
            state.at = at;
        },
        updateCollectTopics(state, collectTopics) {
            state.collectTopics = collectTopics;
        }

    }
}