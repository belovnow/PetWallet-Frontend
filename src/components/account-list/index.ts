import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAccountsStart, deleteAccountStart } from "../../actions/accounts-action";
import AccountListUI from "./ui";
import { StateProps } from "../../types/redux";

const mapStateToProps = (props: StateProps) => {
  return props.accountsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAccountsStart,
      deleteAccountStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AccountListUI);
