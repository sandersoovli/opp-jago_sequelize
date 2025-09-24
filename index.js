const express = require('express');
const app = express();

// Middleware JSON parsinguks (enne kõiki ruutereid)
app.use(express.json());

// Admin CRUD route-id
const adminRoutes = require('./routes/admin/article'); // tee sinu routes/admin/article.js failile
app.use('/admin', adminRoutes);

// Avalikud artikli ja autori route-id
const articleRouter = require('./routes/article');
const ArticleController = require('./controllers/article');
app.get('/', ArticleController.getAllArticles);
app.use('/article', articleRouter);
app.use('/author', require('./routes/author'));

// Server start
app.listen(3025, () => {
  console.log('Server is running at http://localhost:3025');
});
