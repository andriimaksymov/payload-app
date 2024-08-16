import type { AfterReadHook } from 'payload/dist/collections/config/types'

export const populateArchiveBlock: AfterReadHook = async ({ doc }) => {
  return {
    ...doc,
  }
}
