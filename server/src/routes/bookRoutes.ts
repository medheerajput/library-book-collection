import { getBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/bookController';
import express from 'express';
const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
