import { useRouter } from "next/router";

export default function productDtail(){
const router = useRouter();
const productId=router.query.productId;
return (
    <div>
        <h1>product details of {productId}</h1>
    </div>
)
}