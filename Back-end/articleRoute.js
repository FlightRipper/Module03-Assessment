import express from 'express';
import articleController from './articleController.js';
import upload from './multermiddleware.js';

const articleRouter = express.Router();

// Create a new campaign
articleRouter.put('/:userId', upload.single('image'), articleController.createArticle);

// Get all campaigns
articleRouter.get('/', articleController.getAllArticles);

//get a campaign by ID
articleRouter.get('/:id', articleController.findArticleById);

//update campaign
articleRouter.patch('/:id', upload.single('image'), articleController.updateArticle);

//delete a campaign
articleRouter.delete('/:id', articleController.deleteArticle);

export default articleRouter;