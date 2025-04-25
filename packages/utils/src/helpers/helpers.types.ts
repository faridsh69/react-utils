export type TypeResolve = (...args: any[]) => void

export type TypeLSUserModel = {
  id: number
  organization_id: number
  office_id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  language: string
  team_id: number
  contract_start: string
  working_days: number[]
  weekly_working_hours: number
  role_id: number
  is_active: number
  access_token: string
}
