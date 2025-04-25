import { Button } from 'components/Button/Button'
import { VariantsEnum } from 'enums/enums'
import { isProd } from 'helpers/helpers'
import { useTrans } from 'hooks/useTrans'

import { FallbackProps } from '../ErrorBoundry.types'
import styles from '../ErrorBoundry.module.scss'

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTrans()

  return (
    <div className={styles.fullPage}>
      <b>{t('Something went wrong')}</b>
      <pre>{isProd() ? '' : error.message}</pre>
      <Button
        variant={VariantsEnum.Outline}
        onClick={resetErrorBoundary}
        label={t('Go home page')}
      />
    </div>
  )
}
