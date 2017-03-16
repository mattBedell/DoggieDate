function checkToken(authRes) {
  return {
    type: authRes.auth,
    expiredAt: authRes.expiredAt,
    checkedAt: new Date(),
  }
}




function verifyLocalToken(res, actionSuccess, dispatch) {
  if(res.auth !== 'AUTHORIZED') {
    dispatch(checkToken(res));
  } else {
    dispatch(actionSuccess(res.data));
  }
}
 export default verifyLocalToken
