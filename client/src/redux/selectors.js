import { createSelector } from "reselect";

export const userSelector = (state) => state.user.data;
export const getPosts = (state) => state.posts.postList;
export const getCarts = (state) => state.cart.listData;
export const getMyCart = (state) => state.postsUser;
export const textChangeSelector = (state) => state.filters.search;
export const categoryChangeSelector = (state) => state.filters.category;
export const postLoading = (state) => state.posts.status;

export const potsRemaining = createSelector(
  getPosts,
  textChangeSelector,
  categoryChangeSelector,
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
