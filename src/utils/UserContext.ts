import { createContext, SetStateAction, Dispatch } from 'react'

export type UseState<T> = [T, Dispatch<SetStateAction<T>>]

export interface UserContextInterface {
    stringChanger: UseState<string>
    numChanger: UseState<number>
}

export const UserContext = createContext<UserContextInterface>({
    stringChanger: ['', () => ''],
    numChanger: [0, () => 0],
})
