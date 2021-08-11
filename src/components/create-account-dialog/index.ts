import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveAccountStart } from "../../actions/accounts-action";
import { StateProps } from '../../types/redux';
import CreateAccountDialogUI from './ui';

const mapStateToProps = (props: StateProps) => {
  return props.accountsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      saveAccountStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountDialogUI);
