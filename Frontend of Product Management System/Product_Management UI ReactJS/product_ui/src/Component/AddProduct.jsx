import React, { useState } from 'react'
import productService from '../services/product.service';

const AddProduct = () => {

// for fetching the Products.
  // product: fetch the products
    // setProduct:set the values
  const [product,setProduct]=useState({
    productName:"",
    description:"",
    price:"",
    status:""
  });

  // For Remove the Previouse data those we are write in AddProduct form
   const [msg, setMsg]=useState("");


  // for handle the setproduct i create the method
  const handleChange=(e)=> { //pass the event
    const value=e.target.value; //fetch the value
    setProduct({ ...product,[e.target.name]: value}); //for store the previouse values i use here REST Operator
  };

  // for call the ProductRegsiter method
  const ProductRegsiter=(e)=> {
    e.preventDefault(); //when we click the submit butn then don't it's refresh to anothor page stop current page
    // console.log(product) //for check all the data recived/not (name,description,price,status)
    
    //call the saveProduct method with the help of productService
    productService.saveProduct(product).
    then((res)=> {
      console.log("Product Added Sucessfully");
      setMsg("Product Added Successfully") //
      setProduct({      //for delete the privouse data those write in form & get new form
      productName:"",
      description:"",
      price:"",
      status:"",
    });
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <div className="card">
            <div className="card-header fs-3 text-center">
              Add Products
            </div>
            { //for Print the msg 
                  msg &&<p className="fs-4 text-center text-success">{msg}</p>
            }
            <div className="card-body">
              {/* when we click on the update butten for fetch all the i use ProductRegsiter  */}
            <form onSubmit={(e)=>ProductRegsiter(e)}> 
              <div className="mb-3">
                <label>Enter the Product Name</label>
                
                <input type="text" name="productName" 
                className="form-control" 
                onChange={(e)=>handleChange(e)} //for call the event
                value={product.productName}//delete privouse data this we are write our self in table
                />
              </div>

              <div className="mb-3">
                <label>Enter the Description</label>
                <input type="text" name="description" className="form-control" 
                onChange={(e)=>handleChange(e)} 
                value={product.description}//delete privouse data this we are write our self in table

                />
              </div>

              <div className="mb-3">
                <label>Enter the Price: </label>
                <input type="text" name="price" className="form-control"
                onChange={(e)=>handleChange(e)}
                value={product.price} //delete privouse data this we are write our self in table
                />
              </div>
              <div className="mb-3">
                <label>Enter the Status: </label>
                <input type="text" name="status" className="form-control"
                onChange={(e)=>handleChange(e)}
                value={product.status} //delete privouse data this we are write our self in table
                />
              </div>
              <button className="btn btn-primary col-md-12">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddProduct