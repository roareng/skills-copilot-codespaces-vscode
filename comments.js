// Create web server
// Create a new express application
const express = require('express');
const app = express();
const port = 3000;
// Create a new router
const router = express.Router();
// Create a new comment
router.post('/comments', (req, res) => {
  res.send('Create a new comment');
});
// Read all comments
router.get('/comments', (req, res) => {
  res.send('Read all comments');
});
// Read a comment
router.get('/comments/:id', (req, res) => {
  res.send('Read a comment');
});
// Update a comment
router.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});
// Delete a comment
router.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});
// Use the router
app.use(router);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});