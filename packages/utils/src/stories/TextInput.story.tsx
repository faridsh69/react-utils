import { useState } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { TextInputProps } from 'components/TextInput/TextInput.types'
import { IconsEnum, SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const TextInputStory = () => {
  const [value, setValue] = useState('Value')

  const onChange = (e: any) => setValue(e.target.value)

  const props: TextInputProps = {
    value,
    onChange,
    label: 'Email (autoComplete)',
    width: 400,
    hasError: false,
    clearable: true,
    disabled: false,
    withHandle: false,
    wrapperClassName: 'string',
    // iconColor: ColorsEnum.Blue,
    // defaultValue: 'Default ',
    // avatar: 'https://dh5od79hpom3m.cloudfront.net/avatars/avatarCat.png',
    icon: IconsEnum.View,
    size: SizesEnum.M,
    placeholder: 'Place holder is here...',
    errorText: '',
    unit: '$',
    required: true,
    hint: 'Hint goes here...',

    noBorderRadiuses: [],
    noBorderColors: [],
    type: 'email',
    autoComplete: 'email',
    active: false,
    readOnly: false,
    copyable: true,
    hideable: true,
  }

  const errorText = 'AAAAAAAA AAAAAAAAAA AAAAAAAA AAAAAAAAA AAAAAAAA AAAAAAAAAA AAAAAAAAAA'

  return (
    <div className={styles.story}>
      <h4>3 Text input, 4 Button, 5 Icon</h4>
      <TextInput {...props} iconColor='green' label='' errorText={errorText} />
      <TextInput {...props} active label='active' />
      <TextInput {...props} errorText='sad' label='errorText' />
      <TextInput {...props} readOnly label='readOnly' />
      <TextInput {...props} disabled label='disabled' />
      <TextInput {...props} size={SizesEnum.L} icon={undefined} label='large' />
      <TextInput {...props} size={SizesEnum.S} />
      <TextInput {...props} />
      <TextInput
        {...props}
        size={SizesEnum.M}
        withHandle={true}
        clearable={false}
        copyable={false}
        hideable={false}
        width={300}
        readOnly={true}
      />
      <TextInput {...props} clearable={false} copyable={true} />
      <TextInput {...props} clearable={false} copyable={false} hideable={true} />
    </div>
  )
}
