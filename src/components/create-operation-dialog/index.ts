import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteOperationStart, saveOperationStart } from "../../actions/operations-action";
import { StateProps } from '../../types/redux';
import CreateOperationDialogUI from './ui';

const mapStateToProps = (props: StateProps) => {
  return props.operationsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      saveOperationStart,
      deleteOperationStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateOperationDialogUI);
