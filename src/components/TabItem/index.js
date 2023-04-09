import './index.css'

const TabItem = props => {
  const {eachItem, tabClick, isSelected} = props
  const {tabId, displayText} = eachItem
  const className = isSelected ? 'active-tab-btn' : 'tab-btn'

  const onTabClick = () => {
    tabClick(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className={className} onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
