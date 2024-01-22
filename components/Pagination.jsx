const Pagination = (props) => {

    const pagesCount = Math.ceil(props.length / props.itemsPerPage)
    const pages = []

    for(let i=1; i<= pagesCount; i++)
    {
        pages.push(i)
    }

    return ( 
        <div className="flex justify-center items-center pagination">
            <ul className="flex text-white items-center">
                <li className={(props.currentPage === 1 ? "invisible" : null)} onClick={() => props.onPageChanged(props.currentPage - 1)}>
                    <button className="page-link"  >&laquo;</button>
                </li>
                {pages.map(page => (
                    <li key={page} className={"relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-950 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white " + (props.currentPage === page ? " active" : null)} onClick={() => props.onPageChanged(page)}>
                        <button className="page-link" >{page}</button>
                    </li>
                ))}
                <li className={(props.currentPage === pagesCount ? "invisible" : null)} onClick={() => props.onPageChanged(props.currentPage + 1)}>
                    <button className="page-link" >&raquo;</button>
                </li>
            </ul>
        </div>
     );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
    const start = currentPage * itemsPerPage - itemsPerPage
    //              3         * 10          -   10          =   20  
    return items.slice(start, start + itemsPerPage)
    // arr.slice(debut, fin)
}

export default Pagination;