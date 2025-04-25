import packageJson from '../../package.json'
import { CheckListStory } from './CheckList.story'
import { ChipStory } from './Chip.story'
import { ConfirmStory } from './Confirm.story'
import { DataNotFoundStory } from './DataNotFound.story'
import { FormStory } from './Form.story'
import { I18nextStory } from './I18next.story'
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
      <FormStory />

      <hr />
      <UseCrudStory />

      <pre>
        1) usecrud, a library to manage all api calls: we have run toast automatically, handle all
        exceptions, do optimistic update, do caching, manage query keys
        <br />
        2) createApiInstance final version of fetching bearer token, do refresh token, also added
        types and so on
        <br />
        3) Bootstrap grid system, now we have row col when ever we include a file inside there,
        there will be `responsive`
        <br />
        4) Form: handle creating forms with validations only with having array of input props
        <br />
        5) PageNotFound: using 1 component everywhere
        <br />
        6) ErrorBoundry: ready to show error component to wrap routes
        <br />
        7) suspender: do fully lazy loading and make the page load size much less
        <br />
        8) Label: show tooltip if rest of label is hidden
        <br />
        9) Image: show loading in a mean while image is loading, and show image with smooth opacity
        to 1<br />
        10) having popover when we need to show a baloon of data
        <br />
        11) virtualization inside a dropdown to improve the page performance
        <br />
        12) added all custom hooks we need
        <br />
        13) added all helper methods we need
        <br />
        14) managing all local storage keys based on different apps
        <br />
        15) storing all images in one place to stop exposing single image from all apps like
        confirmation images
        <br />
      </pre>
    </div>
  )
}
