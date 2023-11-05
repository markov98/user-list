import { useState } from "react";
import CreateUserModal from "./CreateUserModal";
import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList() {
    const [showCreate, setShowCreate] = useState(null);

    const showUserCreateModal = () => {
        setShowCreate(<CreateUserModal hideCreate={hideCreateModal} />);
    }

    const hideCreateModal = () => {
        setShowCreate(null);
    }


    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
            <button className="btn-add btn" onClick={showUserCreateModal}>Add new user</button>
            <Pagination />
            {showCreate}
      </section>
    )
}