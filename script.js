function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const theme=document.getElementById('theme');
    if(document.body.classList.contains('dark-mode')){
        theme.innerText='Dark Mode';
    }else{
        theme.innerText='Light Mode';
    }
       
}

window.addEventListener('load', async ()=>{
    const peter= await fetchApiData('https://api.github.com/users/Pe-te-r')
    const ifan= await fetchApiData('https://api.github.com/ifan3735')
    const Daniel= await fetchApiData('https://api.github.com/Daniel-Kav')
    const victor= await fetchApiData('https://api.github.com/victorNjeru49')


    
    const peterName=document.getElementById('peter')
    const peterFollowers=document.getElementById('peterFollowers')
    peterName.innerText = peter['name']
    peterFollowers.innerText=peter['followers']


    const ifanName=document.getElementById('ifan')
    const ifanFollowers=document.getElementById('ifanFollowers')
    ifanName.innerText = ifan['name']
    ifanFollowers.innerText=ifan['followers']

    const DanielName=document.getElementById('daniel')
    const DanielFollowers=document.getElementById('danielFollowers')
    DanielName.innerText = Daniel['name']
    DanielFollowers.innerText=Daniel['followers']

    const victorName=document.getElementById('victor')
    const victorFollowers=document.getElementById('victorFollowers')
    victorName.innerText = victor['name']
    victorFollowers.innerText=victor['followers']

    const peterFollowing=document.getElementById('peterFollowing')
    const ifanFollowing=document.getElementById('ifanFollowing')
    const DanielFollowing=document.getElementById('danielFollowing')
    const victorFollowing=document.getElementById('victorFollowing')

    peterFollowing.innerText=peter['following']
    ifanFollowing.innerText=ifan['following']
    DanielFollowing.innerText=Daniel['following']
    victorFollowing.innerText=victor['following']

    const peterRepos=document.getElementById('peterRepo')
    const danielRepos=document.getElementById('danielRepo')
    const ifanRepos=document.getElementById('ifanRepo')
    const victorRepos=document.getElementById('victorRepo')

    peterRepos.innerText=peter['public_repos']
    danielRepos.innerText=Daniel['public_repos']
    ifanRepos.innerText=ifan['public_repos']
    victorRepos.innerText=victor['public_repos']



})

async function fetchApiData(url){
    const response=await fetch(url);
    const data=await response.json();
    // console.log(data);
    return data
}