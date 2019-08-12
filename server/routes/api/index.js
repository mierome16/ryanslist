const router = require('express').Router()
const conn = require('../../db')

router.get('/subcategories', (req, res, next) => {

  const subcatsql = `
  SELECT name,id,parent_id,slug
  FROM categories
  `

  conn.query(subcatsql, (error,results,fields) => {
    res.json(results)
  })
})

router.get('/categories', (req, res, next) => {

  const catsql = `
  SELECT name, id, parent_id, slug
  FROM categories
  WHERE parent_id is null
  `

  conn.query(catsql, (error,results,fields) => {
    res.json(results)
  })
})
router.get('/allcat', (req, res, next) => {
  const allsql = `
  SELECT *
  FROM categories
  WHERE parent_id IS NOT NULL
  `
  conn.query(allsql, (error,results,fields) => {
    res.json(results)
  })
})
router.get('/getPostings', (req, res, next) => {
  conn.query(`SELECT * FROM postings WHERE category LIKE '%${req.query.category}%'`, function(error, results, fields) {
    res.json(results)
    console.log(req.query.category)
  })
})


router.get('/addPost', (req,res,next) => {
  // const addpostsql = `
  // INSERT INTO postings (title, price, city, content, category) VALUES ("${req.query.title}", ${req.query.price}, "${req.query.city}", "${req.query.content}", "${req.query.category}" )
  // `
  console.log(req.query.title)
  conn.query(`INSERT INTO postings (title, price, city, content, category) VALUES ("${req.query.title}", ${req.query.price}, "${req.query.city}", "${req.query.content}", "${req.query.category}" )`, (error,results,fields) => {
    if (error) throw error;
    console.log(results)
    res.send(results)
  })
})



module.exports = router