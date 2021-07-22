import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveAccountStart, } from "../../actions/accounts-action";
import AccountAddFormUI from "./ui";
import { StateProps } from "../../types/redux";


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

export default connect(mapStateToProps, mapDispatchToProps)(AccountAddFormUI);
