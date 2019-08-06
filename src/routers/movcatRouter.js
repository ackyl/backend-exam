const router = require('express').Router()
const conn = require('../connection')

//ADD
router.post('/movcat', (req, res) => {
    const sql = `INSERT INTO movcat SET ?`
    const sql2 = `SELECT * FROM movcat WHERE id = ?`
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

//DELETE
router.delete('/movcat/:id', (req, res) => {
    const sql = `DELETE FROM movcat WHERE id = ?`
    const data = req.params.id

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//DISPLAY CONNETION
router.get('/movcat', (req,res) => {
    const sql = `SELECT m.nama AS 'Nama Movie', c.nama AS 'Nama Category'
    FROM movies m JOIN movcat x ON m.id = x.movie_id
    JOIN categories c ON x.category_id = c.id;`

    conn.query(sql, (err,result) => {
        if(err) return res.send(err)
        
        res.send(result)
    })
})

module.exports = router