let request = require('request-promise')
let fs = require('fs')  // 前端和浏览器打交道  后端和操作系统(I/O)、网络、硬件打交道
const cheerio = require('cheerio')
let url = 'https://movie.douban.com/top250'
let movies = []
const main = async() =>  {
    let html = await request({
        url
    })
    // console.log(html);
    let $ = cheerio.load(html)  // 内存中构造一个dom树
    let movieNodes = $('#content .article .grid_view').find('.item')
    // console.log(movieNodes);
    for ( movieNodes of movieNodes) {
        let item = cheerio.load(movieNodes)
        let titles = $('.info .hd span')
        titles = [].map.call(titles, t => {
            return $(t).text()
        })
        console.log(titles);
        let bd = $('.info .bd')
        let info = bd.find('p').text()
        let score = bd.find('.star .rating_num').text()
        if (titles) {
            movies.push({titles, info, score})
        }
    }
    // console.log(movies);
    fs.writeFile('./output.json', JSON.stringify(movies), 'utf-8', () => {
        // console.log('生成json文件成功');
    })
}

main()