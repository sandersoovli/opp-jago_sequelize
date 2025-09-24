const db = require('../models');
const Article = db.Article;

class ArticleController {

    // kõik artiklid
    async getAllArticles(req, res) {
        try {
            const articles = await Article.findAll();
            res.json(articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
            res.status(500).json({ error: 'An error occurred while fetching articles' });
        }
    }

    // artikkel slug-i järgi
    async getArticleBySlug(req, res) {
        try {
            const article = await Article.findOne({ where: { slug: req.params.slug } });
            if (article) {
                res.json(article);
            } else {
                res.status(404).json({ error: 'Article not found' });
            }
        } catch (error) {
            console.error('Error fetching article:', error);
            res.status(500).json({ error: 'An error occurred while fetching the article' });
        }
    }
}

module.exports = new ArticleController();
