import { useState, useEffect } from "react";

const ListItems = [
  "James",
  "Robert",
  "John",
  "Michael",
  "David",
  "William",
  "Richard",
  "Joseph",
  "Thomas",
  "Christopher",
  "Charles",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Andrew",
  "Paul",
  "Joshua",
  "Kenneth",
  "Kevin",
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    DisplaList(ListItems, currentPage);
  }, [currentPage]);

  const DisplaList = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    return paginatedItems.map((item, index) => (
      <div key={index} className="item">
        {item}
      </div>
    ));
  };

  const setupPagination = () => {
    const pageCount = Math.ceil(ListItems.length / itemsPerPage);
    const paginationButtons = [];

    for (let i = 1; i < pageCount; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return paginationButtons;
  };

  return (
    <>
        <header>
            <h1>Pagination App</h1>
        </header>
        <main>
            <div className="list" id="list">
                {DisplaList(ListItems, currentPage)}
            </div>
            <div id="pagination" className="pagenumbers">
                {setupPagination()}
            </div>
        </main>
    </>
  );
};

export default Pagination;
