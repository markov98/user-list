import { useState } from "react";
import CreateUserModal from "./CreateUserModal";
import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";
import { create } from "../services/userService";

export default function UserList() {
    const [showCreate, setShowCreate] = useState(null);

    const showUserCreateModal = () => {
        setShowCreate(<CreateUserModal hideCreate={hideCreateModal} userCreate={userCreate} />);
    }

    const hideCreateModal = () => {
        setShowCreate(null);
    }

    const userCreate = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));
        const result = await create(data);

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