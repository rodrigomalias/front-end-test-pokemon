import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Container, LoadingContainer, Title } from './styles'

export const PokemonList: React.FC = () => {
  const { pokemonList, isLoading, handleGetPokemonList, handleGetPokemon } = useGlobalContext()

  if(isLoading) {
    return (
      <LoadingContainer>
        <ClipLoader
          color={'green'}
          loading={isLoading}
          size={50}
        />
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Title>Pokédex</Title>
    </Container>
  )
}
