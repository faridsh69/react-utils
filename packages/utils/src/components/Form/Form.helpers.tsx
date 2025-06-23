import { CheckboxController } from './Controllers/CheckboxController'
import { ChecklistController } from './Controllers/ChecklistController'
import { CustomController } from './Controllers/CustomComponentController'
import { DateController } from './Controllers/DateController'
import { GroupController } from './Controllers/GroupController'
import { RadioController } from './Controllers/RadioController'
import { SelectController } from './Controllers/SelectController'
import { TextareaController } from './Controllers/TextareaController'
import { TextController } from './Controllers/TextController'
import { ToggleButtonController } from './Controllers/ToggleButtonController'
import { InputComponentsEnum } from './Form.enums'

export const getInputController = (component?: InputComponentsEnum) => {
  const inputs = {
    [InputComponentsEnum.Text]: TextController,
    [InputComponentsEnum.Textarea]: TextareaController,
    [InputComponentsEnum.Select]: SelectController,
    [InputComponentsEnum.RadioList]: RadioController,
    [InputComponentsEnum.Checkbox]: CheckboxController,
    [InputComponentsEnum.Checklist]: ChecklistController,
    [InputComponentsEnum.ToggleButton]: ToggleButtonController,
    [InputComponentsEnum.Date]: DateController,
    [InputComponentsEnum.Group]: GroupController,
    [InputComponentsEnum.Custom]: CustomController,
  }

  return component && inputs[component] ? inputs[component] : TextController
}

export const getCleanErrorMessage = (message: string) => {
  return message.replaceAll('>', '').replace(/\[\d+\]/g, '')
}
