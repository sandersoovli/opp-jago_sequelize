const db = require('../models');
const Author = db.Author;

class AuthorController {
  async getArticlesByAuthor(req, res) {
    try {
      const authorId = req.params.id;

      // Leia autor primaarvõtme järgi ja loe koos artiklitega
      const author = await Author.findByPk(authorId, {
        include: [{
          model: db.Article,
          as: 'articles'
        }]
      });

      if (!author) {
        return res.status(404).json({ error: 'Author not found' });
      }

      res.json(author);
    } catch (error) {
      console.error('Error fetching author articles:', error);
      res.status(500).json({ error: 'An error occurred while fetching articles' });
    }
  }
}

module.exports = new AuthorController();
