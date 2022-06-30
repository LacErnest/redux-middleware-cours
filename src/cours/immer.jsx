import produce from 'immer'
import { useImmer } from 'use-immer'
import { useState } from 'react';

// export default testReducer = (state = {}, action) => {
//   switch (action.type) {
//     case RECUPERER_ARCTICLES:
//       return {
//         ...state,
//         ...action.articles.reduce((obj, item) => {
//           obj[item.id] = item
//           return obj
//         }, {})
//       }
//     default:
//       return state;
//   }
// }


export default produce((draft, action) => {
  switch (action.type) {
    case RECUPERER_ARTICLES:
      action.articles.array.forEach(element => {
        draft[element.id] = element
      });
    default:
      return state
  }
})




this.state = {
  id: 1,
  email: "test@example.com",
  profile_user: {
    name: "Ernest",
    bio: "Rien à dire pour le moment",
    age: 1
  }
}

changerBioAge = () => {
  this.setState(prevState => ({
    profile: {
      ...prevState.profile,
      age: prevState.profile.age + 1
    }
  }))
}

changerBioAgeImmer = () => {
  this.setState(produce(draft => {
    draft.profile.age += 1
  }))
}


//Composant fonctionnel

// const [state, setState] = useState({
//   id: 1,
//   email: "test@example.com",
//   profile_user: {
//     name: "Ernest",
//     bio: "Rien à dire pour le moment",
//     age: 1
//   }
// })

changerBioAge = () => {
  setState(prevState => ({
    profile: {
      ...prevState.profile,
      age: prevState.profile.age + 1
    }
  }))
}

//Avec le hook useImmer 

const [state, setState] = useImmer({
  id: 1,
  email: "test@example.com",
  profile_user: {
    name: "Ernest",
    bio: "Rien à dire pour le moment",
    age: 1
  }
})

changerBioAgeImmer = (newBio) => {
  setState(draft => {
    draft.profile.bio = newBio
  })
}