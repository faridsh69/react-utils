import { Children, cloneElement, ReactElement, ReactNode } from 'react'

import styles from './Tooltip.module.scss'

export const getRefrenceWrapper = (children: ReactNode, refrenceProps: object) => {
  if (!children) return <span />

  if (typeof children === 'string') {
    return <span {...refrenceProps}>{children}</span>
  }

  const parent = Children.only(children) as ReactElement

  if (typeof parent.type !== 'string') {
    return (
      <span {...refrenceProps} className={styles.wrapperSpan}>
        {children}
      </span>
    )
  }

  const parentProps = parent?.props || {}

  return cloneElement(parent, {
    ...parentProps,
    ...refrenceProps,
  })
}
