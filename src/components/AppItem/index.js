import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appId, appName, imageUrl} = eachItem

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
