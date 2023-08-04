import PropTypes from 'prop-types'


const EmptyState = ({errorMessage}) => {
  return (
    <h2 className="error-message">{errorMessage}</h2>
  )
}

export default EmptyState

EmptyState.propTypes = {
  errorMessage: PropTypes.string
}