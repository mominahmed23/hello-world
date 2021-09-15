
export default function userList({users}){
    return(
        <>
            <h1>Lis of users</h1>
            {users.map((user)=>{
                return(
                    <div key={users.id}>
                        <p>{users.name}</p>
                        <p>{users.email}</p>

                    </div>
                )
            })

            }
        </>
    )
}


export async function getStaticProps(){
    const response=await fetch('https://jsonplaceholder.typeicode.com/users')
    const data = response.json();
    console.log(data);
    return{
        props:{
            users:data,
        },
    }
}