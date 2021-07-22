import { bindActionCreators, Dispatch } from "redux";
import { saveWalletStart } from "../../actions/wallets-action";
import { connect } from "react-redux";
import WalletAddFormUI from "./ui";
import { StateProps } from "../../types/redux";

const mapStateToProps = (props: StateProps) => {
  return props.walletsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      saveWalletStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddFormUI);
