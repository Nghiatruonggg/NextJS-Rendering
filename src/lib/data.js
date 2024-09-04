// const users = [
//   {
//     id: 1,
//     name: "user1",
//   },
//   {
//     id: 2,
//     name: "user2",
//   },
// ];

// const posts = [
//   {
//     id: 1,
//     title: "posts 1",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "posts 2",
//     userId: 1,
//   },
//   {
//     id: 3,
//     title: "posts 3",
//     userId: 1,
//   },
// ];

// /* Create promise */

// // Post Listing
// export const getPosts = async () => {
//   return posts;
// };

// export const getPost = async (slug) => {
//   return posts.filter(({id}) => id == slug)
// }

import { Post, User } from "./model";
import { connectToDb } from "./until";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};