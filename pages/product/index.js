import Link from "next/link"
import router, { useRouter } from "next/router";
export default function Product({productId=100}) {
  const handleClick=()=>{
      console.log("placing order");
      router.push('/about')
  };
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    <h1>Product 1</h1>
    <h1>Product 2</h1>
    <button onClick={handleClick}>
      click here
    </button>
    <Link href='/'>
    <a><h1>{productId}</h1></a>
    </Link>
    </div>
    
  )
}
