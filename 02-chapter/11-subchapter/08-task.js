if (x || 0) {
    console.log( 'first' )
}; // first
if (-1 && 0) {
    console.log( 'second' )
}; // Не выполнится
if (null || -1 && 1) {
    console.log( 'third' )
}; // third