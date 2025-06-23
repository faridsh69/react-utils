import { CheckboxController } from './controller/CheckboxController'
import { ChecklistController } from './controller/ChecklistController'
import { CustomController } from './controller/CustomComponentController'
import { DateController } from './controller/DateController'
import { GroupController } from './controller/GroupController'
import { RadioController } from './controller/RadioController'
import { SelectController } from './controller/SelectController'
import { TextareaController } from './controller/TextareaController'
import { TextController } from './controller/TextController'
import { ToggleButtonController } from './controller/ToggleButtonController'
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
