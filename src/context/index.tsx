import React, { createContext, ReactNode, useCallback, useState } from 'react'

export interface GlobalContextProps {
  pokemonList: any
  setPokemonList: any
  isLoading: any
  isLoadingPokemon: any
  setIsLoading: any
  handleGetPokemonList: any
  pokemon: any
  setPokemon: any
  handleGetPokemon: any
}

interface GlobalProviderProps {
  children: ReactNode
}

let defaultValue = {}

const GlobalContext = createContext<GlobalContextProps>({ ...defaultValue } as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  const [pokemonList, setPokemonList] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false)
  const [pokemon, setPokemon] = useState()

  const handleGetPokemon = useCallback(async (name: string) => {
    try {
      setIsLoadingPokemon(true)
      setIsLoadingPokemon(false)
    } catch (error) {
      setIsLoadingPokemon(false)
    }
  }, [])

  const handleGetPokemonList = useCallback(async () => {
    try {
      setIsLoading(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        handleGetPokemonList,
        isLoading,
        setIsLoading,
        isLoadingPokemon,
        handleGetPokemon,
        pokemon,
        setPokemon
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = (): GlobalContextProps => {
  return React.useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider, useGlobalContext }
