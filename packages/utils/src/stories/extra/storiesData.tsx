import { FORM_NO_LABEL } from 'components/Form/Form.constants'
import { FormInput } from 'components/Form/Form.types'
import { SelectTriggerComponents } from 'components/Select/Select.enums'
import { SelectOption, SelectProps } from 'components/Select/Select.types'
import { TableCellComponents, TableSeparators } from 'components/Table/Table.enums'
import { TableColumn } from 'components/Table/Table.types'
import { DEFAULT_DEBOUNCE_TIME } from 'constants/constants'
import {
  ColorsEnum,
  IconsEnum,
  InputComponentsEnum,
  InputTextMasksEnum,
  PlacementsEnum,
  SizesEnum,
} from 'enums/enums'
import { generateFakeData } from 'helpers/helpers'

const AVATAR_URLS = [
  'https://s3p.sofifa.net/136be1f301e9a1b881d40d2a1f6744758d9b2bd1.png',
  'https://files.idyllic.app/files/static/2258051?width=256&optimizer=image',
  'https://dh5od79hpom3m.cloudfront.net/flags/de.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwR_rZSPvvl1u7DcpG3DhfD7oSD-NQfvMqqg&s',
]

const LONG_LIST = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Guest',
    label: 'Guest',
  },
  {
    value: 'user',
    label: 'User',
  },
]

export const CHART_OF_ACCOUNT_GROUPS = [
  {
    id: 'Sales Revenue',
    label: 'Sales Revenue',
  },
]

export const SMART_FORM_INPUTS: FormInput[] = [
  {
    name: 'last_name',
    columns: 4,
    component: InputComponentsEnum.Text,
    placeholder: 'Last name',
    clearable: false,
    required: true,
    debounceTime: DEFAULT_DEBOUNCE_TIME,
  },
  {
    name: 'Price',
    columns: 2,
    component: InputComponentsEnum.Text,
    mask: InputTextMasksEnum.PriceDe,
    hint: 'Text hint',
    icon: IconsEnum.Money,
    unit: '$',
    placeholder: 'Price',
    clearable: false,
  },
  {
    name: 'gender',
    columns: 2,
    component: InputComponentsEnum.Radio,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    hint: 'Text hint',
    background: true,
    required: true,
  },

  {
    name: 'Job',
    columns: 4,
    component: InputComponentsEnum.ToggleButton,
    options: [
      { value: 'IT', label: 'IT' },
      { value: 'Other', label: 'Other' },
    ],
    hint: 'Text hint',
  },
  {
    name: 'bio',
    columns: 4,
    component: InputComponentsEnum.Textarea,
    size: SizesEnum.S,
    placeholder: 'First name',
    hint: 'Text hint',
    required: true,
  },
  {
    name: 'roles',
    columns: 4,
    component: InputComponentsEnum.Select,
    multiple: true,
    size: SizesEnum.M,
    showOnlySelecteds: true,
    options: generateFakeData(LONG_LIST),
    hint: 'Text hint',
    required: true,
  },
  {
    name: 'main_role',
    columns: 4,
    size: SizesEnum.M,
    component: InputComponentsEnum.Select,
    multiple: false,
    required: true,
    options: [
      {
        value: 'Admin',
        label: 'Admin',
      },
      {
        value: 2,
        label: 'Guest',
      },
      {
        value: 3,
        label: 'User',
      },
    ],
  },

  {
    name: 'accept_term_and_conditions',
    label: FORM_NO_LABEL,
    columns: 6,
    component: InputComponentsEnum.Checklist,
    background: true,
    size: SizesEnum.M,
    options: [
      {
        value: 'accept',
        label: 'Do you agree our terms?',
      },
      {
        value: 'email',
        label: 'Recieve email?',
      },
    ],
  },
  {
    name: 'has_disablity?',
    columns: 6,
    component: InputComponentsEnum.Checkbox,
    size: SizesEnum.M,
  },
  // {
  //   name: 'family',
  //   label: 'Add new family members',
  //   noItemsLabel: 'No family member added yet',
  //   columns: 12,
  //   component: InputComponentsEnum.Group,
  //   inputs: [
  //     {
  //       name: 'first name',
  //       label: 'First name',
  //       columns: 4,
  //       component: InputComponentsEnum.Text,
  //       placeholder: 'Last name',
  //       clearable: true,
  //     },
  //     {
  //       name: 'last name',
  //       label: 'Last name',
  //       columns: 4,
  //       component: InputComponentsEnum.Text,
  //       mask: InputTextMasksEnum.PriceDe,
  //       placeholder: 'price',
  //       icon: IconsEnum.Money,
  //       unit: '$',
  //     },
  //     {
  //       name: 'gender',
  //       label: 'Gender',
  //       columns: 4,
  //       component: InputComponentsEnum.Radio,
  //       options: [
  //         { value: 'male', label: 'Male' },
  //         { value: 'female', label: 'Female' },
  //       ],
  //       background: false,
  //     },
  //   ],
  // },
  {
    name: 'custom',
    columns: 12,
    component: InputComponentsEnum.Custom,
    children: (
      <small>
        children of <b>awesome</b> custom field
      </small>
    ),
  },
  {
    name: 'group_1',
    label: 'Add new group 1',
    noItemsLabel: 'No group 1 added.',
    checkPathInBreadcrumb: true,
    arrowButtonPath: '/g1/g2',
    breadCrumbOptions: [
      {
        label: 'Group 1',
        path: '/g1',
      },
    ],
    component: InputComponentsEnum.Group,
    inputs: [
      {
        name: 'name_1',
        label: 'Name 1',
        component: InputComponentsEnum.Text,
      },
      {
        name: 'group_2',
        label: 'Add new group 2',
        noItemsLabel: 'No group 2 added.',
        checkPathInBreadcrumb: true,
        arrowButtonPath: '/g1/g2/g3',
        breadCrumbOptions: [
          {
            label: 'Group 1',
            path: '/g1',
          },
          {
            label: 'Group 2',
            path: '/g1/g2',
          },
        ],
        component: InputComponentsEnum.Group,
        inputs: [
          {
            name: 'name_2',
            label: 'Name 2',
            component: InputComponentsEnum.Text,
          },
          {
            name: 'group_3',
            label: 'Add new group 3',
            noItemsLabel: 'No group 3 added.',
            checkPathInBreadcrumb: true,
            arrowButtonPath: '/g1/g2/g3/g4',
            breadCrumbOptions: [
              {
                label: 'Group 1',
                path: '/g1',
              },
              {
                label: 'Group 2',
                path: '/g1/g2',
              },
              {
                label: 'Group 3',
                path: '/g1/g2/g3',
              },
            ],
            component: InputComponentsEnum.Group,
            inputs: [
              {
                name: 'name_3',
                label: 'Name 3',
                component: InputComponentsEnum.Text,
              },
              {
                name: 'group_4',
                label: 'Add new group 4',
                noItemsLabel: 'No group 4 added.',
                checkPathInBreadcrumb: true,
                breadCrumbOptions: [
                  {
                    label: 'Group 1',
                    path: '/g1',
                  },
                  {
                    label: 'Group 2',
                    path: '/g1/g2',
                  },
                  {
                    label: 'Group 3',
                    path: '/g1/g2/g3',
                  },
                  {
                    label: 'Group 4',
                    path: '/g1/g2/g3/g4',
                  },
                ],
                component: InputComponentsEnum.Group,
                inputs: [
                  {
                    name: 'name_4',
                    label: 'Name 4',
                    component: InputComponentsEnum.Text,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const SELECT_DEFAULT_STORY_GROUP = [
  {
    id: 1,
    label: 'Animals',
  },
  {
    id: 2,
    label: 'Other: B-team B-team B-teamB-teamB-teamB-teamB-teamB-team',
  },
]

export const SELECT_DEFAULT_STORY_LIST: SelectOption[] = [
  {
    value: 1,
    label: 'Long John',
    avatar: AVATAR_URLS[0],
    groupId: 1,
  },
  {
    value: 2,
    label: 'Danny Lilian',
    avatar: AVATAR_URLS[1],
    groupId: 1,
  },
  { value: '3', label: 'Long Johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' },
  {
    value: '4',
    label: 'Urgent',
    color: 'var(--danger-light)',
    groupId: 2,
  },
  {
    value: '5',
    label: 'Normal',
    color: 'var(--success-light)',
    groupId: 2,
  },
  {
    value: '6',
    label: 'Low',
    color: 'var(--warning-light)',
    groupId: 2,
  },
  {
    value: '7',
    label: 'Disabled option',
    color: 'var(--warning-light)',
    groupId: 2,
    disabled: true,
  },
  {
    value: 'DE',
    label: 'Germany',
    avatar: AVATAR_URLS[2],
  },
  {
    value: 'AR',
    label: 'Argentina',
    avatar: AVATAR_URLS[3],
  },
]

export const SELECT_DEFAULT_PROPS: SelectProps = {
  multiple: false,
  size: SizesEnum.M,
  placement: PlacementsEnum.BottomStart,
  height: 350,
  isSearchable: true,
  showOnlySelecteds: false,
  disabled: false,
  trigger: {
    component: SelectTriggerComponents.Input,
    props: {
      label: 'Trigger props Label',
    },
  },
  options: SELECT_DEFAULT_STORY_LIST,
  groups: SELECT_DEFAULT_STORY_GROUP,
  value: SELECT_DEFAULT_STORY_LIST[1].value,
  onChange: () => {},
  onScrollToBottom: () => {},
  onSearch: () => {},
  label: '',
  hint: 'Trigger props hint',
  required: true,
  hasError: false,
}

const columnIds = {
  responsible: 'responsible',
  customer: 'customer',
  risk: 'risk',
  employee: 'employee',
  total_amount: 'total amount',
  documents: 'documents',
  due_date: 'due date',
  projects: 'projects',
  contracts: 'contracts',
  view: 'view',
  edit: 'edit',
  delete: 'delete',
  customAction: 'customAction',
  more: 'more',
  call: 'call',
  mail: 'mail',
}

export const TABLE_COLUMNS: TableColumn[] = [
  {
    id: columnIds.customer,
    label: 'customer',
    component: TableCellComponents.Title,
    isPrimary: true,
    isSortable: true,
    widthConstraints: {
      min: '150px',
      max: '200px',
    },
  },
  {
    id: columnIds.employee,
    label: 'employee',
    component: TableCellComponents.Count,
    separator: TableSeparators.halfLine,
  },
  {
    id: columnIds.total_amount,
    label: 'total amount',
    component: TableCellComponents.Price,
    separator: TableSeparators.halfLine,
    widthConstraints: {
      min: '150px',
      max: '200px',
    },
  },
  {
    id: columnIds.due_date,
    label: 'due date',
    component: TableCellComponents.Date,
    separator: TableSeparators.halfLine,
  },
  {
    id: columnIds.documents,
    label: 'documents',
    component: TableCellComponents.File,
    separator: TableSeparators.halfLine,
    widthConstraints: {
      min: 100,
      max: 120,
    },
  },
  {
    id: columnIds.projects,
    label: 'projects',
    component: TableCellComponents.Chips,
    separator: TableSeparators.halfLine,
  },

  // {
  //   id: columnIds.contracts,
  //   label: 'contracts',
  //   component: TableCellComponents.Custom,
  //   separator: TableSeparators.halfLine,
  //   widthConstraints: {
  //     min: '20px',
  //     max: 60,
  //   },
  // },

  {
    id: columnIds.view,
    component: TableCellComponents.ViewAction,
  },
  {
    id: columnIds.edit,
    component: TableCellComponents.EditAction,
  },
  {
    id: columnIds.delete,
    component: TableCellComponents.DeleteAction,
  },
  {
    id: columnIds.call,
    component: TableCellComponents.CallAction,
  },
  {
    id: columnIds.mail,
    component: TableCellComponents.EmailAction,
  },
  {
    id: columnIds.more,
    component: TableCellComponents.MoreAction,
  },
  // {
  //   id: columnIds.customAction,
  //   icon: IconsEnum.Ok,
  //   component: TableCellComponents.CustomAction,
  // },
]

export const TABLE_CELLS = [
  {
    columnId: columnIds.customer,
    props: {
      label:
        'ProKasro MEchatronic GMBH ProKasro MEchatronic GMBH ProKasro MEchatronic GMBH ProKasro MEchatronic GMBH',
      subLabel: 123456,
      color: ColorsEnum.Blue,
      // backgroundColor: ColorsEnum.RedTransparent,
    },
  },
  {
    columnId: columnIds.risk,
    props: {
      label: 'Medium',
      colorEnum: ColorsEnum.Orange,
    },
  },
  {
    columnId: columnIds.employee,
    props: {
      label: 89,
      subLabel: 'employees',
      bold: true,
    },
  },
  {
    columnId: columnIds.total_amount,
    props: {
      label: 30000,
    },
  },
  {
    columnId: columnIds.due_date,
    props: {
      label: '2025-03-12',
      showDateDiff: true,
      showDate: false,
      icon: null,
    },
  },
  {
    columnId: columnIds.documents,
    props: {
      documents: [
        {
          name: 'filename.pdf filename.pdf filename.pdf filename.pdf filename.pdf filename.pdf',
          type: 'pdf',
        },
      ],
    },
  },
  {
    columnId: columnIds.projects,
    props: {
      chips: [
        {
          label: 'Project Name 1',
        },
        {
          label: 'Project Name 2',
        },
      ],
    },
  },
  {
    columnId: columnIds.responsible,
    props: {
      label: 'Johnx Doe',
      subLabel: 'Frontend',
      // avatar: '',
      avatar: 'https://dh5od79hpom3m.cloudfront.net/avatars/avatarCat.png',
    },
  },

  // {
  //   columnId: columnIds.contracts,
  //   props: {
  //     children: <div style={{ background: 'red', width: '600px', height: '90px' }}>SAMPLE</div>,
  //   },
  // },
  {
    columnId: columnIds.view,
    props: {
      onClick: () => alert('View Clicked!'),
      disabled: false,
    },
  },
  {
    columnId: columnIds.edit,
    props: {
      onClick: () => alert('Edit Clicked!'),
      disabled: true,
    },
  },
  {
    columnId: columnIds.delete,
    props: {
      onClick: () => alert('Delete Clicked!'),
      disabled: true,
    },
  },
  {
    columnId: columnIds.call,
    props: {
      onClick: () => alert('call Clicked!'),
      disabled: true,
    },
  },
  {
    columnId: columnIds.mail,
    props: {
      // onClick: () => alert('mail Clicked!'),
      // disabled: true,
    },
  },
  {
    columnId: columnIds.customAction,
    props: {
      onClick: () => alert('Custom Action Clicked!'),
      iconColor: ColorsEnum.Green,
      disabled: false,
    },
  },
  {
    columnId: columnIds.more,
    props: {
      options: [
        {
          label: 'download',
          icon: IconsEnum.View,
          onClick: () => alert('download'),
        },
        {
          label: 'forward',
          icon: IconsEnum.View,
          onClick: () => alert('forward'),
        },
      ],
    },
  },
]

export const INVOICES_TABBLE_COLUMN_IDS = {
  status: 'status',
  number: 'number',
  date: 'date',
  umsatz: 'umsatz',
  dueDate: 'dueDate',
  totalAmount: 'totalAmount',
  payment: 'payment',
  pending: 'pending',
  paymentPercent: 'paymentPercent',
  editAction: 'editAction',
  deleteAction: 'deleteAction',
}
