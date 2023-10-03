import React, { useEffect, useState } from 'react';
import App from '../App';
import Animation from '../components/animation';
import axios from 'axios';
import './edit.css';
import Export from './Export';


const Edit = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://213.131.37.250:8889/user/');
      setData(response.data);
      console.log('good')
    } catch (err) {
      console.error(err);
      console.log('test');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://213.131.37.250:8889/user/${id}/`);
      fetchData();
      alert('წარმატებით წაიშალა');
    } catch (err) {
      console.error(err);
    }
  };

  const editUser = (item) => {
    setEditedItem(item);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedItem = {
      participant: formData.get('participant'),
      address1: formData.get('address1'),
      address2: formData.get('address2'),
      tel: formData.get('tel'),
      mob: formData.get('mob'),
      mail: formData.get('mail'),
      exhibition: formData.get('exhibition'),
      contact_person: formData.get('contact_person'),
      price: formData.get('price'),
      payed: formData.get('payed'),
      status: formData.get('status'),
      employer: formData.get('employer'),
      date: formData.get('date'),
      logo: formData.get('logo'),
      file: formData.get('file'),
      // Update with other properties as needed
    };

    try {
      await axios.put(`http://213.131.37.250:8889/user/${editedItem.id}/`, updatedItem, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      fetchData();
      setEditedItem(null); // Clear editedItem state after successful update
      alert('წარმატებით შეიცვალა');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <App />
      <Export/>
      <div className="info">
        <h2>კომპანიების ჩამონათვალი</h2>
        {data.length > 0 && <p className="length">მონაწილეების რაოდენობა: {data.length}</p>}
        <Animation>
          <ul className='uldetal'>
          <div className='grdRow'>
            <div className='column-1'><p>მონაწილე</p></div>
            <div className='column-1'><p>ტელეფონი</p></div>
            <div className='column-1'><p>მობილური</p></div>
            <div className='column-1'><p>ელ.ფოსტა</p></div>
            <div className='column-1'><p>საკონტაქტო პირი</p></div>
          </div>
            {data.map((item) => (
              <div className="details" key={item.id}>
                {editedItem && editedItem.id === item.id ? (
                    <form onSubmit={handleFormSubmit} className='form'>
                    <input type="text" name="participant" placeholder="მონაწილე" defaultValue={item.participant} />
                    <input type="text" name="address1" placeholder="იურიდიული მის." defaultValue={item.address1} />
                    <input type="text" name="address2" placeholder="ფაქტიური მის." defaultValue={item.address2} />
                    <input type="tel" name="tel" placeholder="ტელეფონის ნომერი" defaultValue={item.tel} />
                    <input type="tel" name="mob" placeholder="ტელეფონის ნომერი" defaultValue={item.mob} />
                    <input type="email" name="mail" placeholder="ელექტრონული ფოსტა" defaultValue={item.mail} />
                    <input type="text" name="exhibition" placeholder="გამოფენა" defaultValue={item.exhibition} />
                    <input type="text" name="contact_person" placeholder="საკონტაქტო პერსონა" defaultValue={item.contact_person} />
                    <input type="text" name="price" placeholder="ღირებულება" defaultValue={item.price} />
                    <input type="text" name="payed" placeholder="გადახდილი თანხა" defaultValue={item.payed} />
                    <input type="checkbox" name="status" placeholder="სტატუსი" defaultValue={item.status} />
                    <input type="text" name="employer" placeholder="თანამშრომელი" defaultValue={item.employer} />
                    <input type="date" name="date" placeholder="თარიღი" defaultValue={item.date} />
                    <button type="submit" value="Submit">Save</button>
                  </form>
                ) : (
                  
                    <li className="fetchData">
                    <div className='grdRow'>
                      <div className='column'><p>{item.participant}</p></div>
                      <div className='column'><p>{item.tel}</p></div>
                      <div className='column'><p>{item.mob}</p></div>
                      <div className='column'><p>{item.mail}</p></div>
                      <div className='column'><p>{item.contact_person}</p></div>
                   </div>
                    <div className='btns'>
                    <button onClick={() => editUser(item)}>Edit</button>
                    <button onClick={() => deleteUser(item.id)} className='red'>Delete</button>
                    </div>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </Animation>
      </div>
    </div>
  );
};

export default Edit;
