import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOperationsStart, deleteOperationStart } from "../../actions/operations-action";
import OperationListUI from './ui';
import { StateProps } from '../../types/redux';

const mapStateToProps = (state: StateProps) => {
  return state.operationsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getOperationsStart,
      deleteOperationStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OperationListUI);
