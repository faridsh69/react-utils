import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from 'components/Button/Button'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { Chip } from 'components/Chip/Chip'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { Form } from 'components/Form/Form'
import { InputComponentsEnum } from 'components/Form/Form.enums'
import { Loader } from 'components/Loader/Loader'
import { Radio } from 'components/Radio/Radio'
import { TextInput } from 'components/TextInput/TextInput'
import { uikitMapper } from 'stories/Form.story'
import { describe, expect, it } from 'vitest'

import { Label } from '../components/Label/Label'

describe('Label', () => {
  it('render label component', () => {
    render(<Label label='Label' />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })
  it('render button component', () => {
    render(<Button label='Button' />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
  it('render TextInput component', () => {
    render(<TextInput label='TextInput' />)
    expect(screen.getByText('TextInput')).toBeInTheDocument()
  })
  it('render Checkbox component', () => {
    render(<Checkbox label='Checkbox' />)
    expect(screen.getByText('Checkbox')).toBeInTheDocument()
  })
  it('render Radio component', () => {
    render(<Radio label='Radio' />)
    expect(screen.getByText('Radio')).toBeInTheDocument()
  })
  it('render Loader component', () => {
    render(<Loader />)
    expect(screen.getByText('The page is currently loading.')).toBeInTheDocument()
  })
  it('render DataNotFound component', () => {
    render(<DataNotFound />)
    expect(screen.getByText('No results found!')).toBeInTheDocument()
  })
  it('render Chip component', () => {
    render(<Chip label='Chip' />)
    expect(screen.getByText('Chip')).toBeInTheDocument()
  })
  it('render Form component', async () => {
    render(
      <Form
        uikitMapper={uikitMapper}
        inputs={[
          {
            name: 'name',
            label: 'Textarea',
            placeholder: 'TestInput',
            component: InputComponentsEnum.Textarea,
          },
        ]}
      />,
    )
    expect(screen.getByText('Textarea')).toBeInTheDocument()
    expect(screen.getByText('Form')).toBeInTheDocument()

    const input = screen.getByPlaceholderText('TestInput')
    await userEvent.type(input, 'Hello World')

    expect(input).toHaveValue('Hello World')
  })
})
