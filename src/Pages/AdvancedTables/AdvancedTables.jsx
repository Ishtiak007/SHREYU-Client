import MultipleRowSelection from "../Tables/MultipleRowSelection/MultipleRowSelection";
import PaginationSortComp from "../Tables/PaginationSortTable/PaginationSortComp";
import SearchTables from "../Tables/SearchTables/SearchTables";



const AdvancedTables = () => {
    return (
        <div className="space-y-10">
            <PaginationSortComp></PaginationSortComp>
            <SearchTables></SearchTables>
            <MultipleRowSelection></MultipleRowSelection>
        </div>
    );
};

export default AdvancedTables;