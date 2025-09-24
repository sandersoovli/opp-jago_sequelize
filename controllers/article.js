const db = require('../models');
const Article = db.Article;
const Author = db.Author;
const Tag = db.Tag;
const { Op } = require('sequelize');

class ArticleController {

    // kõik artiklid koos autori nimega
    async getAllArticles(req, res) {
        try {
            const articles = await Article.findAll({
                include: [
                    {
                        model: Author,
                        as: 'author',         // peab vastama Article.js assotsiatsiooni nimele
                        attributes: ['name']  // toob ainult autori nime
                    },
                   {
                    model: db.Tag,
                    as: 'tags',
                    attributes: ['name']
                   } 
                ]
            });
            res.json(articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
            res.status(500).json({ error: 'An error occurred while fetching articles' });
        }
    }

    // konkreetne artikkel slug-i järgi koos autori nimega
    async getArticleBySlug(req, res) {
    try {
        const article = await Article.findOne({
            where: { slug: req.params.slug },
            include: [
                { model: Author, as: 'author', attributes: ['name'] },
                { model: db.Tag, as: 'tags', attributes: ['name'] } // õige süntaks
            ]
        });

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
