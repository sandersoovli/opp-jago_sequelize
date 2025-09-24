const db = require('../../models');
const Article = db.Article;

class ArticleAdminController {

    // CREATE: lisa uus artikkel
    createArticle = async (req, res) => {
        try {
            const { name, slug, image, body, author_id } = req.body;

            const newArticle = await Article.create({
                name,
                slug,
                image,
                body,
                author_id,
                published: new Date()
            });

            res.status(201).json({
                message: 'Artikkel lisatud edukalt',
                newArticle
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Artikli lisamine ebaõnnestus' });
        }
    }

    // UPDATE: muuda olemasolevat artiklit
    updateArticle = async (req, res) => {
        const { id } = req.params;

        if (req.method === 'GET') {
            try {
                const article = await Article.findByPk(id);
                if (!article) return res.status(404).json({ message: 'Artikkel ei leitud' });
                res.json(article);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Viga artikli toomisel' });
            }
        } else if (req.method === 'POST') {
            try {
                const { name, slug, image, body, author_id } = req.body;

                const updated = await Article.update(
                    { name, slug, image, body, author_id },
                    { where: { id } }
                );

                res.json({
                    message: 'Artikkel uuendatud edukalt',
                    affectedRows: updated[0]
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Viga artikli uuendamisel' });
            }
        }
    }

    // DELETE: kustuta artikkel
    deleteArticle = async (req, res) => {
        const { id } = req.params;

        try {
            const deleted = await Article.destroy({ where: { id } });

            if (deleted === 0) {
                return res.status(404).json({ message: 'Artikkel ei leitud' });
            }

            res.json({
                message: 'Artikkel kustutatud edukalt',
                affectedRows: deleted
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Viga artikli kustutamisel' });
        }
    }

}

module.exports = new ArticleAdminController();
