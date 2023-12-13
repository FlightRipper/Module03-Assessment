import User from './UserModel.js';
import Article from './ArticleModel.js';

class articleController {

  static async createArticle(req, res) {
    try {
        const user = await User.findByPk(req.params.userId);
        const image = req.file.filename;
    
        // Create a new donation
        const newArticle = await Article.create({
            ...req.body, image: image
        });

        await newArticle.setUser(user);
        
        // Send a successful response
        res.status(201).json(newArticle);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }    

  static async getAllArticles(req, res) {
    try {
      const articles = await Article.findAll({
        include: [
          { model: User, attributes: ['username'] },
        ],
      });
      if (articles.length === 0) {
        res.status(404).json('there are no available articles');
      }
      res.status(200).json({articles: articles});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteArticle(req, res) {
    try {
      const deletedArticle = await Article.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!deletedArticle) {
        res.status(404).json('the Donation was not found');
      }
      res.status(200).json({ deletedArticle });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findArticleById(req, res) {
    try {
      const article = await Article.findByPk(req.params.id);
      if (!article) {
        res.status(404).json('Donation not found');
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async updateArticle(req, res) {
    try {
      const oldArticle = await Article.findByPk(req.params.id);
      const oldImage = oldArticle.image;

      const newData = { ...req.body };

      if (req?.file?.filename) {
        newData.image = req?.file?.filename;
      }

      const [updatedArticle] = await Campaign.update(newData, {
        where: {
          id: req.params.id,
        },
      });

      if (!updatedArticle) {
        return res.status(404).json("please enter the fields you want to edit");
      }

      if (oldImage) {
        const oldImagePath = path.join("/uploads", "uploads", oldImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        } else {
          console.error("File not found:", oldImagePath);
        }
      }
      const newArticle = await Article.findByPk(req.params.id);

      return res.status(200).json(newArticle);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default articleController;