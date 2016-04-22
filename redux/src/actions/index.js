export function selectBook(book) {
    console.log('book selected: ' + book.title);
    return {
        type: 'BOOK_SELECTED', 
        payload: book
    };
}