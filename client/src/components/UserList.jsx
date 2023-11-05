import { useState } from "react";
import CreateUserModal from "./CreateUserModal";
import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";
import { create } from "../services/userService";

export default function UserList() {
    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
            <Pagination />
      </section>
    )
}