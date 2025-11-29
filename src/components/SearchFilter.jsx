import React from 'react';

const SearchFilter = ({
    searchQuery,
    setSearchQuery
}) => {
    const handleClearFilters = () => {
        setSearchQuery('');
    };

    const hasActiveFilters = searchQuery;

    return (
        <div className="search-filter-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="🔍 Search by job title, company, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            {hasActiveFilters && (
                <div className="filters-row">
                    <button onClick={handleClearFilters} className="clear-filters-btn">
                        Clear Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchFilter;
