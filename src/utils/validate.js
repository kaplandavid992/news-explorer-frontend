function isEmailValid(email) {
    // eslint-disable-next-line 
    const emailRegexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
    return emailRegexp.test(email)
  }

function validation(value, type) {
  if(type === 'email'){ return isEmailValid(value)}
  if( type === 'password') { return value.length >= 8 }
  if( type === 'name') { return value.length >= 2 }
}
    
export default validation;