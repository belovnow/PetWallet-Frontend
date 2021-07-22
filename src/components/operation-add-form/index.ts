import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveOperationStart } from "../../actions/operations-action";
import OperationAddFormUI from "./ui";
import { StateProps } from "../../types/redux";

const mapStateToProps = (props: StateProps) => {
  return props.operationsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      saveOperationStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OperationAddFormUI);
