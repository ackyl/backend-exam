const router = require('express').Router()
const conn = require('../connection')


//ADD MOVIE
router.post('/movies', (req, res) => {
    const sql = `INSERT INTO movies SET ?`
    const sql2 = `SELECT * FROM movies WHERE id = ?`
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

//UPDATE MOVIE
router.patch('/movies/:id', (req, res) => {
    const sql = `UPDATE movies SET ? WHERE id = ${req.params.id}`
    const data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//DELETE MOVIE
router.delete('/movies/:id', (req, res) => {
    const sql = `DELETE FROM movies WHERE id = ?`
    const data = req.params.id

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//SHOW ALL MOVIES
router.get('/movies', (req, res) => {
    const sql = `SELECT * FROM movies`
    
    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


module.exports = router