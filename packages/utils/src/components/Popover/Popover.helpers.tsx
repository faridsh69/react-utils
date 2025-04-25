import { Children, cloneElement, MouseEvent, ReactElement, ReactNode } from 'react'

import styles from './Popover.module.scss'

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

export const getMouseEventPosition = (e: MouseEvent<HTMLElement>) => {
  return {
    width: 0,
    height: 0,
    x: e.clientX,
    y: e.clientY,
    top: e.clientY,
    bottom: e.clientY,
    right: e.clientX,
    left: e.clientX,
  }
}
