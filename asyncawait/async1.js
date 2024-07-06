const fetchQuestions = () => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Questions fetched")
            reject("Error while fetching questions")
        }, 2000)
    })

}

const printQuestions = async()=>{

    console.log("Before calling fetchQuestions")
    const questions = await fetchQuestions()
    console.log(questions)
    console.log("After calling fetchQuestions")


}

printQuestions()


// console.log("Before calling fetchQuestions")
// fetchQuestions().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
// console.log("After calling fetchQuestions")