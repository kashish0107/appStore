import './index.css'

// Write your code here

const AppItem = props => {
  const {appItem} = props
  const {appId, appName, imageUrl, category} = appItem

  return (
    <li className="app-list-container">
      <img alt={appName} className="image" src={imageUrl} />
      <p className="head">{appName}</p>
    </li>
  )
}

export default AppItem
