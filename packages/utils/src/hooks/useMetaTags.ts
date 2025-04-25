import { useEffect } from 'react'

import { useDebounceValue } from './useDebounceValue'

export const useMetaTags = (props: {
  title?: string
  description?: string
  dependencies?: any[]
}) => {
  const { title: propTitle, description, dependencies = [] } = props

  const title = useDebounceValue(propTitle)

  useEffect(() => {
    if (!title) return

    document.title = title
    document.querySelector("meta[property='og:title']")?.setAttribute('content', title)
    document.querySelector("meta[property='twitter:title']")?.setAttribute('content', title)

    if (description) {
      document
        .querySelector("meta[property='og:description']")
        ?.setAttribute('content', description)
    }
  }, [title, description, ...dependencies])
}
