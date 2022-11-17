import { createSelector } from "reselect";

export const userSelector = (state) => state.user;
export const getPosts = (state) => state.posts;
export const getCarts = (state) => state.carts;
export const getMyPosts = (state) => state.postsUser;
export const textChangeSeletor = (state) => state.filters.search;
export const categoryChangeSeletor = (state) => state.filters.category;

export const todosRemaining = createSelector(
  getPosts,
  textChangeSeletor,
  categoryChangeSeletor,
  (posts, textChange, category) => {
    return posts.filter((post) => {
      if (category === "All") {
        return post.desc.includes(textChange);
      }
      return post.desc.includes(textChange) && post.category.includes(category);
    });
  }
);
