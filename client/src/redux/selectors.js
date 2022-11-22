import { createSelector } from "reselect";

export const userSelector = (state) => state.user.data;
export const getPosts = (state) => state.posts.postList;
export const getCarts = (state) => state.cart;
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
        return post.description
          .toLowerCase()
          .includes(textChange.toLowerCase());
      }
      return (
        post.description.toLowerCase().includes(textChange.toLowerCase()) &&
        post.species.toLowerCase().includes(category.toLowerCase())
      );
    });
  }
);
