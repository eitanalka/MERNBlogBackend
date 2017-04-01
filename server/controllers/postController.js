import db from './../models';

const postController = {};

postController.getAll = (req, res) => {
  db.Post.find({}, '_id title category').limit(40).then((posts) => {
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

postController.get = (req, res) => {
  db.Post.findById({ _id: req.params.id}).then((post) => {
    return res.status(200).json({
      success: true,
      data: post
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

postController.post = (req, res) => {
  const {
    title,
    category,
    content
  } = req.body;

  const post = new db.Post({
    title,
    category,
    content
  });

  post.save().then((newPost) => {
    return res.status(200).json({
      success: true,
      data: newPost
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

postController.delete = (req, res) => {
  db.Post.findByIdAndRemove(req.params.id).then((post) => {
    return res.status(200).json({
      success: true,
      data: post
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

export default postController;
