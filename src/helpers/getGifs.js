export const getGifs = async ( category )   =>{

    const api_key = 'kyCB5R1vWjdJs8Ol2Fwh5U0J2SMU8gJK';
    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=${api_key}`;

    const resp = await  fetch(url);

    const { data} = await resp.json();

    const gif = data.map( img=>{


        return{ 
            id: img.id,
            title: img.title,
            img:img.images.downsized_medium.url
        };

    })

   
    return gif;

}