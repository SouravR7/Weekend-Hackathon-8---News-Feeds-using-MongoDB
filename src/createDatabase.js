const { newsArticleModel } = require('./connector')
const { data } = require('./data')

const refreshAll = async () => {
    await newsArticleModel.deleteMany({})
    // console.log(connection)
    await newsArticleModel.insertMany(data)
}
refreshAll()