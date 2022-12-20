const bNewQuote = document.querySelector('#bNewQuote'); 
const main = document.querySelector('main');
const divResponse = document.createElement('blockquote');
divResponse.className = 'Response';
divResponse.setAttribute('cite', 'https://thatsthespir.it/')

const divAuthor = document.createElement('div');
divAuthor.className = 'Author';

const divImg = document.createElement('img');
divImg.className = 'Img';

    window.addEventListener('load', fetchQuote);
    bNewQuote.addEventListener('click', fetchQuote);
       
        async function fetchQuote(){
            const response = await fetch("https://thatsthespir.it/api");
            let quoteJson = await response.json();


                divResponse.innerHTML = ( '"' + quoteJson.quote + ' "');
                divAuthor.innerHTML = quoteJson.author;
                divImg.src = quoteJson.photo;
                
         /*   catch (error){
                console.log("There was an error!", error);
            };*/

            };

                main.append(divImg);   
                main.append(divResponse);
                main.append(divAuthor);   
                    
            


/*const bNewQuote = document.querySelector('#bNewQuote'); 
const main = document.querySelector('main');

    bNewQuote.addEventListener('click', function() {
        const fetchQuote = () => fetch("https://thatsthespir.it/api");

        fetchQuote()


        .then((response) => response.json())
        .then((json) => {        
        
            const divResponse = document.createElement('div');
            divResponse.className = 'Response';

            const divAuthor = document.createElement('div');
            divAuthor.className = 'Author';

            divResponse.innerHTML = json.quote;
            divAuthor.innerHTML = json.author;
        
            divResponse.append(divAuthor);

            main.append(divResponse);
            


            
          
        })
        
        .catch((error) => {
            console.log("There was an error!", error);
        });   
    });
  
    */