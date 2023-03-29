import axios from "axios"

export const getPokemonList = async () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21`)
}

export const getPokemon = async (parametro: string) => {
  var nome = parametro
  return axios.get('https://pokeapi.co/api/v2/pokemon/' + nome)
}