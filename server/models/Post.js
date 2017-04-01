import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: String,
  category: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);
export default Post;
