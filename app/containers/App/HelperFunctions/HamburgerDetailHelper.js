import {fromJS,toJS,Map} from 'immutable';

export default function(hamburgerObject,trigger){
  var newHamburgerObject = {}

  if(trigger == ''){
    hamburgerObject.map((value,key)=>{
      newHamburgerObject[key] = false;
      newHamburgerObject['toggle'] = false;
    })
  } else {
    hamburgerObject.map((value,key)=>{
      newHamburgerObject[key] = false;
      newHamburgerObject['toggle'] = true
      if(key == trigger && value == false){
        newHamburgerObject[key] = true;
      }

    })
  }
  const returnedObject = Map(newHamburgerObject)
  return returnedObject

};

///key == engagement

/// trigger === engagement
