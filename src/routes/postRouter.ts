

const postRouter = (app)=>{


  // netlify lambda add prefix  /.netlify/functions/server/api/posts

  app.get("/api/posts", (req, res, next)=>{
    res.json({posts: [
      {title: "Dummy post 1", id: 1},
      {title: "Dummy post 2", id: 2},
      {title: "Dummy post 3", id: 3},
      {title: "Dummy post 4", id: 4},
    ]})
  })
}



export default postRouter
module.exports = postRouter