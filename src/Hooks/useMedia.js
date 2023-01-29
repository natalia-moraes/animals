import React from 'react'

//Esse cara funciona como se fosse o @media do css, consigo ver se é verdadeiro ou falso o tamanho da media que vou passar

const useMedia = (media) => {
    const [match, seMatch] = React.useState(null);

    React.useEffect(() => {
        function changeMatch() {
            const { matches } = window.matchMedia(media);
            seMatch(matches);
        }
        changeMatch();
        window.addEventListener('resize', changeMatch);
        
        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [media]);

  return match;
}

export default useMedia
