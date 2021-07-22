import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getWalletsStart, deleteWalletStart } from "../../actions/wallets-action";
import WalletsListUI from "./ui";
import { StateProps } from "../../types/redux";

const mapStateToProps = (props: StateProps) => {
  return props.walletsReducers;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getWalletsStart,
      deleteWalletStart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WalletsListUI);
