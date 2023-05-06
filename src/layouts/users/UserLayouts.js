import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";

export default function UserLayouts() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Employee List</h1>
      {userList.length > 0 &&
        userList.map((val, key) => {
          return (
            <div key={key} style={{ padding: '20px 0px', width: '60%' }}>
              <Users
                id={val.id}
                name={val.name}
                username={val.username}
                email={val.email}
                address={val.address.street + ", " + val.address.suite + ", " + val.address.city + ", " + val.address.zipcode}
                geo={'Lat: ' + val.address.geo.lat + ' | Long: '+ val.address.geo.lng}
                phone={val.phone}
                website={val.website}
                company={'Company: ' + val.company.name}
                catchPhrase={val.company.catchPhrase}
                bs={val.company.bs}
              />
            </div>
          );
        })}
    </div>
  );
}
