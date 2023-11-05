import { useState } from "react";
import CreateUserModal from "./CreateUserModal";
import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList() {
    const [showCreate, setShowCreate] = useState(null);

    const createUserClickHandler = () => {
        setShowCreate(<CreateUserModal />);
    }

    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
            <Pagination />
            {showCreate}
      </section>
    )
}