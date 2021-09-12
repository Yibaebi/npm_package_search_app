import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store'

const useActionCreators = () => {
  const reduxDispatch = useDispatch()
  return bindActionCreators(actionCreators, reduxDispatch)
}

export { useActionCreators }
