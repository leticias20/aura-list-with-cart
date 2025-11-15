export const CartConfirmItem = ({image, name, quantity, price}) => {
  return (
    <div className='border-1 border-transparent border-b-Silver text-sm py-4'>
      <div className='flex justify-between items-center px-4'>
        <div className='flex gap-4'>
          <img className='size-12' src={image.thumbnail} alt="" />
          <div>
            <h3 className='font-bold'>{name}</h3>
            <div className='flex gap-2'>
              <p className='text-Gray font-semibold'>{quantity}x</p>
              <p className='text-Charcoal'>@${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <p className='font-bold text-Luxury-Black'>${(quantity*price).toFixed(2)}</p>
      </div>
    </div>
  )
}
