import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook, addBook } from '../api/booksApi';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Typography,
  Box,
  IconButton,
  TablePagination,
  styled,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Toast from '../components/Toast';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditBookDialog from '../components/EditBookDialog';
import BookDetailsDialog from './BookDetailsDialog';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import AddBookDialog from './AddBookPage';

// Styled components for scrollbar
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 475,
  overflowY: 'auto',
}));

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalBooks, setTotalBooks] = useState(0);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const response = await fetchBooks(page + 1, rowsPerPage);
        setBooks(response.data);
        setTotalBooks(response.total);
      } catch (err) {
        setError('Failed to load books');
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [page, rowsPerPage]);

  const handleDelete = (id) => {
    setBookToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteBook(bookToDelete);
      setBooks(books.filter((book) => book._id !== bookToDelete));
      Toast.success('Book deleted successfully');
    } catch (err) {
      Toast.error('Failed to delete the book');
    }
  };

  const handleEdit = (id) => {
    setCurrentBookId(id);
    setIsEditDialogOpen(true);
  };

  const handleSave = (updatedBookData) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book._id === currentBookId ? { ...book, ...updatedBookData } : book
      )
    );
    setIsEditDialogOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  // Details dialog handlers
  const openDetailsDialog = (book) => {
    setSelectedBook(book);
    setIsDetailsDialogOpen(true);
  };

  const closeDetailsDialog = () => {
    setIsDetailsDialogOpen(false);
    setSelectedBook(null); // Clear selected book
  };

  // Search handling
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset to first page when searching
  };

  // Filtering books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;


  //Add Books
  const handleAddBook = async (bookData) => {
    try {
      await addBook(bookData);
      setBooks((prevBooks) => [...prevBooks, bookData]);
      Toast.success('Book added successfully');
    } catch (err) {
      Toast.error('Failed to add the book');
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Library Book Collection
      </Typography>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <div>
          <Button
            startIcon={<AddIcon />}
            variant="contained" color="primary" onClick={() => setIsAddDialogOpen(true)}>
            Add Book
          </Button>
          <br /><br />
          <Typography variant="h9">
            Total Books {totalBooks}
          </Typography>
        </div>
        <TextField
          variant="outlined"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>

      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBooks.map((book, index) => (
              <TableRow key={book._id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.year}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>
                  <IconButton
                    style={{ marginRight: "5px" }}
                    edge="end"
                    aria-label="view details"
                    onClick={() => openDetailsDialog(book)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    style={{ marginRight: "5px" }}
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(book._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(book._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={totalBooks}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mt: 2 }}
      />

      {/* Add Book */}
      <AddBookDialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={handleAddBook}
      />


      {/* delete confirmation */}
      <DeleteConfirmationDialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this book?"
      />

      {/* Updating book */}
      <EditBookDialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        bookId={currentBookId}
        onSave={handleSave}
      />

      {/* Book Details Dialog */}
      <BookDetailsDialog
        open={isDetailsDialogOpen}
        onClose={closeDetailsDialog}
        book={selectedBook}
      />
    </Box>
  );
};

export default HomePage;
