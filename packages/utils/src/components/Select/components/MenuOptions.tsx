import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { SizesPixelEnum } from 'enums/enums'

import { MenuOptionsProps } from '../Select.types'
import { MenuOption } from './MenuOption'
import styles from '../Select.module.scss'

export const MenuOptions = (props: MenuOptionsProps) => {
  const { options, size, multiple, handleClickOption, handleScrollMenu } = props

  const optionsVirualRef = useRef(null)

  const rows = useVirtualizer({
    count: options.length,
    getScrollElement: () => optionsVirualRef.current,
    estimateSize: () => +SizesPixelEnum[size],
    overscan: 20,
  })

  return (
    <div className={styles.optionsVirualWrapper} ref={optionsVirualRef} onScroll={handleScrollMenu}>
      <div
        className={styles.optionsVirualList}
        style={{
          height: rows.getTotalSize(),
        }}
      >
        {rows.getVirtualItems().map(row => {
          const option = options[row.index]

          return (
            <div
              key={row.key}
              className={styles.optionsVirualOption}
              style={{
                height: row.size,
                transform: `translateY(${row.start}px)`,
              }}
            >
              <MenuOption
                index={row.index}
                option={option}
                onClick={handleClickOption}
                multiple={multiple}
                size={size}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
