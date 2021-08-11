import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveWalletStart } from "../../actions/wallets-action";
import { StateProps } from '../../types/redux';
import CreateWalletDialogUI from './ui';

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateWalletDialogUI);
