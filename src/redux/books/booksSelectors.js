export const selectBooks = state => state.books.books;
export const selectCurrentPage = state => state.books.page;
export const selectPerPage = state => state.books.perPage;
export const selectTotalPage = state => state.books.totalPages;
export const selectNewBooks = state => state.books.newBooks;
export const selectReadBook = state => state.books.readBook;
export const selectOwnBook = state => state.books.ownBook;
export const selectIsLoading = state => state.books.isLoading;