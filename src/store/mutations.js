
export default () => {
    return {
        showAsideMenu(state, isShow) {
            state.isShowAsideMenu = isShow;
        },
        showLogin(state, isShow) {
            state.isShowLogin = isShow;
        },
        showMsg(state, isShow) {
            state.isShowMsg = isShow;
        },
        showNewArticle(state, isShow) {
            state.isShowNewArticle = isShow;
        },
        showInfo(state, isShow) {
            state.isShowInfo = isShow;
        },
        showAbout(state, isShow) {
            state.isShowAbout = isShow;
        },
        showSkin(state, isShow) {
            state.isShowSkin = isShow;
        },
        changeSkinColor(state, color) {
            state.skinColor = color;
        },
        changeTab(state, {tab, articleList, isLoading}) {
           state.tab = tab || state.tab;
           state.articleList = articleList || state.articleList;
           state.isLoading = isLoading;
        },
        changeMore(state, isOver) {
            state.isMore = isOver; 
        }
    }
}