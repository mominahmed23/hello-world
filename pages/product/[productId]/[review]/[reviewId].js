import { useRouter } from "next/router";

export default function productDtailReview(){
const router = useRouter();
const {productId,reviewId}=router.query;
return (
    <div>
        <h1>Review {reviewId} of product {productId}</h1>
    </div>
)
}