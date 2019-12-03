window.onload = () => {

    const numbersActionButton=document.getElementById('numbers-action');
    const numbersDisplayList=document.getElementById('numbers-display');
    const languageActionButton=document.getElementById('languageAction');
    const languageDisplayList=document.getElementById('languageDisplay');
    const languagePopularityButton=document.getElementById('languagePopularityAction');
    const languagePopularityList=document.getElementById('languagePopularityDisplay');

    const elfCode = {
        appendToList: (list, value ) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    const languageArray= {
        language:['JavaScript','HTML','CSS','Java','C#','Python','C/C++']
    };

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    const popularLanguages=[
        {
            lang: 'Java',
            rank: 1
        },
        {
            lang: 'Python',
            rank: 2
        },
        {
            lang: 'JavaScript',
            rank: 5
        },
        {
            lang: 'C/CPP',
            rank: 4
        },
        {
            lang: 'PHP',
            rank: 3
        },
        {
            lang: 'C#',
            rank: 6
        },
        {
            lang: 'Swift',
            rank: 7
        }


    ]

    arrays.numbers.sort((a,b) =>a-b);
    languageArray.language.sort();
    popularLanguages.sort(compareRank) ;
    console.log(popularLanguages[1].lang + "it is"+popularLanguages[1].rank);
   

    function compareRank(a,b) {
        const rankA=a.rank;
        const rankB=b.rank;

        let comparison;
        return rankA>rankB?comparison=1:comparison=-1;
    }
  
    numbersActionButton.onclick=function() {
        numbersDisplayList.innerHTML="";
        arrays.numbers.forEach(number => elfCode.appendToList(numbersDisplayList,number))
    }
    
    languageActionButton.onclick=function (){
        languageDisplayList.innerHTML="";
        languageArray.language.forEach(thing => elfCode.appendToList(languageDisplayList, thing))
    }

    languagePopularityButton.onclick=function() {
        languagePopularityList.innerHTML="";
        popularLanguages.forEach(language =>elfCode.appendToList
            (languagePopularityList,language.lang +": "+language.rank));
    }
}