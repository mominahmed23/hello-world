import { useRouter } from "next/router";

export default function Docs(){
  const router = useRouter();
  const {params=[]}=router.query;
  console.log(params);
  if(params.length==2)
  {
    return(
      <h1>viewing docs for {params[0]} and concept {params[1]}</h1>
    )
  }
  else if(params.length==1)
  {
    return(
      <h1>viewing docs for {params[0]}</h1>
    )
  }
  return(
      <h1>Docs Home Page</h1>
    )
}