/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/categories')
         .then(res => res.json())
         .then(data => setCategories(data))
         .catch(error => console.error(error))
   })

   return (
      <div>
         <h4>All Category</h4>
         <div className="ps-4">
            {
               // eslint-disable-next-line no-unused-vars
               categories.map(category => <p
                  // eslint-disable-next-line no-undef
                  key={category.id}
               >
                  <Link to={`/category/${category.id}`} className="text-decoration-none">{category.name}</Link>

               </p>)
            }
         </div>
      </div>
   );
};

export default LeftNav;