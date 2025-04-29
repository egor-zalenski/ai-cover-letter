import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


export interface PageTitleState {
  title: string;
  // actions
  setTitle: (title: string) => void;
}

export const usePageTitleStore = create<PageTitleState>()(
  immer((set) => ({
    title: '',

    setTitle: (title) => {
      set((state) => {
        state.title = title
        document.title = title
      })
    },
  }))
) 