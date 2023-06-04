const Square = ({ children, update, index, isSelect }) => {
  const className = `square ${isSelect ? 'is-selected' : ''}`

  const handleClick = () => {
    update({ index })
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

export default Square
