import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

// const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;

export default compose(connect(mapStateToProps),
                        withAuthRedirect)(Dialogs);
