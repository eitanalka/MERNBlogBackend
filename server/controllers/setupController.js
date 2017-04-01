import db from './../models';

const setupController = {};

setupController.get = (req, res) => {
  const starterPosts = [
    {
      title: 'Test',
      category: 'Test',
      content: 'apoghepoagh'
    },
    {
      title: 'Test',
      category: 'Test',
      content: 'apoghepoagh'
    },
    {
      title: 'Test',
      category: 'Test',
      content: 'apoghepoagh'
    }
  ];
  db.Post.create(starterPosts).then((posts) => {
    return res.status(200).json({
      success: true,
      data: posts
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

export default setupController;
