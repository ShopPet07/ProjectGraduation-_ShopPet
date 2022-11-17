export const addPost = (data) => {
  return {
    type: "posts/addPost",
    payload: data,
  };
};
export const changeTextSearch = (text) => {
  return {
    type: "filters/changeTextSearch",
    payload: text,
  };
};

export const changeCategory = (category) => {
  return {
    type: "filters/changeCategorySearch",
    payload: category,
  };
};
