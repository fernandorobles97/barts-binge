import PropTypes from 'prop-types'
import './EmptyState.css'

const EmptyState = ({errorMessage}) => {
  return (
    <div className='error-message-container'>
      <h2 className="error-message">{errorMessage}</h2>
    </div>
  )
}

export default EmptyState

EmptyState.propTypes = {
  errorMessage: PropTypes.string
}