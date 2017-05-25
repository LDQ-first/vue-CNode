
import store from '../store/index'

export default  (path, value) => {
    /*store.state.user.id ?  (
    store.state.id ? 
    store.commit('updateResume', {
        path,
        value
    }):
    store.commit('saveResume', {
        path,
        value
    })) : */
    store.commit('editResume', {
        path,
        value
    });
}