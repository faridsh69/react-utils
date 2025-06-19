import { useCallback } from 'react'
import { usePathAtom } from 'hooks/usePathAtom'
import { useAtom } from 'jotai'

import { BreadCrumbProps } from './BreadCrumb.types'
import styles from './BreadCrumb.module.scss'

export const BreadCrumb = (props: BreadCrumbProps) => {
  const { options = [] } = props

  const [, setPath] = useAtom(usePathAtom)
  const onChangePath = useCallback((path: string) => {
    window.history.pushState({}, '', path)
    setPath(path)
  }, [])

  return (
    <div className={styles.wrapper}>
      {options.map(option => {
        const { label, path } = option
        return (
          <a key={path} onClick={() => onChangePath(path)} className={styles.link}>
            {label}
          </a>
        )
      })}
    </div>
  )
}
