import ExpandRow from "../Tables/ExpandRow/ExpandRow";
import MultipleRowSelection from "../Tables/MultipleRowSelection/MultipleRowSelection";
import PaginationSortComp from "../Tables/PaginationSortTable/PaginationSortComp";
import SearchTables from "../Tables/SearchTables/SearchTables";



const AdvancedTables = () => {
    return (
        <div className="space-y-12">
            <PaginationSortComp></PaginationSortComp>
            <SearchTables></SearchTables>
            <MultipleRowSelection></MultipleRowSelection>
            <ExpandRow></ExpandRow>
        </div>
    );
};

export default AdvancedTables;