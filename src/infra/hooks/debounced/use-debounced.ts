import {
  useDebouncedCallback,
  useDebounce as useDebounceLibrary,
} from 'use-debounce'

export const useDebounce = () => {
  return {
    debouncedCallback: useDebouncedCallback,
    debounce: useDebounceLibrary,
  }
}
