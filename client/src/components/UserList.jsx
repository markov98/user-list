import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList() {
    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
            <Pagination />
      </section>
    )
}