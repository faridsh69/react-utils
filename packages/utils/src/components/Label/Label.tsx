import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Tooltip } from 'components/Tooltip/Tooltip'
import { ZINDEXES } from 'constants/constants'
import { FontsEnum, IconsEnum, PlacementsEnum } from 'enums/enums'
import { useIsTextFit } from 'hooks/useIsTextFit'

import { LabelProps } from './Label.types'
import styles from './Label.module.scss'

export const Label = (props: LabelProps) => {
  const {
    label = '',
    disabled = false,
    font = FontsEnum.Text12,
    linesCount = 1,
    hasError = false,
    active = false,
    hint = '',
    zIndex = ZINDEXES.tooltip,
    hintZIndex = ZINDEXES.tooltip,
    mouseEnterDelay = 0.3,
    forceTooltip = false,
    color,
    textAlignRight = false,
    required = false,
    tooltipPlacement = PlacementsEnum.Top,
    className,
    htmlFor,
    onClick,
  } = props

  const { isFit, textRef } = useIsTextFit()

  if (!label) return <></>

  return (
    <label
      className={clsx(styles.wrapper, className, textAlignRight && styles.textAlignRight)}
      htmlFor={htmlFor}
      onClick={onClick}
    >
      <Tooltip
        overlay={label}
        disabled={isFit && !forceTooltip}
        placement={tooltipPlacement}
        zIndex={zIndex}
        mouseEnterDelay={mouseEnterDelay}
      >
        <div
          ref={textRef}
          className={clsx(
            styles.text,
            disabled && styles.disabled,
            active && styles.active,
            hasError && styles.hasError,
            linesCount === 1 && styles.oneLine,
            linesCount > 1 && styles.multiLines,
          )}
          style={{
            font: `var(${font})`,
            color,
            // @ts-ignore
            '--lines-count': linesCount,
          }}
        >
          {label}
        </div>
      </Tooltip>
      {required && <Icon icon={IconsEnum.Required} className={styles.required} />}

      {hint && (
        <Tooltip overlay={hint} zIndex={hintZIndex}>
          <Icon icon={IconsEnum.Info} className={styles.hint} />
        </Tooltip>
      )}
    </label>
  )
}
