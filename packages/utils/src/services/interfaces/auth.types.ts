export type AuthUserModelType = {
  id: number
  name: string
  email: string
  organization_id: number
  profile?: {
    avatar: string
  }
  created_at: string
  is_archive: boolean
  is_active: boolean
}
