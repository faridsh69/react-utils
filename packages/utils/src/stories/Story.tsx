import packageJson from '../../package.json'
import { ButtonStory } from './Button.Story'
import { CheckListStory } from './CheckList.story'
import { ChipStory } from './Chip.story'
import { ConfirmStory } from './Confirm.story'
import { DataNotFoundStory } from './DataNotFound.story'
import { FormStory } from './Form.story'
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
      <hr />
      <FormStory />
      <hr />
      <UseCrudStory />

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
    </div>
  )
}
