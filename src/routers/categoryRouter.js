const router = require('express').Router()
const conn = require('../connection')

//ADD category
router.post('/categories', (req, res) => {
    const sql = `INSERT INTO categories SET ?`
    const sql2 = `SELECT * FROM categories WHERE id = ?`
    const data = req.body

    // INSERT
    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        // SELECT
        conn.query(sql2, result.insertId, (err, result2) => {
            if(err) return res.send(err)

            // SELECT memberikan result dalam bentuk array
            res.send(result2[0])
        })
    })
})

//UPDATE category
router.patch('/categories/:id', (req, res) => {
    const sql = `UPDATE categories SET ? WHERE id = ${req.params.id}`
    const data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//DELETE category
router.delete('/categories/:id', (req, res) => {
    const sql = `DELETE FROM categories WHERE id = ?`
    const data = req.params.id

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//SHOW ALL categories
router.get('/categories', (req, res) => {
    const sql = `SELECT id as Id, nama as Nama FROM categories`
    
    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = router