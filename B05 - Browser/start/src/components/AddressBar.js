import React, { useEffect, useState } from 'react';

const addHTTPs = (url) => {

  return url.startsWith("http") ? url : `https://${url}`
}


const AddressBar = ({ update, url }) => {

  const [value, setValue] = useState(url || '')

  useEffect(() => {
    setValue(url)
  }, [url])

  const handleSubmit = (event) => {
    event.preventDefault();
    update(addHTTPs(value));

  }




  return (
    <div className="address-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={value}
          onChange={(event) => setValue(event.target.value)} />
      </form>
    </div>
  );
}

export default AddressBar;
