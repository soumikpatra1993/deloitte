const axios = require("axios")


exports.renderHomePage = (req, res) => {
 axios.get(" http://localhost:3004/furniture")
 .then((items) => {
   console.log(items.data)
  res.render("index" ,{
    listing : items.data,
  })
 })
 .catch(() => {
  res.render("index" ,{
    error : 'Something went wrong fetching data',
  })
 })

}


