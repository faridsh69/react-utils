import packageJson from '../../package.json'
import { ButtonStory } from './Button.Story'
import { CheckListStory } from './CheckList.story'
import { ChipStory } from './Chip.story'
import { ConfirmStory } from './Confirm.story'
import { DataNotFoundStory } from './DataNotFound.story'
import { FormStory } from './Form.story'
import { HelpersStory } from './HelpersStory'
import { I18nextStory } from './I18next.story'
import { IconsStory } from './IconsStory'
import { ImageStory } from './Image.story'
import { LabelStory } from './Label.story'
import { LoaderStory } from './Loader.story'
import { ModalStory } from './Modal.story'
import { PopoverStory } from './Popover.story'
import { RadioListStory } from './RadioListStory'
import { SelectStory } from './Select.story'
import { TabItemsStory } from './TabItems.story'
import { TableStory } from './Table.story'
import { TextInputStory } from './TextInput.story'
import { ToggleButtonStory } from './ToggleButton.story'
import { UseCrudStory } from './useCrud.story'
import styles from './Story.module.scss'

export const Story = () => {
  return (
    <div className={styles.story}>
      <h1>
        {packageJson.name} - {packageJson.version}
      </h1>
      <h3>npm i {packageJson.name}@latest</h3>
      <h3>This package is a combination of:</h3>
      <pre>
        A) A powerfull form generator, highly suggested to use it
        <br />
        B) A powerfull api handler hook named useCrud, 100% suggested to use it
        <br />
        C) ui-kit, like bootstrap or MUI
        <br />
        D) All custom hooks and usefull helper methods, like loadash but much more lighter
      </pre>
      <h3>
        You need to customise it based on your own components and design system, then upload it to
        your github like: npm i @your-github/react-utils@latest
      </h3>
      <hr />
      <FormStory />
      <hr />
      <UseCrudStory />
      <hr />
      <LabelStory />
      <TextInputStory />
      <CheckListStory />
      <RadioListStory />
      <PopoverStory />
      <SelectStory />
      <ModalStory />
      <ConfirmStory />
      <ImageStory />
      <LoaderStory />
      <DataNotFoundStory />
      <ChipStory />
      <ToggleButtonStory />
      <TabItemsStory />
      <I18nextStory />
      <TableStory />
      <IconsStory />
      <ButtonStory />
      <HelpersStory />
    </div>
  )
}
