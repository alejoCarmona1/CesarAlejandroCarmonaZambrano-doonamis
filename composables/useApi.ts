import axios from "axios";

export default async function (consult :String, optionals :String = '') {
    return await axios
    .get( 'https://api.themoviedb.org/3/' + consult + '?api_key=2f35bc9ba59898e2ef38372eeaec72a7' + optionals );
}