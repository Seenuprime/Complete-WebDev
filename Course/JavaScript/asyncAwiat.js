function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name: 'Hello', url: 'www.example.com'});
    }, 2000)
})
}

async function displayData(){
    try{
        const data = await fetchData();
        console.log(`Fetched Data: Name - ${data.name}, URL - ${data.url}`);    
    }
    catch(error){
        console.log('Error:', error);
    }  
}

displayData();