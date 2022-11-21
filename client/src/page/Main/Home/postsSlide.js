// const initState = {
//   posts: [
//     {
//       id: 0,
//       title: "Abigail",
//       image:
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
//       desc: "Anh huy dep trai hahah ahsdpas ",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 1,
//       title: "Abigail",
//       image:
//         "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 2,
//       title: "Abigail",
//       image:
//         "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 3,
//       title: "Abigail",
//       image:
//         "https://d.newsweek.com/en/full/1979380/dog-running-through-autumn-leaves.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 4,
//       title: "Abigail",
//       image:
//         "https://media.nature.com/lw767/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 5,
//       title: "Abigail",
//       image:
//         "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Cats",
//     },
//     {
//       id: 11,
//       title: "Abigail",
//       image:
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
//       desc: "Anh huy dep trai hahah ahsdpas ",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 6,
//       title: "Abigail",
//       image:
//         "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 7,
//       title: "Abigail",
//       image:
//         "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 8,
//       title: "Abigail",
//       image:
//         "https://d.newsweek.com/en/full/1979380/dog-running-through-autumn-leaves.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 9,
//       title: "Abigail",
//       image:
//         "https://media.nature.com/lw767/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Dogs",
//     },
//     {
//       id: 10,
//       title: "Abigail",
//       image:
//         "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
//       desc: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal.",
//       user: "huypham",
//       number: "+84 07837238",
//       status: true,
//       price: 1200,
//       amount: 1,
//       species: "species",
//       category: "Cats",
//     },
//   ],
// };

// const postsSlide = (state = initState, action) => {
//   switch (action.type) {
//     case "posts/addPost":
//       return {
//         posts: [...state, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default postsSlide;
