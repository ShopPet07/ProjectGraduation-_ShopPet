const initState = {
  user: {
    id: "0",
    name: "MR. Manh Hyy’S",
    email: "",
    address: "RG, Kien Giang",
  },
  filters: {
    search: "",
    category: "All",
  },
  posts: [
    {
      id: 0,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "Anh huy dep trai hahah ahsdpas ",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 1,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 2,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 3,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 4,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 5,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Cats",
    },
  ],
  carts: [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU",
      name: "Lorem ajsdi as...",
      user: "UserName",
      status: "True",
      price: 1200,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU",
      name: "Lorem ajsdi as...",
      user: "UserName",
      status: "True",
      price: 1200,
    },
  ],
  postsUser: [
    {
      id: 0,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "Anh huy dep trai hahah ahsdpas ",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
    {
      id: 1,
      title: "Abigail",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      desc: "Anh huy dep trai hahah ahsdpas ",
      user: "huypham",
      number: "+84 07837238",
      status: true,
      price: 1200,
      amount: 1,
      species: "species",
      category: "Dogs",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "posts/addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "cartUser/addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "filters/changeTextSearch":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    case "filters/changeCategorySearch":
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    default:
      return state;
  }
};

export default rootReducer;
