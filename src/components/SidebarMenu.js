import React, { useState, useEffect } from 'react'

function SidebarMenu({ product , setproduct }) {

    const [allProducts, setAllProducts] = useState(() => product)
    const [selectedValue, setSelectedValue] = useState(null);
    const [newProducts, setnewProducts] = useState(null)


    const changeHandler = (e) => {
        console.log(e.target.value);
        setSelectedValue(e.target.value);
    }

    const resetHandle = ()=> {
        setproduct(allProducts)
    }

    

    useEffect(() => {

        const applySorting = (value)=>{
            if(value === "lowtohigh"){
                const sorted = [...product].sort((a, b) => {
                    return a.price - b.price;
                  });
                  console.log(sorted);
                  setnewProducts(sorted)
            }
            else if(value === "hightolow"){
                const sorted = [...product].sort((a, b) => {
                    return b.price - a.price;
                  });
                  console.log(sorted);
                  setnewProducts(sorted)
            }
            else if(value === "M" ||
                    value === "S" ||
                    value === "XL" ||
                    value === "L")  {
                const sorted = [...allProducts].filter((prod)=>{
                    console.log(value);
                    return prod.size.includes(value)
                })
                setnewProducts(sorted);
            }
            else if(value === "men"){
                console.log(value);
                const sorted = [...allProducts].filter((prod) => 
                     prod.category.toLowerCase() === "men's clothing"
                  );
                  console.log(sorted);
                  setnewProducts(sorted)
            }
            else if(value === "women"){
                console.log(value);
                const sorted = [...allProducts].filter((prod) =>
                     prod.category.toLowerCase() === "women's clothing"
                  );
                  console.log(sorted);
                  setnewProducts(sorted)
            }
            else if(value === "A" ||
                    value === "B" ||
                    value === "C" ||
                    value === "D" )     {
                const sorted = [...product].filter((prod)=>{
                    return prod.brand === value;
                })
                setnewProducts(sorted);
            }
           
        }

        if(selectedValue){
            applySorting(selectedValue);
        }
      
        
    }, [selectedValue,setproduct])

    useEffect(() => {
        if (newProducts) {
            setproduct(newProducts);
        }
      }, [newProducts, setproduct]);
    


    return (
        <div className="sidebar-menu">
        <h3>Products</h3>

        <div className="sorting-bar" >
        

            <div className="item" >
                <strong>Price :-</strong>
                <select onChange={changeHandler} >
                    <option value="null"  >Select...</option>
                    <option value="lowtohigh">Low to High</option>
                    <option value="hightolow">High to Low</option>
                </select>
            </div>
            
            <div className="item" >
                <strong>Size :-</strong>
                <select onChange={changeHandler} >
                    <option value="null"  >Select...</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <div className="item" >
                <strong>Brand :-</strong>
                <select onChange={changeHandler} >
                    <option value="null"  >Select...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>


            <div className="item" >
                <strong>Ideal for :-</strong>
                <select onChange={changeHandler} >
                    <option value="null"  >Select...</option>
                    <option value="men">MEN</option>
                    <option value="women">WOMEN</option>
                </select>
            </div>

            <div className="item" >
                <button onClick={resetHandle} > Clear filters </button>
            </div>


            </div>
        

        </div>
    )
}

export default SidebarMenu
