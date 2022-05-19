module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      created_at: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.STRING
      },
      story_text: {
        type: Sequelize.TEXT
      },
      comment_text: {
        type: Sequelize.TEXT
      },
      num_comments: {
        type: Sequelize.INTEGER
      },
      story_id: {
        type: Sequelize.INTEGER
      },
      story_title: {
        type: Sequelize.STRING
      },
      story_url: {
        type: Sequelize.STRING
      },
      parent_id: {
        type: Sequelize.INTEGER
      },
      created_at_i: {
        type: Sequelize.INTEGER
      },
      objectID: {
        type: Sequelize.INTEGER
      }
    //   is_article: {
    //       type: Sequelize.BOOL
    //   }
    });
    return Article;
  };