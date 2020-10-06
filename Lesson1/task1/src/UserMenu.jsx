import React from "react";
import { UserContext } from "./userMenu-context"

class UserMenu extends React.Component {
render (){
    return (
          <div className="menu" {...this.props}>
      <span className="menu__greeting">Hello, {this.context.className}</span>
      <img alt="User Avatar"
       src={`${this.context.url}`} 
       className="menu__avatar" />
    </div>
    );
}
}
UserMenu.contextType = UserContext;
export default UserMenu