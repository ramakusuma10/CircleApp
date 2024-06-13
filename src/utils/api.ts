import { ThreadType } from '../types/types'
import dummy from '../data/datadummy.json'

export function getThreads(): ThreadType[] {
    return dummy.data.Threads
}

export function getThread(id: number): ThreadType | undefined {
    const Threads: ThreadType[] = dummy.data.Threads

    return Threads.find((Thread) => Thread.id === id)
}