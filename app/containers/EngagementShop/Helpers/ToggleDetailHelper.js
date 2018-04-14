import {fromJS,toJS,Map} from 'immutable';

export default function(dropdownObject,trigger){
  var newObject = {}
  dropdownObject.map((value,key)=>{
    newObject[key] = false;
    if(key == trigger && value == false){
      newObject[key] = true;
        newObject['toggle'] = true
    }
  })
   const returnedObject = Map(newObject)
return returnedObject
};
