import { USERS, FETCH_USERS, DELETE_USER, setUsers } from '../../actions/users.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/loaders.actions';

export default () => (next) => (action) => {
    
    next(action);

    switch(action.type) {
        case FETCH_USERS:
            const query = action.payload;
            next(setLoader({ feature: USERS, loading: true }));
            next(apiRequest({
                data: null,
                method: 'GET',
                url: `/api/users/${query}`,
                timeout: 3000,
                feature: USERS,
            }));
            break;
        case DELETE_USER:
            const id = action.payload;
            next(setLoader({ feature: USERS, loading: true }));            
            next(apiRequest({
                data: null,
                method: 'DELETE',
                url: `/api/users/${id}`,
                timeout: 3000,
                feature: USERS,    
            }));
            break;
        case `${USERS} ${API_SUCCESS}`:
            const users = action.payload;
            next(setUsers({ users, normalize: true }));
            next(setLoader({ feature: USERS, loading: false }));
            break; 
        case `${USERS} ${API_ERROR}`:
            const error = action.payload;
            console.log(error);
            next(setLoader({ feature: USERS, loading: false }));
            break;
        default:
            break;
    }
}
    