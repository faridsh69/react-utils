import { Button } from 'components/Button/Button'
import { useCrudProducts } from 'services/hooks/base/useCrudProducts'

export const CrudSample = () => {
  const productFakeData = {
    name: 'name',
    price_type: 'price',
    type: 'product',
    include_vat: true,
    chart_account_id: 1,
    amount: 2,
  }

  const {
    list: products,
    // single: product,
    isLoading,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useCrudProducts()

  const handleAddProduct = () => {
    createMutation.mutate({
      data: productFakeData,
      onSuccess: () => {},
      onError: () => {},
    })
  }

  const handleUpdateProduct = () => {
    updateMutation.mutate({ data: { id: 13, ...productFakeData } })
  }

  const handleDeleteProduct = () => {
    deleteMutation.mutate({ id: 17 })
  }

  return (
    <div>
      {products.length}
      {isLoading && <div>Loading...</div>}
      {createMutation.isPending && <div>Creating folder...</div>}
      <br />
      <br />
      <Button label='create product' onClick={handleAddProduct} />
      <Button label='update product' onClick={handleUpdateProduct} />
      <Button label='delete product' onClick={handleDeleteProduct} />
    </div>
  )
}
