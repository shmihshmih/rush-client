import React from 'react'
import Checkbox from "react-materialize/lib/Checkbox";

export const ProfilePage = () => {
  const user = {
    name: 'Dodik',
    email: "dodik@protonmail.com",
    avatar: "https://picsum.photos/200/200?random=3",
    isDriver: false,
    isPedestrian: true,
    about: "Ya takoy klassniy, horosho razgadivayui zagadki da i viibshe umnik hot, kuda, chmafff'",
    birth: "16-05-1992",
    rate: "25",
    car: "Chevrolet Cruise",
    isCarVisible: true,
    carNumber: "c250jv",
    isCarNumberVisible: true
  }
  return (
    <>
      <h3>Профиль:</h3>
      <div className="user-card">
        <div className="user-photo">
          <img src={user.avatar} alt={user.name}/>
        </div>
        <div className="user-info">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.rate}</p>
          <p>{user.birth}</p>
          <div>
            <Checkbox
              id="isDriver"
              label="Водитель"
              value="isDriver"
            />
            <Checkbox
              id="isPedestrian"
              label="Пешеход"
              value="isPedestrian"
            />
          </div>
          <div>
            <p>{user.car} : {user.carNumber}</p>
          </div>
          <p>{user.about}</p>
        </div>
      </div>
    </>
  )
}