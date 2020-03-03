import React, {useReducer} from 'react'
import PeopleContext from './people-context'
import PeopleReducer from './people-reducer'
import {GET_PEOPLE, GET_PERSON, SET_LOADING} from '../types'

const PeopleState = (props) => {
  const initialState = {
    person: {},
    people: [],
    loading: false
  }

  const [state, dispatch] = useReducer(PeopleReducer, initialState);

  const getPerson = async (id) => {
    dispatch({type: SET_LOADING})
    const resp = await fetch('/assets/data/people.json')
    if (resp.ok) {
      const people = await resp.json()
      dispatch({
        type: GET_PERSON,
        payload: people.find(foundPerson => foundPerson.id === id)
      })
    }
  }

  const getPeople = async () => {
    dispatch({type: SET_LOADING})
    const resp = await fetch('/assets/data/people.json')
    if (resp.ok) {
      const people = await resp.json()
      dispatch({
        type: GET_PEOPLE,
        payload: people
      })
    }
  }

  return <PeopleContext.Provider
      value={{
        person: state.person,
        people: state.people,
        loading: state.loading,
        getPerson,
        getPeople
      }}
    >
    {props.children}
  </PeopleContext.Provider>
}

export default PeopleState
