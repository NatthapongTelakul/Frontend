import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import './Home.css';
export default function Home() {
  
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(
        "http://localhost:3000/api/product_types",
        {
          medthod:"GET",
          headers:{
            Accept:"application/json",
            'Content-Type':'application/json',
            Authorization:"Bearer " + localStorage.getItem("access_token")
            
          }
        }
      );
      console.log("Bearer " + localStorage.getItem("access_token"));
      let json = await response.json();
      setProductTypes(json.data);
      console.log ("test19");
      console.log(json.data);
    }
    fetchData();
  },[]);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(
        "http://localhost:3000/api/products/type/" + productTypeId,
        {
          medthod: "GET",
          headers: {
            Accept:"application/json",
            'Content-Type':'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      );
      
      // console.log("Bearer " + localStorage.getItem("access_token"));
      // let json = await response.json();
      // setProductTypes(json.data);
      // console.log ("test19");
      // console.log(json.data);
      const json = await response.json();
      setProducts(json.data);
    }
    fetchData();
  },[productTypeId]);
  

  if (localStorage.getItem("access_token")) {
    console.log(localStorage.getItem("access_token"));

    return (
      <div className="home-body">
        <div className="home-header">
          <div className="home-header-icon"></div>
          <nav>
            <button type="button" class="btn btn-outline-dark btn-lg">Home</button>
            <button type="button" class="btn btn-outline-dark btn-lg">SERVICE</button>
            <button type="button" class="btn btn-outline-dark btn-lg">ABOUT</button>
            <button type="button" class="btn btn-outline-dark btn-lg">CONTENT</button>
          </nav>
        </div>

        <div className="home-container">
          <div className="home-container-top">
            <div className="home-text">เลือกประเภทสินค้า</div>

            <select value= {productTypeId} onChange={(e)=>setProductTypeId(e.target.value)}>
              <option value={0}>ทุกประเภทสินค้า</option> 
              {
                productTypes.map(item =>(
                  <option key = {item.product_type_id} value={item.product_type_id}> 
                    {item.product_type_name} 
                  </option>
                ))
              }
            </select>
            
            <div className="home-addbtn">
              <Link to={"/product/add"} className="btn btn-outline-primary me-3">เพิ่มสินค้า</Link>
            </div>
          </div>

          <div className="container mt-3">
            {
              products.map(item => (
                <ProductItem key={item.product_id} data={item} />
              ))
            }
          </div>
            
        </div>
      </div>
    );
  }

  return (
    <Navigate to="/" replace/>
  );
}

