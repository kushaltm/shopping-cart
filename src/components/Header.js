
import {
    FormattedMessage,
    defineMessages,
    
  } from 'react-intl';
const t = defineMessages({
    'header-app-title': {
      id: 'header-app-title',
      defaultMessage: 'Shopping Cart App',
      description: 'The Client Management Portal application title shown next to the GoTo logo',
    },
});
const Header = () => {
  return (
    <span className='header'>
        <FormattedMessage {...t['header-app-title']} />
    </span>
  )
}
export default Header