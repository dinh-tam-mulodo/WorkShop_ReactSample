import {  ALL_ACCTS,ADD_ACC,DEL_ACC } from '../constants/index';

export function allAccts(accts) {
  return{
    type: ALL_ACCTS,
    accts: accts
  }
}

export function qryAccts()
{
  return dispatch => {
    WS_AccountCC.getAccts(function(r, e) {
      dispatch(allAccts(r))
    },{escape:false});
  }
}
export function addAccount(accName)
{
  return dispatch => {
    WS_AccountCC.addAccount(accName,function(r, e) {
      dispatch(allAccts(r))
    },{escape:false});
  }
}
export function deleteAccount(accId)
{
  return dispatch => {
    WS_AccountCC.deleteAccount(accId,function(r, e) {
      dispatch(allAccts(r))
    },{escape:false});
  }
}