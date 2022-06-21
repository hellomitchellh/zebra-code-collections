document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-trek-mw-api.herokuapp.com/api/${alienName}`)
        
        const data = await response.json()
        document.querySelector('#alienName').innerText = data.speciesName
        document.querySelector('#alienWorld').innerText = data.homeworld
        document.querySelector('#alienFeatures').innerText = data.features
        document.querySelector('#alienFacts').innerText = data.interestingFact
        document.querySelector('#alienExamples').innerText = data.notableExamples

        document.querySelector('#alienImage').src = data.image
        document.querySelector('#alienCaption').innerText = data.speciesName

    } catch(error){
        console.log(error)
    }
}