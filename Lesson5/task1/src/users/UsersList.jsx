import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { goPrevPage, goNextPage }from "./users.actions";
import { PropTypes } from "prop-types";
import {usersListSelector, currentPageSelector} from "./users.selectors"

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
    const start = currentPage * itemsPerPage;
    const usersToDispay = users.slice(start, start + itemsPerPage)
    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
            />
            <ul className="users">
                {users
                    .slice(currentPage * 3, currentPage * 3 + 3)
                    .map((user) => (
                        <User key={user.id} name={user.name} age={user.age} />
                    ))}
            </ul>
        </div>
    );
};
UsersList.proTypes = {
    users: checkPropTypes.arrayOf(PropTypes.shape()).isRequired,
    currentPage:PropTypes.string.isRequired,
    goNext:PropTypes.func.isRequired,
    goPrev: PropTypes.func.isRequired,
}
const mapState = (state) => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    };
};

const mapDispatch = {
    goNext: usersAction.goNextPage,
    goPrev: usersAction.goPrevPage,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;