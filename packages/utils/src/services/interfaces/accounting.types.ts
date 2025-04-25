export type AccountingProductType = {
  id: number
  name: string
  amount: number
  category_id?: number
  category?: any
  include_vat?: any
  price_type?: string
  rate_type?: string
  type?: string
  description?: string
  chart_account_id?: number
  created_at?: string
  updated_at?: string
  bank_account?: any
  bank_account_id?: number
  category_name?: string
  chart_account: {
    category: {
      name: string
      id: number
    }
  }
}

export type GetAccountingProductsApiFilters = {
  page?: number
  perPage?: number
  search?: string
  date?: { from: string; to: string }
  price?: number
  priceType?: string
  rateType?: string
  type?: string
  includeVat?: boolean
  chartAccountId?: number
  bankAccountId?: number
}
