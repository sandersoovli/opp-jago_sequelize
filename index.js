const express = require('express');
const app = express();

const articleRouter = require('./routes/article');
const ArticleController = require('./controllers/article');

// Middleware JSON parsinguks
app.use(express.json());

app.get('/', ArticleController.getAllArticles);

// Kõik artiklid root URL-is suunatakse routerisse
app.use('/article', articleRouter);

// Server start
app.listen(3025, () => {
  console.log('Server is running at http://localhost:3025');
});
