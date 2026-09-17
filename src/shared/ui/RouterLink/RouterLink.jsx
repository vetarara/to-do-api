const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  const handleClick = (event) => {
    event.preventDefault()
    // изменение url-адреса без перезагрузки
    window.history.pushState({}, '', to)
    // вручную генерируются события popstate, чтобы роутер узнал, что путь изменился и обновил состояние
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink