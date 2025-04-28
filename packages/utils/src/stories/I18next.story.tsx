import { Select } from 'components/Select/Select'
import { SizesEnum } from 'enums/enums'
import { useTrans } from 'hooks/useTrans'
import { i18nextUtils } from 'i18n/i18nextInstance'

import styles from './Story.module.scss'

export const I18nextStory = () => {
  const { t } = useTrans()

  return (
    <div className={styles.story}>
      <h4>13 Language (I18 next) story</h4>
      <Select
        multiple={false}
        size={SizesEnum.S}
        label={t('i18-label')}
        width='170px'
        isSearchable={false}
        value={i18nextUtils.language}
        onChange={value => i18nextUtils.changeLanguage('' + value)}
        options={[
          {
            value: 'de',
            label: 'Germany',
          },
          {
            value: 'en',
            label: 'English',
          },
        ]}
      />
    </div>
  )
}
