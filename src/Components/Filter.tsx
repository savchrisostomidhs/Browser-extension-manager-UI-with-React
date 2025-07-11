import "./Filter.css"

function Filter({ filter, setFilter }: { filter: string, setFilter: (e: string) => void }) {
    const handleFilter = (e: React.MouseEvent<HTMLLIElement> |
        React.KeyboardEvent<HTMLLIElement>) => setFilter(e.currentTarget.innerHTML);

    return (
        <div className="filter">
            <h1>Extensions List</h1>

            <div className="options">
                <ul>
                    <li
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" ? handleFilter(e) : null}
                        className={filter === "All" ? "selected" : ""}
                        onClick={handleFilter}>
                        All
                    </li>
                    <li
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" ? handleFilter(e) : null}
                        className={filter === "Active" ? "selected" : ""}
                        onClick={handleFilter}>
                        Active
                    </li>
                    <li
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" ? handleFilter(e) : null}
                        className={filter === "Inactive" ? "selected" : ""}
                        onClick={handleFilter}>
                        Inactive
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter 