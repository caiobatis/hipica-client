import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

type useStatesReturn<TStates extends string | null> = [
  TStates,
  Dispatch<SetStateAction<TStates>>,
]

type TConditions<TStates extends string | null> = Partial<
  Record<Exclude<TStates, null>, Array<boolean>>
>

function calculateState<TStates extends string | null>(
  defaultState: TStates,
  conditions: TConditions<TStates>,
): TStates {
  const conditionsArray = Object.entries(conditions).reverse() as Array<
    [TStates, Array<boolean>]
  >

  const stateCondition = conditionsArray.find((conditionalObject) => {
    const shouldUpdateState = conditionalObject[1].some(Boolean)

    return shouldUpdateState
  })

  return stateCondition?.[0] ?? defaultState
}

export const useStates = <TStates extends string | null>(
  defaultState: TStates,
  conditions: TConditions<TStates> = {},
): useStatesReturn<TStates> => {
  const [state, setState] = useState<TStates>(
    calculateState(defaultState, conditions),
  )

  const updateState = useCallback(() => {
    const updatedState = calculateState(defaultState, conditions)

    setState(updatedState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultState, ...Object.values(conditions).flat()])

  useEffect(() => updateState(), [updateState])

  return [state, setState]
}
