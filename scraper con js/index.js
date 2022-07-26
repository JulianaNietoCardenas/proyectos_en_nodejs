const PORT = 8000
const url = "https://www.theguardian.com/uk"

const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

// inicializar express
const app = express()

// escuchar


// obtener html
axios(url)
    .then(response => {
        const html = response.data

        

        const $ = cheerio.load(html)

        const articles = []

        $(".fc-item__content", html).each(function() {
            const title = ($(this).text()).replace(/(\r\n|\n|\r)/gm, '')
            const link = $(this).find("a").attr("href")
            
            console.log(typeof(title))

            articles.push({
                title,
                link
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))