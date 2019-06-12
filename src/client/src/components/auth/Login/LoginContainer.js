import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth.actions';

import Login from './Login';

const mapStateToProps = (state, ownProps) => ({
    message: state.auth.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logIn: (credentials) => dispatch(actions.logIn(credentials)),
    setAuth: (auth) => dispatch(actions.setAuth(auth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);