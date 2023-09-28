type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  className?: string
  name: string
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ type, className, name, onClick }) => {
  return (
    /* eslint-disable-next-line react/button-has-type */
    <button className={className} onClick={onClick} type={type}>
      {name}
    </button>
  )
}
