import React, { useEffect, useState } from 'react';

const FetchAPIData = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="bg-white text-black p-6 shadow-md hover:translate-y-1 transition">
      <h4 className="text-2xl font-semibold text-blue-500">Fetch API Data</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <>
            {console.log(user)}
            <div className="mt-4" key={index}>
              <div className="card card-side bg-base-100/10 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <p>Username: {user.username} </p>
                  <p>Phone: {user.phone}</p>
                  <p>Web: {user.website}</p>
                  <p>Company: {user.company.name}</p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchAPIData;
